import { useEffect, useState } from 'react';
import { useTransformers } from '../hooks/useTransformers';
import { useUserDataStore } from '../store/useUserDataStore';
import { nutritionDatabase } from '../data/nutrition';

const AIAnalysis = () => {
    const { loading, error, generate } = useTransformers();
    const { dailyData } = useUserDataStore();
    const [analysis, setAnalysis] = useState('');

    const today = new Date().toISOString().split('T')[0];
    const todayData = dailyData[today] || { food: [], exercise: [] };

    const totals = todayData.food.reduce(
        (acc, item) => {
            const foodData = nutritionDatabase[item.name.toLowerCase()];
            if (foodData) {
                acc.calories += foodData.calories;
                acc.protein += foodData.protein;
                acc.carbs += foodData.carbs;
            }
            return acc;
        },
        { calories: 0, protein: 0, carbs: 0 }
    );

    const exerciseSummary = todayData.exercise.map(e => `${e.name} (${e.caloriesBurned} kcal)`).join(', ');

    useEffect(() => {
        if (!loading && !error && (totals.calories > 0 || exerciseSummary)) {
            const prompt = `
                Faça uma análise de saúde com base nos seguintes dados de hoje:
                - Calorias totais: ${totals.calories.toFixed(0)}
                - Proteína total: ${totals.protein.toFixed(1)}g
                - Carboidratos totais: ${totals.carbs.toFixed(1)}g
                - Exercícios: ${exerciseSummary || 'Nenhum exercício registrado'}
                Forneça uma recomendação curta e prática.
            `;
            generate(prompt).then(setAnalysis);
        }
    }, [loading, error, generate, totals.calories, totals.protein, totals.carbs, exerciseSummary]);

    return (
        <div className="bento-cell bg-white rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Análise de IA</h2>
            {loading && <div className="loader"></div>}
            {error && <p className="text-red-500 text-xs">{error}</p>}
            {analysis ? (
                <div className="bg-indigo-50 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-indigo-800 mb-2">Recomendação do Dia</h3>
                    <p className="text-xs text-indigo-700">{analysis}</p>
                </div>
            ) : (
                <p className="text-sm text-gray-500">Registre seus alimentos e exercícios para receber uma análise.</p>
            )}
        </div>
    );
};

export default AIAnalysis;
