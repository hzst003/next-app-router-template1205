/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";

export default function TableThree() {
        const today = new Date();
    const formatDate = today.toISOString().slice(0, 10);
    const [rows, setRows] = useState<any[]>([]);
    const [table2rows, setTable2Rows] = useState<any[]>([]);

    // ⭐ 载入 Directus 表 3 数据
    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await fetch("/api/gettable03");
                const data = await res.json();
                setRows(data.items || []);
            } catch (e) {
                console.error("加载失败", e);
            }
        };

                const loadTable2Data = async () => {
            try {
                const res = await fetch("/api/gettable02");
                const data = await res.json();
                setTable2Rows(data.items || []);
            } catch (e) {
                console.error("加载失败", e);
            }
        };

        loadData();
        loadTable2Data();
    }, []);

    const totalTech = rows.reduce(
        (sum, r) => sum + Number(r.amount_technician || 0),
        0
    );

    const totalOrd = rows.reduce(
        (sum, r) => sum + Number(r.amount_ordinary_staff || 0),
        0
    );

    return (
        <>
            <div className="p-6 space-y-10">

                <div className="page-print landscape-page break-before-page">
                    <h2 className="text-lg font-semibold mb-2 text-center">
                        建筑安装工程量决算表（表三）甲
                    </h2>

                    <h4 className="text-[10px] font-semibold  text-left mb-[-10px]">
                        工程编号：{table2rows[0]?.project_code ?? ""}
                    </h4>

                    <div className="flex justify-between items-center w-full mb-[-10px]">
                        <h4 className="text-[10px] font-semibold text-left">
                            工程名称：{table2rows[0]?.project_name ?? ""}
                        </h4>

                        <h4 className="text-[10px] font-semibold text-center">
                            建设单位：XX公司
                        </h4>

                        <h4 className="text-[10px] font-semibold text-right">
                            表格编号：TXL-3甲 第1页
                        </h4>
                    </div>

                    <table className="w-full border border-gray-500 text-sm">
                        <thead className="bg-gray-100">

                            <tr>
                                <th rowSpan={2} className="border px-3 py-2 text-center">序号</th>
                                <th rowSpan={2} className="border px-3 py-2 text-center">定额编号</th>
                                <th rowSpan={2} className="border px-3 py-2 text-center">项目名称</th>
                                <th rowSpan={2} className="border px-3 py-2 text-center">单位</th>
                                <th rowSpan={2} className="border px-3 py-2 text-center">数量</th>
                                <th colSpan={2} className="border px-3 py-2 text-center">单位定额值(工日)</th>
                                <th colSpan={2} className="border px-3 py-2 text-center">合计值(工日)</th>
                            </tr>

                            <tr>
                                <th className="border px-3 py-2 text-center">技工</th>
                                <th className="border px-3 py-2 text-center">普工</th>
                                <th className="border px-3 py-2 text-center">技工</th>
                                <th className="border px-3 py-2 text-center">普工</th>
                            </tr>

                            <tr>
                                <th className="border px-3 py-2 text-center">I</th>
                                <th className="border px-3 py-2 text-center">II</th>
                                <th className="border px-3 py-2 text-center">III</th>
                                <th className="border px-3 py-2 text-center">IV</th>
                                <th className="border px-3 py-2 text-center">V</th>
                                <th className="border px-3 py-2 text-center">VI</th>
                                <th className="border px-3 py-2 text-center">VII</th>
                                <th className="border px-3 py-2 text-center">VIII</th>
                                <th className="border px-3 py-2 text-center">IX</th>
                            </tr>

                        </thead>

                        {/* ⭐ 动态载入 Directus 数据 */}
                        <tbody>
                            {rows.length === 0 ? (
                                <tr>
                                    <td colSpan={9} className="text-center py-3 text-gray-500">
                                        无数据
                                    </td>
                                </tr>
                            ) : (
                                rows.map((r, i) => (
                                    <tr key={r.id}>
                                        <td className="border px-3 py-2 text-center">{r.index_no}</td>
                                        <td className="border px-3 py-2 text-center">{r.code}</td>
                                        <td className="border px-3 py-2 text-center">{r.name}</td>
                                        <td className="border px-3 py-2 text-center">{r.unit}</td>
                                        <td className="border px-3 py-2 text-center">{r.quantity}</td>
                                        <td className="border px-3 py-2 text-center">{r.technician != 0 ? r.technician : ""}</td>
                                        <td className="border px-3 py-2 text-center">{r.ordinary_staff != 0 ? r.ordinary_staff : ""}</td>
                                        {/* 如果为 0 或 NaN 就显示空白 */}
                                        <td className="border px-3 py-2 text-center">
                                            {r.amount_technician != 0 ? r.amount_technician : ""}
                                        </td>

                                        <td className="border px-3 py-2 text-center">
                                            {r.amount_ordinary_staff != 0 ? r.amount_ordinary_staff : ""}
                                        </td>
                                    </tr>
                                ))

                            )}

                            <tr>
                                <td className="border px-3 py-2 text-center">{' '}</td>
                                <td className="border px-3 py-2 text-center">合计</td>
                                <td className="border px-3 py-2 text-center">{' '}</td>
                                <td className="border px-3 py-2 text-center">{' '}</td>
                                <td className="border px-3 py-2 text-center">{' '}</td>
                                <td className="border px-3 py-2 text-center">{' '}</td>
                                <td className="border px-3 py-2 text-center">{' '}</td>
                                <td className="border px-3 py-2 text-center">{totalTech}</td>
                                <td className="border px-3 py-2 text-center">{totalOrd.toFixed(3)}</td>                                
                            </tr>
                                                        <tr>
                                <td className="border px-3 py-2 text-center">{' '}</td>
                                <td className="border px-3 py-2 text-center">总计</td>
                                <td className="border px-3 py-2 text-center">{' '}</td>
                                <td className="border px-3 py-2 text-center">{' '}</td>
                                <td className="border px-3 py-2 text-center">{' '}</td>
                                <td className="border px-3 py-2 text-center">{' '}</td>
                                <td className="border px-3 py-2 text-center">{' '}</td>
                                <td className="border px-3 py-2 text-center">{totalTech}</td>
                                <td className="border px-3 py-2 text-center">{totalOrd.toFixed(3)}</td>                                
                            </tr>
                        </tbody>
                    </table>

                    <div className="flex justify-between text-[10px] font-semibold ">
                        <span>负责人：王五</span>
                        <span>编制：张三</span>
                        <span>审核：李四</span>
                        <span>编制日期：{formatDate}</span>
                    </div>

                </div>
            </div>
        </>
    );
}
