'use client';

import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { filters, skills } from "../_data/skills";

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredSkills = skills.filter(
    (skill) => activeFilter === 'all' || skill.cat === activeFilter
  );

  return (
    <section id="skills" className="relative z-10 px-8 md:px-20 py-20">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-10 tracking-tight">
        Minhas <span className="text-[#00d4ff]">Habilidades</span>
      </h2>

      <ToggleGroup type="single" value={activeFilter} onValueChange={(val) => { if (val) setActiveFilter(val); }} className="flex flex-wrap gap-3 mb-10 justify-start">
        {filters.map((f) => (
          <ToggleGroupItem
            key={f.id}
            value={f.id}
            className={`text-lg font-semibold tracking-wide px-6 py-3 h-auto rounded-lg border-2 transition-all select-none data-[state=on]:bg-[#1e6fd4] data-[state=on]:text-white data-[state=on]:border-[#1e6fd4] data-[state=on]:shadow-[0_0_16px_rgba(30,111,212,0.3)] bg-[#071a3a]/50 text-[#8ab4d8] border-[#3a91f0]/20 hover:text-white hover:border-[#3a91f0]`}
          >
            {f.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-9/10 mx-auto">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="group relative bg-[#071a3a]/85 border border-[#3a91f0]/20 rounded-xl p-5 flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#3a91f0]/40 hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-br from-[#1e6fd4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img src={skill.icon} alt={skill.name} className="w-24 h-24 object-contain" />
            <span className="text-lg font-semibold text-[#8ab4d8] group-hover:text-white transition-colors z-10 text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>

  )
}