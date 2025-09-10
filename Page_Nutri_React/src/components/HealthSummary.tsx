import { useUserDataStore } from '../store/useUserDataStore';
import { nutritionDatabase } from '../data/nutrition';

const HealthSummary = () => {
    const { dailyData } = useUserDataStore();
    const today = new Date().toISOString().split('T')[0];
    const todayData = dailyData[today] || { food: [], exercise: [] };

    const totals = todayData.food.reduce(
        (acc, item) => {
            const foodData = nutritionDatabase[item.name.toLowerCase()];
            if (foodData) {
                acc.calories += foodData.calories;
                acc.protein += foodData.protein;
                acc.carbs += foodData.carbs;
                acc.fat += foodData.fat;
            }
            return acc;
        },
        { calories: 0, protein: 0, carbs: 0, fat: 0 }
    );

    return (
        <div className="bento-cell bg-white rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Resumo de Saúde</h2>
            <div className="space-y-4">
                <div className="health-metric p-3 rounded-lg">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Calorias</span>
                        <span className="text-sm font-medium text-green-600">{totals.calories.toFixed(0)}</span>
                    </div>
                </div>
                <div className="health-metric p-3 rounded-lg">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Proteína</span>
                        <span className="text-sm font-medium text-blue-600">{totals.protein.toFixed(1)}g</span>
                    </div>
                </div>
                <div className="health-metric p-3 rounded-lg">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Carboidratos</span>
                        <span className="text-sm font-medium text-purple-600">{totals.carbs.toFixed(1)}g</span>
                    </div>
                </div>
            </div>
            <button className="mt-6 w-full py-2 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition">
                Ver Relatório Completo
            </button>
        </div>
    );
};

export default HealthSummary;
