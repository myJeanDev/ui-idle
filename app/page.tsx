export default function Home() {
  return (
    <main className="App">
      <h1>ui-idle</h1>
      <BentoDashboard />
    </main >
  );
}

const BentoDashboard = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto">

      {/* Mobile: 1 column, Desktop: 4 columns */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 auto-rows-[180px]">


        <div className="md:col-span-2 md:row-span-2 bg-blue-500 rounded-lg p-6">
          <h2 className="text-white text-xl font-bold">Count</h2>
        </div>

        <div className="md:col-span-3 bg-green-500 rounded-lg p-4">
          <h3 className="text-white font-semibold">Buttons</h3>
          <div className="flex flex-wrap gap-3">
            {/* Scale Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg 
                       transform transition-all duration-150 
                       hover:scale-105 active:scale-95 
                       focus:outline-none focus:ring-2 focus:ring-blue-500">
              Scale Me
            </button>
          </div>
        </div>

        <div className="md:col-span-3 bg-purple-500 rounded-lg p-4">
          <h3 className="text-white font-semibold">Switches</h3>
        </div>

        <div className="md:col-span-2 bg-orange-500 rounded-lg p-4">
          <h3 className="text-white font-semibold">Breakdown</h3>
        </div>

        <div className="md:col-span-2 bg-red-500 rounded-lg p-4">
          <h3 className="text-white font-semibold">Text Input</h3>
        </div>

        <div className="bg-indigo-500 rounded-lg p-4">
          <h3 className="text-white font-semibold">Live Feed</h3>
        </div>

        <div className="md:col-span-5 bg-pink-500 rounded-lg p-4">
          <h3 className="text-white font-semibold">Slider</h3>
        </div>


      </div>

    </div>
  );
};
