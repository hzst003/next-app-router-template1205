/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";

export default function TableTwoA() {
    const today = new Date();
    const formatDate = today.toISOString().slice(0, 10);
    const [rows, setRows] = useState<any[]>([]);

    // ⭐ 载入 Directus 表 2 数据
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
            <div className="p-6 space-y-3">

                <div className="page-print landscape-page break-before-page break-inside-avoid">
                    <h2 className="text-lg font-semibold mb-2 text-center">建筑安装工程费用决算表（表二）</h2>
                    <h4 className="text-[10px] font-semibold mb-0 text-left mb-[-10px]">工程编号：{rows[0]?.project_code ?? ""}</h4>
                    <div className="flex justify-between items-center w-full mb-0 mb-[-10px]">
                        <h4 className="text-[10px] font-semibold text-left">
                            工程名称：{rows[0]?.project_name ?? ""}
                        </h4>

                        <h4 className="text-[10px] font-semibold text-center">
                            建设单位：XX公司
                        </h4>

                        <h4 className="text-[10px] font-semibold text-right">
                            表格编号：TXL-02 全页
                        </h4>
                    </div>

                    <table className="w-full border border-gray-500 text-[10px] ">
                        <thead className="bg-gray-100">
                            <tr >
                                {/* 左栏 */}
                                <th className="border px-3 py-[5px] text-center">序号</th>
                                <th className="border px-3 py-[5px] text-center">费用名称</th>
                                <th className="border px-3 py-[5px] text-center">依据与计算方法</th>
                                <th className="border px-3 py-[5px] text-center">合计</th>

                                {/* 中间空列（很窄） */}
                                <th className="px-0 py-[5px] border-none w-[6px]"></th>

                                {/* 右栏 */}
                                <th className="border px-3 py-[5px] text-center">序号</th>
                                <th className="border px-3 py-[5px] text-center">费用名称</th>
                                <th className="border px-3 py-[5px] text-center">依据与计算方法</th>
                                <th className="border px-3 py-[5px] text-center">合计</th>
                            </tr>

                            <tr >
                                {/* 左栏 I–IV */}
                                <th className="border px-3 py-[5px] text-center">I</th>
                                <th className="border px-3 py-[5px] text-center">II</th>
                                <th className="border px-3 py-[5px] text-center">III</th>
                                <th className="border px-3 py-[5px] text-center">IV</th>

                                {/* 中间空列（很窄） */}
                                <th className="px-0 py-[5px] border-none w-[6px]"></th>

                                {/* 右栏 I–IV */}
                                <th className="border px-3 py-[5px] text-center">I</th>
                                <th className="border px-3 py-[5px] text-center">II</th>
                                <th className="border px-3 py-[5px] text-center">III</th>
                                <th className="border px-3 py-[5px] text-center">IV</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr >
                                {/* 左栏 */}
                                <th className="border px-3 py-[5px] text-center"></th>
                                <th className="border px-3 py-[5px] text-center">建筑安装工程费含税价</th>
                                <th className="border px-3 py-[5px] text-center">一+二+三+四</th>
                                <th className="border px-3 py-[5px] text-center">{rows[0]?.left1 ?? ""}</th>

                                {/* 中间空列（很窄） */}
                                <th className="px-0 py-[5px] border-none w-[6px]"></th>

                                {/* 右栏 */}
                                <th className="border px-3 py-[5px] text-center">7</th>
                                <th className="border px-3 py-[5px] text-center">夜间施工增加费</th>
                                <th className="border px-3 py-[5px] text-center">人工费×2.5%</th>
                                <th className="border px-3 py-[5px] text-center"></th>
                            </tr>
                                                       <tr >
                                {/* 左栏 */}
                                <th className="border px-3 py-[5px] text-center"></th>
                                <th className="border px-3 py-[5px] text-center">建筑安装工程费除税价</th>
                                <th className="border px-3 py-[5px] text-center">一+二+三</th>
                                <th className="border px-3 py-[5px] text-center">{rows[0]?.left2 ?? ""}</th>
	

                                {/* 中间空列（很窄） */}
                                <th className="px-0 py-[5px] border-none w-[6px]"></th>

                                {/* 右栏 */}
                                <th className="border px-3 py-[5px] text-center">8</th>
                                <th className="border px-3 py-[5px] text-center">冬雨季施工增加费</th>
                                <th className="border px-3 py-[5px] text-center">人工费×2.5%</th>
                                <th className="border px-3 py-[5px] text-center">{}</th>
                            </tr>
                                                                                    <tr>
                                {/* 左栏 */}
                                <th className="border px-3 py-[5px] text-center">一</th>
                                <th className="border px-3 py-[5px] text-center">直接费</th>
                                <th className="border px-3 py-[5px] text-center">(一)+(二)</th>
                                <th className="border px-3 py-[5px] text-center">{rows[0]?.left3 ?? ""}</th>
	


                                {/* 中间空列（很窄） */}
                                <th className="px-0 py-[5px] border-none w-[6px]"></th>

                                {/* 右栏 */}
                                <th className="border px-3 py-[5px] text-center">9</th>
                                <th className="border px-3 py-[5px] text-center">生产工具用具使用费</th>
                                <th className="border px-3 py-[5px] text-center">人工费×1.5%</th>
                                <th className="border px-3 py-[5px] text-center"></th>
                            </tr>
                                                                                    <tr>
                                {/* 左栏 */}
                                <th className="border px-3 py-[5px] text-center">（一）</th>
                                <th className="border px-3 py-[5px] text-center">直接工程费</th>
                                <th className="border px-3 py-[5px] text-center">1+2+3+4</th>
                                <th className="border px-3 py-[5px] text-center">{rows[0]?.left4 ?? ""}</th>
	

                                {/* 中间空列（很窄） */}
                                <th className="px-0 py-[5px] border-none w-[6px]"></th>

                                {/* 右栏 */}
                                <th className="border px-3 py-[5px] text-center">10</th>
                                <th className="border px-3 py-[5px] text-center">施工用水电蒸气费</th>
                                <th className="border px-3 py-[5px] text-center"></th>
                                <th className="border px-3 py-[5px] text-center"></th>
                            </tr>
                                                                                    <tr>
                                {/* 左栏 */}
                                <th className="border px-3 py-[5px] text-center">1</th>
                                <th className="border px-3 py-[5px] text-center">人工费</th>
                                <th className="border px-3 py-[5px] text-center">（1）+（2）</th>
                                <th className="border px-3 py-[5px] text-center">{rows[0]?.left5 ?? ""}</th>
	

                                {/* 中间空列（很窄） */}
                                <th className="px-0 py-[5px] border-none w-[6px]"></th>

                                {/* 右栏 */}
                                <th className="border px-3 py-[5px] text-center">11</th>
                                <th className="border px-3 py-[5px] text-center">特殊地区施工增加费</th>
                                <th className="border px-3 py-[5px] text-center">总工日×0</th>
                                <th className="border px-3 py-[5px] text-center"></th>
                            </tr>
                                                                                    <tr>
                                {/* 左栏 */}
                                <th className="border px-3 py-[5px] text-center">（1）</th>
                                <th className="border px-3 py-[5px] text-center">技工费</th>
                                <th className="border px-3 py-[5px] text-center">技工工日×114</th>
                                <th className="border px-3 py-[5px] text-center">{rows[0]?.left6 ?? ""}</th>
	

                                {/* 中间空列（很窄） */}
                                <th className="px-0 py-[5px] border-none w-[6px]"></th>

                                {/* 右栏 */}
                                <th className="border px-3 py-[5px] text-center">12</th>
                                <th className="border px-3 py-[5px] text-center">已完工程及设备保护费</th>
                                <th className="border px-3 py-[5px] text-center">人工费×2.0%</th>
                                <th className="border px-3 py-[5px] text-center"></th>
                            </tr>
                                                                                    <tr>
                                {/* 左栏 */}
                                <th className="border px-3 py-[5px] text-center">（2）</th>
                                <th className="border px-3 py-[5px] text-center">普工费</th>
                                <th className="border px-3 py-[5px] text-center">普工工日×61</th>
                                <th className="border px-3 py-[5px] text-center">{rows[0]?.left7 ?? ""}</th>
	

                                {/* 中间空列（很窄） */}
                                <th className="px-0 py-[5px] border-none w-[6px]"></th>

                                {/* 右栏 */}
                                <th className="border px-3 py-[5px] text-center">13</th>
                                <th className="border px-3 py-[5px] text-center">运土费</th>
                                <th className="border px-3 py-[5px] text-center"></th>
                                <th className="border px-3 py-[5px] text-center"></th>
                            </tr>
                                                                                    <tr>
                                {/* 左栏 */}
                                <th className="border px-3 py-[5px] text-center">2</th>
                                <th className="border px-3 py-[5px] text-center">材料费</th>
                                <th className="border px-3 py-[5px] text-center">(1)+(2)</th>
                                <th className="border px-3 py-[5px] text-center"></th>
	

                                {/* 中间空列（很窄） */}
                                <th className="px-0 py-[5px] border-none w-[6px]"></th>

                                {/* 右栏 */}
                                <th className="border px-3 py-[5px] text-center">14</th>
                                <th className="border px-3 py-[5px] text-center">施工队伍调遣费</th>
                                <th className="border px-3 py-[5px] text-center">单程调遣费×调遣人数×2</th>
                                <th className="border px-3 py-[5px] text-center"></th>
                            </tr>
                                                                                    <tr>
                                {/* 左栏 */}
                                <th className="border px-3 py-[5px] text-center">（1）</th>
                                <th className="border px-3 py-[5px] text-center">主要材料费</th>
                                <th className="border px-3 py-[5px] text-center">详见表四</th>
                                <th className="border px-3 py-[5px] text-center"></th>
	

                                {/* 中间空列（很窄） */}
                                <th className="px-0 py-[5px] border-none w-[6px]"></th>

                                {/* 右栏 */}
                                <th className="border px-3 py-[5px] text-center">15</th>
                                <th className="border px-3 py-[5px] text-center">大型施工机械调遣费</th>
                                <th className="border px-3 py-[5px] text-center">调遣用车运价×调遣运距×2</th>
                                <th className="border px-3 py-[5px] text-center"></th>
                            </tr>
                                                                                    <tr>
                                {/* 左栏 */}
                                <th className="border px-3 py-[5px] text-center">（2）</th>
                                <th className="border px-3 py-[5px] text-center">辅助材料费</th>
                                <th className="border px-3 py-[5px] text-center">一+二+三</th>
                                <th className="border px-3 py-[5px] text-center"></th>
	

                                {/* 中间空列（很窄） */}
                                <th className="px-0 py-[5px] border-none w-[6px]"></th>

                                {/* 右栏 */}
                                <th className="border px-3 py-[5px] text-center">二</th>
                                <th className="border px-3 py-[5px] text-center">间接费</th>
                                <th className="border px-3 py-[5px] text-center">(一)+(二)</th>
                                <th className="border px-3 py-[5px] text-center"></th>
                            </tr>
                                                                                    <tr>
                                {/* 左栏 */}
                                <th className="border px-3 py-[5px] text-center">3</th>
                                <th className="border px-3 py-[5px] text-center">机械使用费</th>
                                <th className="border px-3 py-[5px] text-center">表三乙</th>
                                <th className="border px-3 py-[5px] text-center"></th>
	

                                {/* 中间空列（很窄） */}
                                <th className="px-0 py-[5px] border-none w-[6px]"></th>

                                {/* 右栏 */}
                                <th className="border px-3 py-[5px] text-center">（一）</th>
                                <th className="border px-3 py-[5px] text-center">规费</th>
                                <th className="border px-3 py-[5px] text-center">1+2+3+4</th>
                                <th className="border px-3 py-[5px] text-center"></th>
                            </tr>
                                                                                    <tr>
                                {/* 左栏 */}
                                <th className="border px-3 py-[5px] text-center">4</th>
                                <th className="border px-3 py-[5px] text-center">仪表使用费</th>
                                <th className="border px-3 py-[5px] text-center">表三丙</th>
                                <th className="border px-3 py-[5px] text-center"></th>
	

                                {/* 中间空列（很窄） */}
                                <th className="px-0 py-[5px] border-none w-[6px]"></th>

                                {/* 右栏 */}
                                <th className="border px-3 py-[5px] text-center">1</th>
                                <th className="border px-3 py-[5px] text-center">工程排污费</th>
                                <th className="border px-3 py-[5px] text-center"></th>
                                <th className="border px-3 py-[5px] text-center"></th>
                            </tr>
                                                                                    <tr>
                                {/* 左栏 */}
                                <th className="border px-3 py-[5px] text-center">（二）</th>
                                <th className="border px-3 py-[5px] text-center">措施项目费</th>
                                <th className="border px-3 py-[5px] text-center">1+2+3+...+15</th>
                                <th className="border px-3 py-[5px] text-center"></th>
	

                                {/* 中间空列（很窄） */}
                                <th className="px-0 py-[5px] border-none w-[6px]"></th>

                                {/* 右栏 */}
                                <th className="border px-3 py-[5px] text-center">2</th>
                                <th className="border px-3 py-[5px] text-center">社会保障费</th>
                                <th className="border px-3 py-[5px] text-center">折前人工费×28.5%</th>
                                <th className="border px-3 py-[5px] text-center"></th>
                            </tr>
                                                                                    <tr>
                                {/* 左栏 */}
                                <th className="border px-3 py-[5px] text-center">1</th>
                                <th className="border px-3 py-[5px] text-center">文明施工费</th>
                                <th className="border px-3 py-[5px] text-center">人工费×1.5%</th>
                                <th className="border px-3 py-[5px] text-center"></th>
	

                                {/* 中间空列（很窄） */}
                                <th className="px-0 py-[5px] border-none w-[6px]"></th>

                                {/* 右栏 */}
                                <th className="border px-3 py-[5px] text-center">3</th>
                                <th className="border px-3 py-[5px] text-center">住房公积金</th>
                                <th className="border px-3 py-[5px] text-center">人工费×4.19%</th>
                                <th className="border px-3 py-[5px] text-center"></th>
                            </tr>
                                                                                    <tr>
                                {/* 左栏 */}
                                <th className="border px-3 py-[5px] text-center">2</th>
                                <th className="border px-3 py-[5px] text-center">工地器材搬运费</th>
                                <th className="border px-3 py-[5px] text-center">人工费×3.4%</th>
                                <th className="border px-3 py-[5px] text-center"></th>
	

                                {/* 中间空列（很窄） */}
                                <th className="px-0 py-[5px] border-none w-[6px]"></th>

                                {/* 右栏 */}
                                <th className="border px-3 py-[5px] text-center">4</th>
                                <th className="border px-3 py-[5px] text-center">危险作业意外伤害保险费</th>
                                <th className="border px-3 py-[5px] text-center">人工费×1%</th>
                                <th className="border px-3 py-[5px] text-center"></th>
                            </tr>
                                                                                    <tr>
                                {/* 左栏 */}
                                <th className="border px-3 py-[5px] text-center">3</th>
                                <th className="border px-3 py-[5px] text-center">工程干扰费</th>
                                <th className="border px-3 py-[5px] text-center">人工费×6.0%</th>
                                <th className="border px-3 py-[5px] text-center"></th>
	

                                {/* 中间空列（很窄） */}
                                <th className="px-0 py-[5px] border-none w-[6px]"></th>

                                {/* 右栏 */}
                                <th className="border px-3 py-[5px] text-center">（二）</th>
                                <th className="border px-3 py-[5px] text-center">企业管理费</th>
                                <th className="border px-3 py-[5px] text-center">人工费×27.4%</th>
                                <th className="border px-3 py-[5px] text-center"></th>
                            </tr>
                                                                                    <tr>
                                {/* 左栏 */}
                                <th className="border px-3 py-[5px] text-center">4</th>
                                <th className="border px-3 py-[5px] text-center">工程点交、场地清理费</th>
                                <th className="border px-3 py-[5px] text-center">人工费×3.3%</th>
                                <th className="border px-3 py-[5px] text-center"></th>
	

                                {/* 中间空列（很窄） */}
                                <th className="px-0 py-[5px] border-none w-[6px]"></th>

                                {/* 右栏 */}
                                <th className="border px-3 py-[5px] text-center">三</th>
                                <th className="border px-3 py-[5px] text-center">利润</th>
                                <th className="border px-3 py-[5px] text-center">人工费×20.0%</th>
                                <th className="border px-3 py-[5px] text-center"></th>
                            </tr>
                                                                                    <tr>
                                {/* 左栏 */}
                                <th className="border px-3 py-[5px] text-center">5</th>
                                <th className="border px-3 py-[5px] text-center">临时设施费</th>
                                <th className="border px-3 py-[5px] text-center">人工费×2.6%</th>
                                <th className="border px-3 py-[5px] text-center"></th>
	

                                {/* 中间空列（很窄） */}
                                <th className="px-0 py-[5px] border-none w-[6px]"></th>

                                {/* 右栏 */}
                                <th className="border px-3 py-[5px] text-center">四</th>
                                <th className="border px-3 py-[5px] text-center">销项税额</th>
                                <th className="border px-3 py-[5px] text-center">(一+二+三)×3%</th>
                                <th className="border px-3 py-[5px] text-center"></th>
                            </tr>
                                                                                    <tr>
                                {/* 左栏 */}
                                <th className="border px-3 py-[5px] text-center">6</th>
                                <th className="border px-3 py-[5px] text-center">工程车辆使用费</th>
                                <th className="border px-3 py-[5px] text-center">人工费×5.0%</th>
                                <th className="border px-3 py-[5px] text-center"></th>
	

                                {/* 中间空列（很窄） */}
                                <th className="px-0 py-[5px] border-none w-[6px]"></th>

                                {/* 右栏 */}
                                <th className="border px-3 py-[5px] text-center"></th>
                                <th className="border px-3 py-[5px] text-center"></th>
                                <th className="border px-3 py-[5px] text-center"></th>
                                <th className="border px-3 py-[5px] text-center"></th>
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
        </>)
}