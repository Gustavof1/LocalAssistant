const HealthSummary = () => (
  <div className="bento-cell bg-white rounded-2xl p-6 md:col-span-1">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-semibold text-gray-800">Health Summary</h2>
      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
        <i className="fas fa-chart-line text-green-500"></i>
      </div>
    </div>
    <div className="space-y-4">
      <div className="health-metric p-3 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">BMI</span>
          <span className="text-sm font-medium text-green-600">24.2</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
          <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '70%' }}></div>
        </div>
      </div>
      <div className="health-metric p-3 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Hydration</span>
          <span className="text-sm font-medium text-blue-600">85%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
          <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '85%' }}></div>
        </div>
      </div>
      <div className="health-metric p-3 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Activity</span>
          <span className="text-sm font-medium text-purple-600">65%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
          <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '65%' }}></div>
        </div>
      </div>
    </div>
    <button className="mt-6 w-full py-2 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition">
      View Full Report
    </button>
  </div>
);

export default HealthSummary;
