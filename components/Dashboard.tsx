
import React from 'react';
import type { CourseModule } from '../types';
import { ProgressCircle } from './ProgressCircle';
import { TopicSummary } from './TopicSummary';

interface DashboardProps {
    progress: number;
    selectedTopic: CourseModule | null;
}

export const Dashboard: React.FC<DashboardProps> = ({ progress, selectedTopic }) => {
    return (
        <div className="bg-slate-800/50 rounded-lg shadow-2xl p-6 backdrop-blur-md border border-slate-700 space-y-8">
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-emerald-300 text-center">Overall Progress</h2>
                <div className="flex justify-center">
                     <ProgressCircle progress={progress} />
                </div>
            </div>
            <div>
                 <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Topic Summary</h2>
                 <TopicSummary topic={selectedTopic} />
            </div>
        </div>
    );
};
