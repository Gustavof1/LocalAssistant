const Calendar = () => (
  <div className="bento-cell bg-white rounded-2xl p-6 md:col-span-2 lg:col-span-1">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-semibold text-gray-800">Calendar</h2>
      <div className="flex space-x-2">
        <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
          <i className="fas fa-chevron-left text-gray-500"></i>
        </button>
        <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
          <i className="fas fa-chevron-right text-gray-500"></i>
        </button>
      </div>
    </div>
    <div className="grid grid-cols-7 gap-2 mb-4">
      {['S','M','T','W','T','F','S'].map((d, i) => (
        <div key={i} className="text-center text-xs text-gray-500 font-medium">{d}</div>
      ))}
    </div>
    <div className="grid grid-cols-7 gap-2">
      {/* Exemplo de dias, pode ser dinâmico depois */}
      {[...Array(35)].map((_, i) => (
        <div key={i} className={`calendar-day text-center text-sm py-2 rounded-full ${i === 17 ? 'active font-medium' : ''} ${[11,24].includes(i) ? 'has-data' : ''} ${i < 3 || i > 30 ? 'text-gray-400' : ''}`}>{i+1}</div>
      ))}
    </div>
    <div className="mt-6">
      <h3 className="text-sm font-medium text-gray-700 mb-2">Today's Activities</h3>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <span className="text-sm text-gray-600">Morning Walk - 30 min</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-sm text-gray-600">Balanced Breakfast</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-purple-500"></div>
          <span className="text-sm text-gray-600">Yoga Session</span>
        </div>
      </div>
    </div>
  </div>
);

export default Calendar;
