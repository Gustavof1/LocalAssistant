
import { useState } from 'react';

const tips = {
  breakfast: 'Prefira alimentos ricos em fibras e proteínas, como ovos, aveia e frutas.',
  lunch: 'Inclua vegetais variados, uma fonte de proteína magra e carboidratos integrais.',
  dinner: 'Opte por refeições leves, evitando frituras e excesso de carboidratos à noite.'
};

const DailyNutrition = () => {
  const [focus, setFocus] = useState<string | null>(null);
  return (
    <div className="bento-cell bg-white rounded-2xl p-6 md:col-span-2">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Today's Nutrition</h2>
        <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
          <i className="fas fa-utensils text-yellow-500"></i>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2">
            <i className="fas fa-fire text-blue-500"></i>
          </div>
          <span className="text-xs text-gray-500">Calories</span>
          <p className="font-medium">1,850</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-2">
            <i className="fas fa-dumbbell text-green-500"></i>
          </div>
          <span className="text-xs text-gray-500">Protein</span>
          <p className="font-medium">112g</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-2">
            <i className="fas fa-bread-slice text-purple-500"></i>
          </div>
          <span className="text-xs text-gray-500">Carbs</span>
          <p className="font-medium">210g</p>
        </div>
      </div>
      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Breakfast</span>
            <span className="font-medium">450 cal</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '24%' }}></div>
          </div>
          <input
            className="mt-2 w-full px-3 py-1 border rounded focus:ring-2 focus:ring-blue-400"
            placeholder="Descreva seu café da manhã"
            onFocus={() => setFocus('breakfast')}
            onBlur={() => setFocus(null)}
          />
          {focus === 'breakfast' && (
            <div className="text-xs text-blue-600 mt-1">{tips.breakfast}</div>
          )}
        </div>
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Lunch</span>
            <span className="font-medium">750 cal</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '40%' }}></div>
          </div>
          <input
            className="mt-2 w-full px-3 py-1 border rounded focus:ring-2 focus:ring-green-400"
            placeholder="Descreva seu almoço"
            onFocus={() => setFocus('lunch')}
            onBlur={() => setFocus(null)}
          />
          {focus === 'lunch' && (
            <div className="text-xs text-green-600 mt-1">{tips.lunch}</div>
          )}
        </div>
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Dinner</span>
            <span className="font-medium">650 cal</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '35%' }}></div>
          </div>
          <input
            className="mt-2 w-full px-3 py-1 border rounded focus:ring-2 focus:ring-purple-400"
            placeholder="Descreva seu jantar"
            onFocus={() => setFocus('dinner')}
            onBlur={() => setFocus(null)}
          />
          {focus === 'dinner' && (
            <div className="text-xs text-purple-600 mt-1">{tips.dinner}</div>
          )}
        </div>
      </div>
      <button className="mt-6 w-full py-2 bg-green-50 text-green-600 rounded-lg font-medium hover:bg-green-100 transition">
        Log Meal
      </button>
    </div>
  );
};

export default DailyNutrition;
