export interface Theme {
  name: string;
  colors: {
    // Background gradients
    bgGradient: {
      light: string;
      dark: string;
    };
    // Primary colors
    primary: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    // Secondary colors
    secondary: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    // Accent colors
    accent: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
  };
}

export const themes: Record<string, Theme> = {
  amber: {
    name: 'Literary Amber',
    colors: {
      bgGradient: {
        light: 'from-amber-50 via-orange-50 to-red-50',
        dark: 'from-amber-900 via-orange-900 to-red-900'
      },
      primary: {
        50: 'amber-50',
        100: 'amber-100',
        200: 'amber-200',
        300: 'amber-300',
        400: 'amber-400',
        500: 'amber-500',
        600: 'amber-600',
        700: 'amber-700',
        800: 'amber-800',
        900: 'amber-900'
      },
      secondary: {
        50: 'orange-50',
        100: 'orange-100',
        200: 'orange-200',
        300: 'orange-300',
        400: 'orange-400',
        500: 'orange-500',
        600: 'orange-600',
        700: 'orange-700',
        800: 'orange-800',
        900: 'orange-900'
      },
      accent: {
        50: 'red-50',
        100: 'red-100',
        200: 'red-200',
        300: 'red-300',
        400: 'red-400',
        500: 'red-500',
        600: 'red-600',
        700: 'red-700',
        800: 'red-800',
        900: 'red-900'
      }
    }
  },
  emerald: {
    name: 'Forest Emerald',
    colors: {
      bgGradient: {
        light: 'from-emerald-50 via-green-50 to-teal-50',
        dark: 'from-emerald-900 via-green-900 to-teal-900'
      },
      primary: {
        50: 'emerald-50',
        100: 'emerald-100',
        200: 'emerald-200',
        300: 'emerald-300',
        400: 'emerald-400',
        500: 'emerald-500',
        600: 'emerald-600',
        700: 'emerald-700',
        800: 'emerald-800',
        900: 'emerald-900'
      },
      secondary: {
        50: 'green-50',
        100: 'green-100',
        200: 'green-200',
        300: 'green-300',
        400: 'green-400',
        500: 'green-500',
        600: 'green-600',
        700: 'green-700',
        800: 'green-800',
        900: 'green-900'
      },
      accent: {
        50: 'teal-50',
        100: 'teal-100',
        200: 'teal-200',
        300: 'teal-300',
        400: 'teal-400',
        500: 'teal-500',
        600: 'teal-600',
        700: 'teal-700',
        800: 'teal-800',
        900: 'teal-900'
      }
    }
  },
  slate: {
    name: 'Modern Slate',
    colors: {
      bgGradient: {
        light: 'from-slate-50 via-gray-50 to-zinc-50',
        dark: 'from-slate-900 via-gray-900 to-zinc-900'
      },
      primary: {
        50: 'slate-50',
        100: 'slate-100',
        200: 'slate-200',
        300: 'slate-300',
        400: 'slate-400',
        500: 'slate-500',
        600: 'slate-600',
        700: 'slate-700',
        800: 'slate-800',
        900: 'slate-900'
      },
      secondary: {
        50: 'gray-50',
        100: 'gray-100',
        200: 'gray-200',
        300: 'gray-300',
        400: 'gray-400',
        500: 'gray-500',
        600: 'gray-600',
        700: 'gray-700',
        800: 'gray-800',
        900: 'gray-900'
      },
      accent: {
        50: 'blue-50',
        100: 'blue-100',
        200: 'blue-200',
        300: 'blue-300',
        400: 'blue-400',
        500: 'blue-500',
        600: 'blue-600',
        700: 'blue-700',
        800: 'blue-800',
        900: 'blue-900'
      }
    }
  }
};