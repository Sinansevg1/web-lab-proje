function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-sm w-full p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Merhaba Tailwind!
        </h1>
        <p className="text-gray-600 mb-4">
          Bu benim ilk Tailwind CSS bileşenim.
          Her class tek bir iş yapar.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Devam Et
        </button>
      </div>
    </div>
  );
}

export default App;
