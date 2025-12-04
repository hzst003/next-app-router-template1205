import { NextResponse } from "next/server";

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_API_ENDPOINT;

export const POST = async () => {
  const res = await fetch(`${DIRECTUS_URL}/items/final_account_table03`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {
        filter: {},
      },
    }),
  });

  // ⭐ Directus 删除成功可能返回 204 No Content
  let data = null;
  if (res.status !== 204) {
    try {
      data = await res.json();
    } catch {
      data = null;
    }
  }

  return NextResponse.json({
    cleared: true,
    status: res.status,
    directus: data,
  });
};
