
import Header from './components/Header';
import HealthSummary from './components/HealthSummary';
import Chat from './components/Chat';
import AIAnalysis from './components/AIAnalysis';
import Calendar from './components/Calendar';
import QuickQuestions from './components/QuickQuestions';
import DailyNutrition from './components/DailyNutrition';
import './bento.css';


function App() {


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-2 bento-cell">
            <HealthSummary />
          </div>
          <div className="bento-cell">
            <Calendar />
          </div>
          <div className="bento-cell">
            <QuickQuestions />
          </div>
          <div className="md:col-span-2 lg:col-span-4 lg:row-span-2 bento-cell">
            <Chat />
          </div>
          <div className="lg:col-span-2 bento-cell">
            <DailyNutrition />
          </div>
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 bento-cell">
            <AIAnalysis />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
