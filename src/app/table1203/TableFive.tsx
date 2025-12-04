import React from "react";

export default function TableFive() {
    return (
        <>
            <div className="p-6 space-y-10">

                {/* 表一（横向） */}
                <div className="page-print landscape-page break-before-page">
                    <h2 className="text-lg font-semibold mb-2 text-center">工程决算总表（表五）</h2>
                    <h4 className="text-[10px] font-semibold mb-[-10px] text-left">项目名称：</h4>
                    <div className="flex justify-between items-center w-full mb-[-10px]">
                        <h4 className="text-[10px] font-semibold text-left">
                            工程名称：XX工程
                        </h4>

                        <h4 className="text-[10px] font-semibold text-center">
                            建设单位：XX公司
                        </h4>

                        <h4 className="text-[10px] font-semibold text-right">
                            表格编号：TXL-05 全页
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
                                    费用名称
                                </th>
                                <th
                                    rowSpan={2}
                                    className="border px-3 py-2 text-center align-middle"
                                >
                                    计算依据及方法
                                </th>
                                <th
                                    colSpan={3}
                                    className="border px-3 py-2 text-center align-middle"
                                >
                                    金 额：(元)
                                </th>
                                <th
                                    rowSpan={2}
                                    className="border px-3 py-2 text-center align-middle"
                                >
                                    备注
                                </th>
                               
                            </tr>
                            {/* 第二行 */}
                            <tr>                                
                                <th className="border px-3 py-2 text-center">除税价</th>
                                <th className="border px-3 py-2 text-center">增值税</th>
                                <th className="border px-3 py-2 text-center">含税价</th>
                        
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

                            </tr>
                        </tbody>
                    </table>
                    <div className="flex justify-between text-[10px] font-semibold">
                        <span>负责人：王五</span>
                        <span>编制：张三</span>
                        <span>审核：李四</span>
                        <span>编制日期：2025-11-25</span>
                    </div>
                </div>
            </div>
        </>)
}