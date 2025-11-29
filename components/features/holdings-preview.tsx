"use client";

import { ArrowUpRight, ArrowDownRight, MoreHorizontal, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export const HoldingsPreview = () => {
    return (
        <div className="w-full bg-[#0A0A0A] h-full flex flex-col">
            {/* Header & Stats Combined */}
            <div className="px-5 pt-5 pb-3 border-b border-white/10 shrink-0">
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
                    {/* Tabs */}
                    <div className="flex gap-5">
                        <div className="pb-1 text-sm font-medium text-emerald-400 border-b-2 border-emerald-400">
                            Top Holdings
                        </div>
                        <div className="pb-1 text-sm font-medium text-white/60 hover:text-white cursor-pointer transition-colors">
                            Performance History
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-6">
                        <div>
                            <div className="text-white/60 text-[10px] mb-0.5 uppercase tracking-wider">Performance</div>
                            <div className="text-emerald-400 font-bold text-base">+9.38% <span className="text-xs font-normal text-white/60">(2025 Q3)</span></div>
                        </div>
                        <div>
                            <div className="text-white/60 text-[10px] mb-0.5 uppercase tracking-wider">AUM (13F)</div>
                            <div className="text-white font-bold text-base">$7.58B</div>
                        </div>
                        <div className="hidden sm:block">
                            <div className="text-white/60 text-[10px] mb-0.5 uppercase tracking-wider">Rank</div>
                            <div className="flex text-white/40 mt-0.5">
                                <Star className="w-3 h-3 fill-white text-white" />
                                <Star className="w-3 h-3 fill-white text-white" />
                                <Star className="w-3 h-3 fill-white text-white" />
                                <Star className="w-3 h-3 fill-white text-white" />
                                <Star className="w-3 h-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-5 space-y-4 flex-1 overflow-hidden flex flex-col">
                {/* Treemap Title */}
                <div className="shrink-0">
                    <h4 className="text-sm font-medium text-white mb-0.5">Altimeter Capital Management, Lp Holdings Map</h4>
                    <p className="text-[10px] text-white/60">Top 18 Altimeter Capital Management, Lp Holdings</p>
                </div>

                {/* Treemap Visualization - Compact */}
                <div className="h-[150px] w-full flex gap-0.5 shrink-0">
                    {/* Column 1: META */}
                    <div className="w-[30%] bg-[#3B82F6] hover:bg-[#3B82F6]/90 transition-colors p-2 relative group cursor-pointer">
                        <span className="font-bold text-white text-xs">META</span>
                    </div>

                    {/* Column 2: NVDA */}
                    <div className="w-[28%] bg-[#F97316] hover:bg-[#F97316]/90 transition-colors p-2 relative group cursor-pointer">
                        <span className="font-bold text-white text-xs">NVDA</span>
                    </div>

                    {/* Column 3: SNOW & UBER */}
                    <div className="w-[20%] flex flex-col gap-0.5">
                        <div className="h-[55%] bg-[#10B981] hover:bg-[#10B981]/90 transition-colors p-1.5 relative group cursor-pointer">
                            <span className="font-bold text-white text-[10px]">SNOW</span>
                        </div>
                        <div className="h-[45%] bg-[#8B5CF6] hover:bg-[#8B5CF6]/90 transition-colors p-1.5 relative group cursor-pointer">
                            <span className="font-bold text-white text-[10px]">UBER</span>
                        </div>
                    </div>

                    {/* Column 4: MSFT, CFLT, CPNG */}
                    <div className="w-[22%] flex flex-col gap-0.5">
                        <div className="h-[40%] bg-[#EC4899] hover:bg-[#EC4899]/90 transition-colors p-1.5 relative group cursor-pointer">
                            <span className="font-bold text-white text-[10px]">MSFT</span>
                        </div>
                        <div className="h-[35%] bg-[#14B8A6] hover:bg-[#14B8A6]/90 transition-colors p-1.5 relative group cursor-pointer">
                            <span className="font-bold text-white text-[10px]">CFLT</span>
                        </div>
                        <div className="h-[25%] flex gap-0.5">
                            <div className="w-[60%] bg-[#EAB308] hover:bg-[#EAB308]/90 transition-colors p-1 relative group cursor-pointer">
                                <span className="font-bold text-white text-[9px]">CPNG</span>
                            </div>
                            <div className="w-[40%] bg-[#F97316] hover:bg-[#F97316]/90 transition-colors p-1 relative group cursor-pointer">
                                <span className="font-bold text-white text-[9px]">Z</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Holdings Table */}
                <div className="overflow-hidden rounded-lg border border-white/10 grow">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-white/5 text-white/60 text-[10px] uppercase">
                            <tr>
                                <th className="px-3 py-2 font-medium">Stock</th>
                                <th className="px-3 py-2 font-medium">Company Name</th>
                                <th className="px-3 py-2 font-medium text-right">% of Portfolio</th>
                                <th className="px-3 py-2 font-medium text-right">Shares Owned</th>
                                <th className="px-3 py-2 font-medium text-right">Value Owned</th>
                                <th className="px-3 py-2 font-medium text-right">Latest Activity</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10 text-white/80 text-xs">
                            {[
                                { symbol: "META", name: "META PLATFORMS INC", port: "19.99%", shares: "1.88M", value: "$1.39B", activity: "+2.27%", activityVal: "+41.66K" },
                                { symbol: "NVDA", name: "NVIDIA CORPORATION", port: "18.81%", shares: "8.25M", value: "$1.30B", activity: "+15.41%", activityVal: "+1.10M" },
                                { symbol: "SNOW", name: "SNOWFLAKE INC", port: "9.12%", shares: "2.83M", value: "$632.29M", activity: "-4.13%", activityVal: "-121.75K", negative: true },
                                { symbol: "UBER", name: "UBER TECHNOLOGIES INC", port: "8.01%", shares: "5.95M", value: "$555.42M", activity: "+5.06%", activityVal: "+286.80K" },
                            ].map((row) => (
                                <tr key={row.symbol} className="hover:bg-white/5 transition-colors">
                                    <td className="px-3 py-2 font-medium text-white underline decoration-white/30 underline-offset-4">{row.symbol}</td>
                                    <td className="px-3 py-2">{row.name}</td>
                                    <td className="px-3 py-2 text-right">{row.port}</td>
                                    <td className="px-3 py-2 text-right">{row.shares}</td>
                                    <td className="px-3 py-2 text-right">{row.value}</td>
                                    <td className={`px-3 py-2 text-right ${row.negative ? 'text-red-400' : 'text-emerald-400'}`}>
                                        {row.activity} <span className="text-white/40 text-[10px]">({row.activityVal})</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
