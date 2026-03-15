import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="border-4 border-dashed border-cyan-500 p-8 mb-8 rounded-lg">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="border-4 border-dashed border-pink-500 px-6 py-3 rounded">
          <span className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            LOGO
          </span>
        </div>
        <nav className="flex flex-wrap gap-4 items-center justify-center">
          <div className="border-4 border-dashed border-yellow-500 px-6 py-3 rounded">
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Nav Item 1
            </span>
          </div>
          <div className="border-4 border-dashed border-yellow-500 px-6 py-3 rounded">
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Nav Item 2
            </span>
          </div>
          <div className="border-4 border-dashed border-yellow-500 px-6 py-3 rounded">
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Nav Item 3
            </span>
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
