'use client';

import { useTheme } from './ThemeProvider';

export default function ThemeSelector() {
  const { currentTheme, setTheme, availableThemes } = useTheme();

  return (
    <div className="relative">
      <select
        value={availableThemes.find(name => currentTheme.name === themes[name]?.name) || 'amber'}
        onChange={(e) => setTheme(e.target.value)}
        className={`px-3 py-1 rounded border bg-${currentTheme.colors.primary[50]} dark:bg-${currentTheme.colors.primary[800]} border-${currentTheme.colors.primary[300]} dark:border-${currentTheme.colors.primary[600]} text-${currentTheme.colors.primary[900]} dark:text-${currentTheme.colors.primary[100]} text-sm`}
      >
        {availableThemes.map((themeName) => (
          <option key={themeName} value={themeName}>
            {themes[themeName].name}
          </option>
        ))}
      </select>
    </div>
  );
}

// Import themes for the component
import { themes } from '../utils/themes';