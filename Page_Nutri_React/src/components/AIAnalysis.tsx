const AIAnalysis = () => (
  <div className="bento-cell bg-white rounded-2xl p-6 md:col-span-2 lg:col-span-1">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-semibold text-gray-800">AI Analysis</h2>
      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
        <i className="fas fa-brain text-indigo-500"></i>
      </div>
    </div>
    <div className="bg-indigo-50 rounded-lg p-4 mb-4">
      <h3 className="text-sm font-medium text-indigo-800 mb-2">Today's Recommendation</h3>
      <p className="text-xs text-indigo-700">Com base na sua atividade e nutrição, recomendo aumentar a ingestão de água em 2 copos hoje e adicionar uma caminhada de 15 minutos após o jantar.</p>
    </div>
    <div className="space-y-3">
      <div className="flex items-start space-x-2">
        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
          <i className="fas fa-check text-green-500 text-xs"></i>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-800">Consumo de proteína</p>
          <p className="text-xs text-gray-500">Você está atingindo sua meta diária de proteína</p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center mt-0.5">
          <i className="fas fa-exclamation text-yellow-500 text-xs"></i>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-800">Fibras</p>
          <p className="text-xs text-gray-500">Considere adicionar mais vegetais</p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
          <i className="fas fa-info text-blue-500 text-xs"></i>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-800">Qualidade do sono</p>
          <p className="text-xs text-gray-500">Seu padrão de sono está bom</p>
        </div>
      </div>
    </div>
  </div>
);

export default AIAnalysis;
