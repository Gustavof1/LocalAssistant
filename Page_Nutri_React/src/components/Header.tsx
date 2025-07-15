const Header = () => (
  <header className="flex justify-between items-center mb-8">
    <div className="flex items-center space-x-3">
      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
        <i className="fas fa-heartbeat text-blue-500 text-xl"></i>
      </div>
      <h1 className="text-2xl font-bold text-gray-800">NutriAI</h1>
    </div>
    <nav className="hidden md:flex space-x-6">
      <a href="#" className="text-gray-600 hover:text-blue-500 transition">Dashboard</a>
      <a href="#" className="text-gray-600 hover:text-blue-500 transition">Nutrition</a>
      <a href="#" className="text-gray-600 hover:text-blue-500 transition">Exercise</a>
      <a href="#" className="text-gray-600 hover:text-blue-500 transition">Progress</a>
    </nav>
    <button className="md:hidden text-gray-600">
      <i className="fas fa-bars text-xl"></i>
    </button>
  </header>
);

export default Header;
