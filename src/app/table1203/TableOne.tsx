
import React, { useEffect, useState } from "react";
export default function TableOne() {
    const [rows, setRows] = useState<any[]>([]);
    const today = new Date();
    const formatDate = today.toISOString().slice(0, 10);

        useEffect(() => {
            const loadData = async () => {
                try {
                    const res = await fetch("/api/gettable02");
                    const data = await res.json();
                    setRows(data.items || []);
                } catch (e) {
                    console.error("加载失败", e);
                }
            };
    
            loadData();
        }, []);
    return (
    
        <>
            <div className="p-6 space-y-10">

                {/* 表一（横向） */}
                <div className="page-print landscape-page break-before-page">
                    <h2 className="text-lg font-semibold mb-2 text-center">工程决算总表（表一）</h2>
                    <h4 className="text-[10px] font-semibold text-left mb-[-10px]">工程编号：{rows[0]?.project_code ?? ""}</h4>
                    <div className="flex justify-between items-center w-full mb-[-10px]">
                        <h4 className="text-[10px] font-semibold text-left">
                            工程名称：{rows[0]?.project_name ?? ""}
                        </h4>

                        <h4 className="text-[10px] font-semibold text-center">
                            建设单位：XX公司
                        </h4>

                        <h4 className="text-[10px] font-semibold text-right">
                            表格编号：TXL-01 全页
                        </h4>
                    </div>

                    <table className="w-full border border-gray-500 text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th
                                    rowSpan={2}
                                    className="border px-3 py-2 text-center align-middle"
                                >
                                    序号
                                </th>
                                <th
                                    rowSpan={2}
                                    className="border px-3 py-2 text-center align-middle"
                                >
                                    表格编号
                                </th>
                                <th
                                    rowSpan={2}
                                    className="border px-3 py-2 text-center align-middle"
                                >
                                    费用名称
                                </th>
                                {/* 其他列可以在这里放置子列或主列 */}
                                <th className="border px-3 py-2 text-center">小型建筑工程费</th>
                                <th className="border px-3 py-2 text-center">需安装的设备费</th>
                                <th className="border px-3 py-2 text-center">不需安装的设备费工器具费</th>
                                <th className="border px-3 py-2 text-center">建筑安装工程费</th>
                                <th className="border px-3 py-2 text-center">其他费用</th>
                                <th className="border px-3 py-2 text-center">预备费</th>
                                <th
                                    colSpan={4}
                                    className="border px-3 py-2 text-center align-middle"
                                >
                                    总价值
                                </th>
                            </tr>
                            {/* 第二行 */}
                            <tr>
                                <th
                                    colSpan={6}
                                    className="border px-3 py-2 text-center align-middle"
                                >
                                    单位：元
                                </th>
                                <th className="border px-3 py-2 text-center">除税价</th>
                                <th className="border px-3 py-2 text-center">增值税</th>
                                <th className="border px-3 py-2 text-center">含税价</th>
                                <th className="border px-3 py-2 text-center">外币（）</th>
                            </tr>
                            {/* 第三行 */}
                            <tr>
                                <th className="border px-3 py-2 text-center">I</th>
                                <th className="border px-3 py-2 text-center">II</th>
                                <th className="border px-3 py-2 text-center">III</th>
                                <th className="border px-3 py-2 text-center">IV</th>
                                <th className="border px-3 py-2 text-center">V</th>
                                <th className="border px-3 py-2 text-center"> VI</th>
                                <th className="border px-3 py-2 text-center">VII</th>
                                <th className="border px-3 py-2 text-center">VIII</th>
                                <th className="border px-3 py-2 text-center">IX</th>
                                <th className="border px-3 py-2 text-center">X</th>
                                <th className="border px-3 py-2 text-center">XI</th>
                                <th className="border px-3 py-2 text-center">XII</th>
                                <th className="border px-3 py-2 text-center">XIII</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-3 py-2 text-center">张三</td>
                                <td className="border px-3 py-2 text-center">21</td>
                                <td className="border px-3 py-2 text-center">男</td>
                                <td className="border px-3 py-2 text-center">张三</td>
                                <td className="border px-3 py-2 text-center">21</td>
                                <td className="border px-3 py-2 text-center">男</td>
                                <td className="border px-3 py-2 text-center">张三</td>
                                <td className="border px-3 py-2 text-center">21</td>
                                <td className="border px-3 py-2 text-center">男</td>
                                <td className="border px-3 py-2 text-center">张三</td>
                                <td className="border px-3 py-2 text-center">21</td>
                                <td className="border px-3 py-2 text-center">男</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex justify-between text-[10px] font-semibold">
                        <span>负责人：王五</span>
                        <span>编制：张三</span>
                        <span>审核：李四</span>
                        <span>编制日期：{formatDate}</span>
                    </div>
                </div>
            </div>
        </>)}