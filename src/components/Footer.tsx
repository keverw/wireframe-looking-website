export function Footer() {
  return (
    <footer className="border-4 border-dashed border-blue-500 p-8 rounded-lg">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="border-4 border-dashed border-teal-500 px-6 py-3 rounded">
          <span className="text-gray-700 dark:text-gray-300">Footer Content</span>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="border-4 border-dashed border-teal-500 px-4 py-2 rounded">
            <span className="text-gray-700 dark:text-gray-300">Link 1</span>
          </div>
          <div className="border-4 border-dashed border-teal-500 px-4 py-2 rounded">
            <span className="text-gray-700 dark:text-gray-300">Link 2</span>
          </div>
          <div className="border-4 border-dashed border-teal-500 px-4 py-2 rounded">
            <span className="text-gray-700 dark:text-gray-300">Link 3</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
