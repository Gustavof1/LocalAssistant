const QuickQuestions = () => (
  <div className="bento-cell bg-white rounded-2xl p-6 md:col-span-1">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-semibold text-gray-800">Quick Questions</h2>
      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
        <i className="fas fa-bolt text-purple-500"></i>
      </div>
    </div>
    <div className="space-y-3">
      <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
        <i className="fas fa-egg mr-2 text-yellow-500"></i> Breakfast ideas
      </button>
      <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
        <i className="fas fa-tint mr-2 text-blue-400"></i> Hydration tips
      </button>
      <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
        <i className="fas fa-running mr-2 text-green-500"></i> Quick workout
      </button>
      <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
        <i className="fas fa-apple-alt mr-2 text-red-400"></i> Digestion foods
      </button>
    </div>
  </div>
);

export default QuickQuestions;
