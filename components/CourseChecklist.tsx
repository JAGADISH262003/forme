
import React from 'react';
import type { CourseModule } from '../types';

interface CourseChecklistProps {
    modules: CourseModule[];
    checkedItems: Set<string>;
    onCheckChange: (id: string, isChecked: boolean) => void;
    onTopicSelect: (topic: CourseModule) => void;
    selectedTopic: CourseModule | null;
}

export const CourseChecklist: React.FC<CourseChecklistProps> = ({ modules, checkedItems, onCheckChange, onTopicSelect, selectedTopic }) => {
    return (
        <div className="bg-slate-800/50 rounded-lg shadow-2xl p-4 sm:p-6 backdrop-blur-md border border-slate-700">
            <h2 className="text-2xl font-semibold mb-6 text-emerald-300">Course Modules</h2>
            <div className="space-y-6">
                {modules.map(module => (
                    <div key={module.id}>
                        <button 
                            onClick={() => onTopicSelect(module)}
                            className={`w-full text-left text-lg font-bold uppercase tracking-wider mb-3 p-2 rounded-md transition-colors duration-300 ${selectedTopic?.id === module.id ? 'bg-emerald-500/20 text-emerald-300' : 'text-cyan-300 hover:bg-slate-700/50'}`}
                        >
                            {module.title}
                        </button>
                        {module.items.length > 0 ? (
                            <ul className="space-y-3 pl-4 border-l-2 border-slate-700">
                                {module.items.map((item, index) => {
                                    const itemId = `${module.id}-${index}`;
                                    const isChecked = checkedItems.has(itemId);
                                    return (
                                        <li key={itemId} className="flex items-center">
                                            <label htmlFor={itemId} className="flex items-center cursor-pointer group w-full">
                                                <input
                                                    id={itemId}
                                                    type="checkbox"
                                                    checked={isChecked}
                                                    onChange={(e) => onCheckChange(itemId, e.target.checked)}
                                                    className="w-5 h-5 appearance-none border-2 border-slate-500 rounded-sm bg-slate-700 checked:bg-emerald-500 checked:border-emerald-400 transition-all duration-200"
                                                />
                                                <span className={`ml-3 text-slate-300 group-hover:text-white transition-colors duration-200 ${isChecked ? 'line-through text-slate-500' : ''}`}>
                                                    {item}
                                                </span>
                                            </label>
                                        </li>
                                    );
                                })}
                            </ul>
                        ) : (
                            <p className="pl-4 text-slate-500 italic text-sm">No sub-topics listed.</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
