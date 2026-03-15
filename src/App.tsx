import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-8">
      <Header />

      <main className="border-4 border-dashed border-lime-500 p-8 mb-8 rounded-lg min-h-[500px]">
        <div className="border-4 border-dashed border-orange-500 p-8 mb-6 rounded-lg">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Hero Section</h1>
          <p className="text-gray-600 dark:text-gray-400">Main content area goes here</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          <div className="border-4 border-dashed border-purple-500 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Card 1</h3>
            <p className="text-gray-600 dark:text-gray-400">Content block</p>
          </div>
          <div className="border-4 border-dashed border-purple-500 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Card 2</h3>
            <p className="text-gray-600 dark:text-gray-400">Content block</p>
          </div>
          <div className="border-4 border-dashed border-purple-500 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Card 3</h3>
            <p className="text-gray-600 dark:text-gray-400">Content block</p>
          </div>
        </div>

        <div className="border-4 border-dashed border-red-500 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Secondary Section</h2>
          <p className="text-gray-600 dark:text-gray-400">Additional content area</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
