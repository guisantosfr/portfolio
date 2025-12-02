'use client';

import { useState } from 'react';
import { mySkills } from '../utils/skills';
import SkillCard from './SkillCard';

export default function Skills() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const categories = [
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend' },
        { id: 'linguagem', label: 'Linguagens' },
        { id: 'banco de dados', label: 'Bancos de Dados' },
        { id: 'devops', label: 'Devops' },
        { id: 'controle de versão', label: 'Controle de Versão' },
    ];

    const handleCategoryToggle = (categoryId: string) => {
        setSelectedCategories(prev => {
            if (prev.includes(categoryId)) {
                return prev.filter(id => id !== categoryId);
            } else {
                return [...prev, categoryId];
            }
        });
    };

    const filteredSkills = selectedCategories.length === 0
        ? mySkills
        : mySkills.filter(skill =>
            selectedCategories.some(category =>
                skill.categories.includes(category)
            )
        );

    return (
        <section id="skills" className="bg-[#0d224b]">
            <div className="mx-auto text-center py-12">
                <h2 className="text-2xl sm:text-4xl">Habilidades</h2>

                <div className="flex flex-wrap gap-3 justify-center mt-4 mb-8">
                    {categories.map(category => (
                        <label
                            key={category.id}
                            className={`px-6 py-2 rounded-full cursor-pointer transition-all
                                ${selectedCategories.includes(category.id)
                                    ? 'bg-blue-500 text-white shadow-lg scale-105'
                                    : 'bg-white/10 text-white hover:bg-white/20'
                                }`
                            }
                        >
                            <input
                                type="checkbox"
                                checked={selectedCategories.includes(category.id)}
                                onChange={() => handleCategoryToggle(category.id)}
                                className="sr-only"
                            />
                            {category.label}
                        </label>
                    ))}
                </div>

                <div className="grid gap-5 grid-cols-10 w-3/4 mx-auto">
                    {
                        filteredSkills.map((skill) => (
                            <SkillCard skill={skill} key={skill.name} />
                        ))
                    }
                </div>

                {filteredSkills.length === 0 && (
                    <p className="text-white/60 mt-8">
                        Nenhuma habilidade encontrada para os filtros selecionados.
                    </p>
                )}
            </div>
        </section>
    )
}