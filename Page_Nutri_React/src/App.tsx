
import Header from './components/Header';
import HealthSummary from './components/HealthSummary';
import Chat from './components/Chat';
import AIAnalysis from './components/AIAnalysis';
import Calendar from './components/Calendar';
import QuickQuestions from './components/QuickQuestions';
import DailyNutrition from './components/DailyNutrition';



function App() {


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <HealthSummary />
          <Calendar />
          <QuickQuestions />
          <Chat />
          <DailyNutrition />
          <AIAnalysis />
        </div>
      </div>
    </div>
  );
}

export default App;
