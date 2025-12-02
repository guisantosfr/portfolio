import Skill from "@/types/skill";
import Image from "next/image";

export default function SkillCard({ skill }: { skill: Skill }) {
    return (
        <div key={skill.name} className='hover:scale-120 transition duration-500 ease-in-out transform'>
            <Image src={skill.icon} alt={skill.name} title={skill.name} width={48} height={48} />
            <p className="text-sm sm:text-base mt-2">{skill.name}</p>
        </div>
    )
}