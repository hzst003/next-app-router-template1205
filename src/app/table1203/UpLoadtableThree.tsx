"use client";
import React, { useState } from "react";

export default function UploadTableThree() {
  const [file, setFile] = useState<File | null>(null);
  const [msg, setMsg] = useState("");
  const [builder, setBuilder] = useState(""); // 建设单位
  const [projectName, setProjectName] = useState(""); // 项目名称

  // 上传表三
  const uploadTable03 = async () => {
    if (!file) return;
    const form = new FormData();
    form.append("file", file);

    setMsg("上传中，请稍候...");

    try {
      const res = await fetch("/api/uploadtable03", {
        method: "POST",
        body: form,
      });
      const data = await res.json();
      setMsg("上传成功\n" + JSON.stringify(data, null, 2));
    } catch (e: any) {
      setMsg("上传失败: " + e.message);
    }
  };

  // 清空两个表（表3 + 表2）
  const clearTables = async () => {
    setMsg("清空中，请稍候...");

    try {
      const res1 = await fetch("/api/cleartable03", { method: "POST" });
      const data1 = await res1.json();

      const res2 = await fetch("/api/cleartable02", { method: "POST" });
      const data2 = await res2.json();

      setMsg(
        "清空成功:\n" +
          "表3: " + JSON.stringify(data1, null, 2) + "\n" +
          "表2: " + JSON.stringify(data2, null, 2)
      );
    } catch (e) {
      setMsg("清空失败: " + e);
    }
  };

  // 计算并导入数据到 public_info
  const importData = async () => {
    if (!builder || !projectName) {
      setMsg("请填写所有字段");
      return;
    }

    setMsg("导入中，请稍候...");

    try {
      // 获取表03的数据
      const res = await fetch("/api/gettable03");
      const data = await res.json();
      const rows = data.items || [];

      const totalTech = rows.reduce(
        (sum: number, r: any) => sum + Number(r.amount_technician || 0),
        0
      );
      const totalOrd = rows.reduce(
        (sum: number, r: any) => sum + Number(r.amount_ordinary_staff || 0),
        0
      );

      const left6 = totalTech * 114;
      const left7 = totalOrd * 61;
      const left5 = left6 + left7;

      const res2 = await fetch("/api/importpublictableinfo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          project_name: projectName,
          left1: 0,
          left2: 0,
          left3: 0,
          left4: 0,
          left5: left5,
          left6: left6,
          left7: left7,
        }),
      });

      const result = await res2.json();

      if (res2.ok) {
        setMsg("导入成功:\n" + JSON.stringify(result, null, 2));
      } else {
        setMsg("导入失败:\n" + JSON.stringify(result, null, 2));
      }
    } catch (e: any) {
      setMsg("请求失败: " + e.message);
    }
  };

return (
  <div className="flex items-center justify-center p-6 bg-gray-100 min-h-screen no-print">
    <div className="bg-white shadow-xl rounded-2xl p-6 space-y-5" style={{ width: '320px' }}>
      
      {/* 标题 */}
      <h1 className="text-lg font-bold text-gray-800 text-center">
        上传 Excel 表三甲（.xlsx）
      </h1>

      {/* 输入字段 */}
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="建设单位"
          value={builder}
          onChange={(e) => setBuilder(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <input
          type="text"
          placeholder="项目名称"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      {/* 文件上传 */}
      <div className="flex flex-col items-center gap-2">
        <label className="cursor-pointer w-full">
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg py-5 hover:bg-gray-50 transition">
            <span className="text-gray-600 font-medium">点击选择文件</span>
            <span className="text-xs text-gray-400 mt-1">仅支持 .xlsx .xls</span>
          </div>
          <input
            type="file"
            accept=".xlsx,.xls"
            className="hidden"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </label>
        {file && (
          <div className="text-sm text-green-600 font-medium truncate w-full text-center">
            已选择：{file.name}
          </div>
        )}
      </div>

      {/* 操作按钮 */}
<div className="flex justify-between gap-2 ">
  <button
    onClick={uploadTable03}
    className="w-20 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-transform active:scale-95"
  >
    上传
  </button>
  <button
    onClick={importData}
    className="w-20 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-transform active:scale-95"
  >
    计算
  </button>
  <button
    onClick={clearTables}
    className="w-20 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition-transform active:scale-95"
  >
    清空
  </button>
</div>

      {/* 输出区 */}
      <pre className="bg-gray-50 p-3 rounded-lg text-sm text-gray-700 overflow-auto max-h-56 border border-gray-200">
        {msg || "暂无输出"}
      </pre>
    </div>
  </div>
);

}