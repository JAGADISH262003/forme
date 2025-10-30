
import React, { useState, useMemo, useCallback } from 'react';
import { CourseChecklist } from './components/CourseChecklist';
import { Dashboard } from './components/Dashboard';
import { COURSE_DATA } from './constants';
import type { CourseModule } from './types';

const App: React.FC = () => {
    const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
    const [selectedTopic, setSelectedTopic] = useState<CourseModule | null>(null);

    const totalItems = useMemo(() => COURSE_DATA.reduce((sum, module) => sum + module.items.length, 0), []);

    const handleCheckChange = useCallback((id: string, isChecked: boolean) => {
        setCheckedItems(prev => {
            const newSet = new Set(prev);
            if (isChecked) {
                newSet.add(id);
            } else {
                newSet.delete(id);
            }
            return newSet;
        });
    }, []);

    const handleTopicSelect = useCallback((topic: CourseModule) => {
        setSelectedTopic(topic);
    }, []);

    const progress = totalItems > 0 ? (checkedItems.size / totalItems) * 100 : 0;

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0b1120] via-slate-900 to-[#1f2937]">
            <header className="p-4 sm:p-6 text-center shadow-lg bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                    C Programming & Data Structures Dashboard
                </h1>
            </header>
            <main className="container mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <CourseChecklist
                        modules={COURSE_DATA}
                        checkedItems={checkedItems}
                        onCheckChange={handleCheckChange}
                        onTopicSelect={handleTopicSelect}
                        selectedTopic={selectedTopic}
                    />
                </div>
                <div className="lg:col-span-1 lg:sticky lg:top-24 h-fit">
                    <Dashboard 
                        progress={progress} 
                        selectedTopic={selectedTopic}
                    />
                </div>
            </main>
        </div>
    );
};

export default App;
