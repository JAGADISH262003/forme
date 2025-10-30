
import React, { useState, useEffect } from 'react';
import { getTopicSummary } from '../services/geminiService';
import type { CourseModule } from '../types';

interface TopicSummaryProps {
    topic: CourseModule | null;
}

const LoadingSkeleton: React.FC = () => (
    <div className="animate-pulse space-y-3">
        <div className="h-4 bg-slate-700 rounded w-3/4"></div>
        <div className="h-4 bg-slate-700 rounded"></div>
        <div className="h-4 bg-slate-700 rounded w-5/6"></div>
        <div className="h-4 bg-slate-700 rounded w-1/2"></div>
         <div className="h-4 bg-slate-700 rounded w-4/5"></div>
    </div>
);

export const TopicSummary: React.FC<TopicSummaryProps> = ({ topic }) => {
    const [summary, setSummary] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!topic) {
            setSummary('');
            setError(null);
            return;
        }

        const fetchSummary = async () => {
            setIsLoading(true);
            setError(null);
            setSummary('');
            try {
                const result = await getTopicSummary(topic.title);
                setSummary(result);
            } catch (err) {
                setError('Failed to load summary. Please try again.');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSummary();
    }, [topic]);

    if (!topic) {
        return (
            <div className="text-center text-slate-400 p-8 bg-slate-900/50 rounded-lg">
                <p>Select a module title from the list to see a detailed summary here.</p>
            </div>
        );
    }

    return (
        <div className="p-4 bg-slate-900/50 rounded-lg min-h-[200px] text-slate-300 transition-all duration-300">
            <h3 className="text-xl font-bold text-cyan-200 mb-3 capitalize">{topic.title.toLowerCase()}</h3>
            {isLoading && <LoadingSkeleton />}
            {error && <p className="text-red-400">{error}</p>}
            {summary && (
                <div className="whitespace-pre-wrap font-sans text-base leading-relaxed">
                    {summary}
                </div>
            )}
        </div>
    );
};
