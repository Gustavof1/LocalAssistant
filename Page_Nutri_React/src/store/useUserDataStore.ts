import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FoodItem {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

interface ExerciseItem {
  name: string;
  caloriesBurned: number;
}

interface DailyData {
  food: FoodItem[];
  exercise: ExerciseItem[];
}

interface UserDataState {
  dailyData: Record<string, DailyData>;
  addFood: (date: string, food: FoodItem) => void;
  addExercise: (date: string, exercise: ExerciseItem) => void;
}

export const useUserDataStore = create<UserDataState>()(
  persist(
    (set) => ({
      dailyData: {},
      addFood: (date, food) =>
        set((state) => {
          const dayData = state.dailyData[date] || { food: [], exercise: [] };
          return {
            dailyData: {
              ...state.dailyData,
              [date]: { ...dayData, food: [...dayData.food, food] },
            },
          };
        }),
      addExercise: (date, exercise) =>
        set((state) => {
          const dayData = state.dailyData[date] || { food: [], exercise: [] };
          return {
            dailyData: {
              ...state.dailyData,
              [date]: { ...dayData, exercise: [...dayData.exercise, exercise] },
            },
          };
        }),
    }),
    {
      name: 'user-health-data',
    }
  )
);
