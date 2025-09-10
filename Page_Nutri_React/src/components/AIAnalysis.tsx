import { useEffect, useState } from 'react';
import { useTransformers } from '../hooks/useTransformers';

const AIAnalysis = () => {
    const { loading, error, generate } = useTransformers();
    const [analysis, setAnalysis] = useState('');

    useEffect(() => {
        if (!loading && !error) {
            generate('Faça uma análise de saúde com base nestes dados: ').then(setAnalysis);
        }
    }, [loading, error, generate]);

    return (
        <div className="bento-cell bg-white rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Análise de IA</h2>
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                    <i className="fas fa-brain text-indigo-500"></i>
                </div>
            </div>
            {loading && <div className="loader"></div>}
            {error && <p className="text-red-500 text-xs">{error}</p>}
            {analysis && (
                <div className="bg-indigo-50 rounded-lg p-4 mb-4">
                    <h3 className="text-sm font-medium text-indigo-800 mb-2">Recomendação do Dia</h3>
                    <p className="text-xs text-indigo-700">{analysis}</p>
                </div>
            )}
        </div>
    );
};

export default AIAnalysis;
