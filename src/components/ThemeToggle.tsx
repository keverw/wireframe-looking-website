import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const icons = {
  auto: Monitor,
  dark: Moon,
  light: Sun,
};

const labels = {
  auto: 'Auto',
  dark: 'Dark',
  light: 'Light',
};

export function ThemeToggle() {
  const { preference, cycleTheme } = useTheme();
  const Icon = icons[preference];

  return (
    <button
      onClick={cycleTheme}
      className="flex items-center gap-2 border-4 border-dashed border-gray-400 dark:border-gray-500 px-4 py-2 rounded text-gray-700 dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-400 transition-colors"
      title={`Theme: ${labels[preference]} — click to cycle`}
    >
      <Icon size={16} />
      <span className="text-sm font-medium">{labels[preference]}</span>
    </button>
  );
}
