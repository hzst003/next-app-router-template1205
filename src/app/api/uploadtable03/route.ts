/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import * as XLSX from "xlsx";

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_API_ENDPOINT;
//const DIRECTUS_TOKEN = process.env.DIRECTUS_TOKEN!;

export const POST = async (req: Request) => {
  const form = await req.formData();
  const file = form.get("file") as File;

  if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

  const buffer = Buffer.from(await file.arrayBuffer());
  const workbook = XLSX.read(buffer, { type: "buffer" });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(sheet);


  const items = rows.map((r: any) => ({
  index_no: r["序号"],
  code: r["定额编号"],
  name: r["项目名称"],
  unit: r["单位"],
  quantity: r["数量"],
  technician: r["技工"],
  ordinary_staff: r["普工"],
  amount_technician: r["技工合计"],
  amount_ordinary_staff: r["普工合计"],
}));
const results: any[] = [];

for (const item of items) {
  const r = await fetch(`${DIRECTUS_URL}/items/final_account_table03`, {
    method: "POST",
    headers: {
      //"Authorization": `Bearer ${DIRECTUS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),   // ⭐ 每次只发送一条
  });

  const json = await r.json();
  results.push(json);
}

return NextResponse.json({
  imported: items.length,
  directus: results,  // 保存每一行的返回内容
});
};