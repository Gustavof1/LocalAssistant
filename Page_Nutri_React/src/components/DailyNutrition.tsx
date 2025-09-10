
import { useState } from 'react';
import { useUserDataStore } from '../store/useUserDataStore';

const DailyNutrition = () => {
    const { dailyData, addFood, addExercise } = useUserDataStore();
    const [foodInput, setFoodInput] = useState({ name: '', calories: 0, protein: 0, carbs: 0, fat: 0 });
    const [exerciseInput, setExerciseInput] = useState({ name: '', caloriesBurned: 0 });

    const today = new Date().toISOString().split('T')[0];
    const todayData = dailyData[today] || { food: [], exercise: [] };

    const handleLogFood = () => {
        if (foodInput.name && foodInput.calories > 0) {
            addFood(today, foodInput);
            setFoodInput({ name: '', calories: 0, protein: 0, carbs: 0, fat: 0 });
        }
    };

    const handleLogExercise = () => {
        if (exerciseInput.name && exerciseInput.caloriesBurned > 0) {
            addExercise(today, exerciseInput);
            setExerciseInput({ name: '', caloriesBurned: 0 });
        }
    };

    const totalCalories = todayData.food.reduce((sum, item) => sum + item.calories, 0);
    const totalProtein = todayData.food.reduce((sum, item) => sum + item.protein, 0);
    const totalCarbs = todayData.food.reduce((sum, item) => sum + item.carbs, 0);

    return (
        <div className="bento-cell bg-white rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Nutrição de Hoje</h2>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                    <p className="font-medium">{totalCalories}</p>
                    <span className="text-xs text-gray-500">Calorias</span>
                </div>
                <div className="text-center">
                    <p className="font-medium">{totalProtein}g</p>
                    <span className="text-xs text-gray-500">Proteína</span>
                </div>
                <div className="text-center">
                    <p className="font-medium">{totalCarbs}g</p>
                    <span className="text-xs text-gray-500">Carboidratos</span>
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Registrar Alimento</h3>
                    <input type="text" placeholder="Nome do alimento" value={foodInput.name} onChange={(e) => setFoodInput({ ...foodInput, name: e.target.value })} className="w-full px-3 py-1 border rounded mb-2" />
                    <div className="grid grid-cols-2 gap-2 mb-2">
                        <input type="number" placeholder="Calorias" value={foodInput.calories} onChange={(e) => setFoodInput({ ...foodInput, calories: parseInt(e.target.value) || 0 })} className="w-full px-3 py-1 border rounded" />
                        <input type="number" placeholder="Proteína" value={foodInput.protein} onChange={(e) => setFoodInput({ ...foodInput, protein: parseInt(e.target.value) || 0 })} className="w-full px-3 py-1 border rounded" />
                        <input type="number" placeholder="Carboidratos" value={foodInput.carbs} onChange={(e) => setFoodInput({ ...foodInput, carbs: parseInt(e.target.value) || 0 })} className="w-full px-3 py-1 border rounded" />
                        <input type="number" placeholder="Gordura" value={foodInput.fat} onChange={(e) => setFoodInput({ ...foodInput, fat: parseInt(e.target.value) || 0 })} className="w-full px-3 py-1 border rounded" />
                    </div>
                    <button onClick={handleLogFood} className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Registrar</button>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Registrar Exercício</h3>
                    <input type="text" placeholder="Nome do exercício" value={exerciseInput.name} onChange={(e) => setExerciseInput({ ...exerciseInput, name: e.target.value })} className="w-full px-3 py-1 border rounded mb-2" />
                    <input type="number" placeholder="Calorias queimadas" value={exerciseInput.caloriesBurned} onChange={(e) => setExerciseInput({ ...exerciseInput, caloriesBurned: parseInt(e.target.value) || 0 })} className="w-full px-3 py-1 border rounded mb-2" />
                    <button onClick={handleLogExercise} className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">Registrar</button>
                </div>
            </div>
        </div>
    );
};

export default DailyNutrition;
