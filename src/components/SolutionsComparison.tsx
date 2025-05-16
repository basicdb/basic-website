import React from 'react';

interface StepItem {
    title: string;
    subtitle: string | string[];
}

interface ColumnData {
    title: string;
    steps: StepItem[];
    bottomText: string;
}

interface SolutionsComparisonProps {
    leftColumn: ColumnData;
    rightColumn: ColumnData;
}

export default function SolutionsComparison({ leftColumn, rightColumn }: SolutionsComparisonProps) {
    const renderColumn = (data: ColumnData) => (
        <div className="w-full lg:w-1/2 bg-green-200 dark:bg-indigo-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-green-900 dark:text-green-100">{data.title}</h2>
            <div className="space-y-6">
                {data.steps.map((step, index) => (
                    <div key={index} className="space-y-2">
                        <h3 className="text-lg font-semibold text-green-800 dark:text-green-800">{step.title}</h3>
                        {Array.isArray(step.subtitle) ? (
                            <div className="space-y-2">
                                {step.subtitle.map((line, i) => (
                                    <p key={i} className="text-green-600 dark:text-green-300 dark:text-green-700">{line}</p>
                                ))}
                            </div>
                        ) : (
                            <p className="text-green-600 dark:text-green-300 dark:text-green-700">{step.subtitle}</p>
                        )}
                    </div>
                ))}
            </div>
            <div className="mt-6 pt-6 border-t border-green-300 dark:border-green-700">
                <p className="text-green-600 dark:text-green-300 italic">{data.bottomText}</p>
            </div>
        </div>
    );

    return (
        <div className="w-full flex flex-col lg:flex-row gap-6 items-start px-4 xl:px-20">
            {renderColumn(leftColumn)}
            {renderColumn(rightColumn)}
        </div>
    );
} 