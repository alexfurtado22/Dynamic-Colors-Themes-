const themes = {
  Pink: {
    light: {
      '--hue-pink': '325', // Define the hue as a CSS custom property
      swatch1: 'oklch(99% .05 var(--hue-pink))',
      swatch2: 'oklch(90% .1 var(--hue-pink))',
      swatch3: 'oklch(80% .2 var(--hue-pink))',
      swatch4: 'oklch(72% .25 var(--hue-pink))',
      swatch5: 'oklch(67% .31 var(--hue-pink))',
      swatch6: 'oklch(50% .27 var(--hue-pink))',
      swatch7: 'oklch(35% .25 var(--hue-pink))',
      swatch8: 'oklch(25% .2 var(--hue-pink))',
      swatch9: 'oklch(13% .2 var(--hue-pink))',
      swatch10: 'oklch(5% .1 var(--hue-pink))',

      text1: 'var(--swatch10)', // Primary text color
      text2: 'var(--swatch9)', // Secondary text color
      link: 'var(--swatch3)', // Link color
      primary: 'var(--swatch7)',
      border: 'var(--swatch3)',
      bar: 'var(--swatch7)',
      surface1: 'var(--swatch1)', // Darkest surface color
      surface2: 'var(--swatch2)', // Secondary surface color
      surface3: 'var(--swatch3)', // Tertiary surface color
    },
    dark: {
      '--hue-pink': '320', // Define the hue as a CSS custom property
      swatch1: 'oklch(99% .05 var(--hue-pink))',
      swatch2: 'oklch(90% .1 var(--hue-pink))',
      swatch3: 'oklch(80% .2 var(--hue-pink))',
      swatch4: 'oklch(72% .25 var(--hue-pink))',
      swatch5: 'oklch(67% .31 var(--hue-pink))',
      swatch6: 'oklch(50% .27 var(--hue-pink))',
      swatch7: 'oklch(35% .25 var(--hue-pink))',
      swatch8: 'oklch(25% .2 var(--hue-pink))',
      swatch9: 'oklch(13% .2 var(--hue-pink))',
      swatch10: 'oklch(5% .1 var(--hue-pink))',

      text1: 'var(--swatch1)' /* Lightest for high contrast */,
      text2: 'var(--swatch2)' /* Slightly muted */,
      link: 'var(--swatch5)' /* Highlighted for links */,
      primary: 'var(--swatch7)',
      border: 'var(--swatch3)',
      bar: 'var(--swatch7)',
      surface1: 'var(--swatch10)' /* Darkest surface */,
      surface2: 'var(--swatch9)' /* Secondary surface */,
      surface3: 'var(--swatch8)' /* Tertiary surface */,
    },
  },

  Green: {
    light: {
      '--hue-green': '145', // Define the hue as a CSS custom property
      swatch1: 'oklch(99% .05 var(--hue-green))',
      swatch2: 'oklch(90% .1 var(--hue-green))',
      swatch3: 'oklch(80% .2 var(--hue-green))',
      swatch4: 'oklch(72% .25 var(--hue-green))',
      swatch5: 'oklch(67% .31 var(--hue-green))',
      swatch6: 'oklch(50% .27 var(--hue-green))',
      swatch7: 'oklch(35% .25 var(--hue-green))',
      swatch8: 'oklch(25% .2 var(--hue-green))',
      swatch9: 'oklch(13% .2 var(--hue-green))',
      swatch10: 'oklch(5% .1 var(--hue-green))',

      text1: 'var(--swatch10)', // Primary text color
      text2: 'var(--swatch9)', // Secondary text color
      link: 'var(--swatch3)', // Link color
      primary: 'var(--swatch7)',
      border: 'var(--swatch3)',
      bar: 'var(--swatch7)',
      surface1: 'var(--swatch1)', // Darkest surface color
      surface2: 'var(--swatch2)', // Secondary surface color
      surface3: 'var(--swatch3)', // Tertiary surface color
    },
    dark: {
      '--hue-green': '145', // Define the hue as a CSS custom property
      swatch1: 'oklch(99% .05 var(--hue-green))',
      swatch2: 'oklch(90% .1 var(--hue-green))',
      swatch3: 'oklch(80% .2 var(--hue-green))',
      swatch4: 'oklch(72% .25 var(--hue-green))',
      swatch5: 'oklch(67% .31 var(--hue-green))',
      swatch6: 'oklch(50% .27 var(--hue-green))',
      swatch7: 'oklch(35% .25 var(--hue-green))',
      swatch8: 'oklch(25% .2 var(--hue-green))',
      swatch9: 'oklch(13% .2 var(--hue-green))',
      swatch10: 'oklch(5% .1 var(--hue-green))',

      text1: 'var(--swatch1)' /* Lightest for high contrast */,
      text2: 'var(--swatch2)' /* Slightly muted */,
      link: 'var(--swatch5)' /* Highlighted for links */,
      primary: 'var(--swatch7)',
      border: 'var(--swatch3)',
      bar: 'var(--swatch7)',
      surface1: 'var(--swatch10)' /* Darkest surface */,
      surface2: 'var(--swatch9)' /* Secondary surface */,
      surface3: 'var(--swatch8)' /* Tertiary surface */,
    },
  },

  Blue: {
    light: {
      '--hue-blue': '340', // Define the hue as a CSS custom property
      swatch1: 'oklch(99% .05 var(--hue-blue))',
      swatch2: 'oklch(90% .1 var(--hue-blue))',
      swatch3: 'oklch(80% .2 var(--hue-blue))',
      swatch4: 'oklch(72% .25 var(--hue-blue))',
      swatch5: 'oklch(67% .31 var(--hue-blue))',
      swatch6: 'oklch(50% .27 var(--hue-blue))',
      swatch7: 'oklch(35% .25 var(--hue-blue))',
      swatch8: 'oklch(25% .2 var(--hue-blue))',
      swatch9: 'oklch(13% .2 var(--hue-blue))',
      swatch10: 'oklch(5% .1 var(--hue-blue))',

      text1: 'var(--swatch10)', // Primary text color
      text2: 'var(--swatch9)', // Secondary text color
      link: 'var(--swatch3)', // Link color
      primary: 'var(--swatch7)',
      border: 'var(--swatch3)',
      bar: 'var(--swatch7)',
      surface1: 'var(--swatch1)', // Darkest surface color
      surface2: 'var(--swatch2)', // Secondary surface color
      surface3: 'var(--swatch3)', // Tertiary surface color
    },
    dark: {
      '--hue-blue': '350', // Define the hue as a CSS custom property
      swatch1: 'oklch(99% .05 var(--hue-blue))',
      swatch2: 'oklch(90% .1 var(--hue-blue))',
      swatch3: 'oklch(80% .2 var(--hue-blue))',
      swatch4: 'oklch(72% .25 var(--hue-blue))',
      swatch5: 'oklch(67% .31 var(--hue-blue))',
      swatch6: 'oklch(50% .27 var(--hue-blue))',
      swatch7: 'oklch(35% .25 var(--hue-blue))',
      swatch8: 'oklch(25% .2 var(--hue-blue))',
      swatch9: 'oklch(13% .2 var(--hue-blue))',
      swatch10: 'oklch(5% .1 var(--hue-blue))',

      text1: 'var(--swatch1)' /* Lightest for high contrast */,
      text2: 'var(--swatch2)' /* Slightly muted */,
      link: 'var(--swatch5)' /* Highlighted for links */,
      primary: 'var(--swatch7)',
      border: 'var(--swatch3)',
      bar: 'var(--swatch7)',
      surface1: 'var(--swatch10)' /* Darkest surface */,
      surface2: 'var(--swatch9)' /* Secondary surface */,
      surface3: 'var(--swatch8)' /* Tertiary surface */,
    },
  },

  Purple: {
    light: {
      '--hue-purple': '310', // Define the hue as a CSS custom property
      swatch1: 'oklch(99% .05 var(--hue-purple))',
      swatch2: 'oklch(90% .1 var(--hue-purple))',
      swatch3: 'oklch(80% .2 var(--hue-purple))',
      swatch4: 'oklch(72% .25 var(--hue-purple))',
      swatch5: 'oklch(67% .31 var(--hue-purple))',
      swatch6: 'oklch(50% .27 var(--hue-purple))',
      swatch7: 'oklch(35% .25 var(--hue-purple))',
      swatch8: 'oklch(25% .2 var(--hue-purple))',
      swatch9: 'oklch(13% .2 var(--hue-purple))',
      swatch10: 'oklch(5% .1 var(--hue-purple))',

      text1: 'var(--swatch10)', // Primary text color
      text2: 'var(--swatch9)', // Secondary text color
      link: 'var(--swatch3)', // Link color
      primary: 'var(--swatch7)',
      border: 'var(--swatch3)',
      bar: 'var(--swatch7)',
      surface1: 'var(--swatch1)', // Darkest surface color
      surface2: 'var(--swatch2)', // Secondary surface color
      surface3: 'var(--swatch3)', // Tertiary surface color
    },
    dark: {
      '--hue-purple': '310', // Define the hue as a CSS custom property
      swatch1: 'oklch(99% .05 var(--hue-purple))',
      swatch2: 'oklch(90% .1 var(--hue-purple))',
      swatch3: 'oklch(80% .2 var(--hue-purple))',
      swatch4: 'oklch(72% .25 var(--hue-purple))',
      swatch5: 'oklch(67% .31 var(--hue-purple))',
      swatch6: 'oklch(50% .27 var(--hue-purple))',
      swatch7: 'oklch(35% .25 var(--hue-purple))',
      swatch8: 'oklch(25% .2 var(--hue-purple))',
      swatch9: 'oklch(13% .2 var(--hue-purple))',
      swatch10: 'oklch(5% .1 var(--hue-purple))',

      text1: 'var(--swatch1)' /* Lightest for high contrast */,
      text2: 'var(--swatch2)' /* Slightly muted */,
      link: 'var(--swatch5)' /* Highlighted for links */,
      primary: 'var(--swatch7)',
      border: 'var(--swatch3)',
      bar: 'var(--swatch7)',
      surface1: 'var(--swatch10)' /* Darkest surface */,
      surface2: 'var(--swatch9)' /* Secondary surface */,
      surface3: 'var(--swatch8)' /* Tertiary surface */,
    },
  },

  Yellow: {
    light: {
      '--hue-yellow': '100', // Define the hue as a CSS custom property
      swatch1: 'oklch(99% .05 var(--hue-yellow))',
      swatch2: 'oklch(90% .1 var(--hue-yellow))',
      swatch3: 'oklch(80% .2 var(--hue-yellow))',
      swatch4: 'oklch(72% .25 var(--hue-yellow))',
      swatch5: 'oklch(67% .31 var(--hue-yellow))',
      swatch6: 'oklch(50% .27 var(--hue-yellow))',
      swatch7: 'oklch(35% .25 var(--hue-yellow))',
      swatch8: 'oklch(25% .2 var(--hue-yellow))',
      swatch9: 'oklch(13% .2 var(--hue-yellow))',
      swatch10: 'oklch(5% .1 var(--hue-yellow))',

      text1: 'var(--swatch10)', // Primary text color
      text2: 'var(--swatch9)', // Secondary text color
      link: 'var(--swatch3)', // Link color
      primary: 'var(--swatch7)',
      border: 'var(--swatch3)',
      bar: 'var(--swatch7)',
      surface1: 'var(--swatch1)', // Darkest surface color
      surface2: 'var(--swatch2)', // Secondary surface color
      surface3: 'var(--swatch3)', // Tertiary surface color
    },
    dark: {
      '--hue-yellow': '100', // Define the hue as a CSS custom property
      swatch1: 'oklch(99% .05 var(--hue-yellow))',
      swatch2: 'oklch(90% .1 var(--hue-yellow))',
      swatch3: 'oklch(80% .2 var(--hue-yellow))',
      swatch4: 'oklch(72% .25 var(--hue-yellow))',
      swatch5: 'oklch(67% .31 var(--hue-yellow))',
      swatch6: 'oklch(50% .27 var(--hue-yellow))',
      swatch7: 'oklch(35% .25 var(--hue-yellow))',
      swatch8: 'oklch(25% .2 var(--hue-yellow))',
      swatch9: 'oklch(13% .2 var(--hue-yellow))',
      swatch10: 'oklch(5% .1 var(--hue-yellow))',

      text1: 'var(--swatch1)' /* Lightest for high contrast */,
      text2: 'var(--swatch2)' /* Slightly muted */,
      link: 'var(--swatch5)' /* Highlighted for links */,
      primary: 'var(--swatch7)',
      border: 'var(--swatch3)',
      bar: 'var(--swatch7)',
      surface1: 'var(--swatch10)' /* Darkest surface */,
      surface2: 'var(--swatch9)' /* Secondary surface */,
      surface3: 'var(--swatch8)' /* Tertiary surface */,
    },
  },

  Red: {
    light: {
      '--hue-red': '25', // Define the hue as a CSS custom property
      swatch1: 'oklch(99% .05 var(--hue-red))',
      swatch2: 'oklch(90% .1 var(--hue-red))',
      swatch3: 'oklch(80% .2 var(--hue-red))',
      swatch4: 'oklch(72% .25 var(--hue-red))',
      swatch5: 'oklch(67% .31 var(--hue-red))',
      swatch6: 'oklch(50% .27 var(--hue-red))',
      swatch7: 'oklch(35% .25 var(--hue-red))',
      swatch8: 'oklch(25% .2 var(--hue-red))',
      swatch9: 'oklch(13% .2 var(--hue-red))',
      swatch10: 'oklch(5% .1 var(--hue-red))',

      text1: 'var(--swatch10)', // Primary text color
      text2: 'var(--swatch9)', // Secondary text color
      link: 'var(--swatch3)', // Link color
      primary: 'var(--swatch7)',
      border: 'var(--swatch3)',
      bar: 'var(--swatch7)',
      surface1: 'var(--swatch1)', // Darkest surface color
      surface2: 'var(--swatch2)', // Secondary surface color
      surface3: 'var(--swatch3)', // Tertiary surface color
    },
    dark: {
      '--hue-red': '25', // Define the hue as a CSS custom property
      swatch1: 'oklch(99% .05 var(--hue-red))',
      swatch2: 'oklch(90% .1 var(--hue-red))',
      swatch3: 'oklch(80% .2 var(--hue-red))',
      swatch4: 'oklch(72% .25 var(--hue-red))',
      swatch5: 'oklch(67% .31 var(--hue-red))',
      swatch6: 'oklch(50% .27 var(--hue-red))',
      swatch7: 'oklch(35% .25 var(--hue-red))',
      swatch8: 'oklch(25% .2 var(--hue-red))',
      swatch9: 'oklch(13% .2 var(--hue-red))',
      swatch10: 'oklch(5% .1 var(--hue-red))',

      text1: 'var(--swatch1)' /* Lightest for high contrast */,
      text2: 'var(--swatch2)' /* Slightly muted */,
      link: 'var(--swatch5)' /* Highlighted for links */,
      primary: 'var(--swatch7)',
      border: 'var(--swatch3)',
      bar: 'var(--swatch7)',
      surface1: 'var(--swatch10)' /* Darkest surface */,
      surface2: 'var(--swatch9)' /* Secondary surface */,
      surface3: 'var(--swatch8)' /* Tertiary surface */,
    },
  },

  Wine: {
    light: {
      '--hue-wine': '7', // Define the hue as a CSS custom property
      swatch1: 'oklch(99% .05 var(--hue-wine))',
      swatch2: 'oklch(90% .1 var(--hue-wine))',
      swatch3: 'oklch(80% .2 var(--hue-wine))',
      swatch4: 'oklch(72% .25 var(--hue-wine))',
      swatch5: 'oklch(67% .31 var(--hue-wine))',
      swatch6: 'oklch(50% .27 var(--hue-wine))',
      swatch7: 'oklch(35% .25 var(--hue-wine))',
      swatch8: 'oklch(25% .2 var(--hue-wine))',
      swatch9: 'oklch(13% .2 var(--hue-wine))',
      swatch10: 'oklch(5% .1 var(--hue-wine))',

      text1: 'var(--swatch10)', // Primary text color
      text2: 'var(--swatch9)', // Secondary text color
      link: 'var(--swatch3)', // Link color
      primary: 'var(--swatch7)',
      border: 'var(--swatch3)',
      bar: 'var(--swatch7)',
      surface1: 'var(--swatch1)', // Darkest surface color
      surface2: 'var(--swatch2)', // Secondary surface color
      surface3: 'var(--swatch3)', // Tertiary surface color
    },
    dark: {
      '--hue-wine': '7', // Define the hue as a CSS custom property
      swatch1: 'oklch(99% .05 var(--hue-wine))',
      swatch2: 'oklch(90% .1 var(--hue-wine))',
      swatch3: 'oklch(80% .2 var(--hue-wine))',
      swatch4: 'oklch(72% .25 var(--hue-wine))',
      swatch5: 'oklch(67% .31 var(--hue-wine))',
      swatch6: 'oklch(50% .27 var(--hue-wine))',
      swatch7: 'oklch(35% .25 var(--hue-wine))',
      swatch8: 'oklch(25% .2 var(--hue-wine))',
      swatch9: 'oklch(13% .2 var(--hue-wine))',
      swatch10: 'oklch(5% .1 var(--hue-wine))',

      text1: 'var(--swatch1)' /* Lightest for high contrast */,
      text2: 'var(--swatch2)' /* Slightly muted */,
      link: 'var(--swatch5)' /* Highlighted for links */,
      primary: 'var(--swatch7)',
      border: 'var(--swatch3)',
      bar: 'var(--swatch7)',
      surface1: 'var(--swatch10)' /* Darkest surface */,
      surface2: 'var(--swatch9)' /* Secondary surface */,
      surface3: 'var(--swatch8)' /* Tertiary surface */,
    },
  },

  Zinc: {
    light: {
      swatch1: 'oklch(96% 0 0)',
      swatch2: 'oklch(90% 0 0)',
      swatch3: 'oklch(80% 0 0)',
      swatch4: 'oklch(86% 0 0)',
      swatch5: 'oklch(77% 0 0)',
      swatch6: 'oklch(51% 0 0)',
      swatch7: 'oklch(39.5% 0 0)',
      swatch8: 'oklch(25% 0 0)',
      swatch9: 'oklch(16% 0 0)',
      swatch10: 'oklch(17% 0 0)',

      text1: 'var(--swatch10)', // Primary text color
      text2: 'var(--swatch9)', // Secondary text color
      link: 'var(--swatch3)', // Link color
      primary: 'var(--swatch7)',
      border: 'var(--swatch3)',
      bar: 'var(--swatch7)',
      surface1: 'var(--swatch1)', // Darkest surface color
      surface2: 'var(--swatch2)', // Secondary surface color
      surface3: 'var(--swatch3)', // Tertiary surface color
    },

    dark: {
      swatch1: 'oklch(17% 0 0)' /* Darkest */,
      swatch2: 'oklch(16% 0 0)',
      swatch3: 'oklch(25% 0 0)',
      swatch4: 'oklch(39.5% 0 0)',
      swatch5: 'oklch(51% 0 0)',
      swatch6: 'oklch(77% 0 0)',
      swatch7: 'oklch(86% 0 0)',
      swatch8: 'oklch(80% 0 0)' /* Lightest */,
      swatch9: 'oklch(90% 0 0)' /* Subtle highlight */,
      swatch10: 'oklch(96% 0 0)' /* Dim highlight */,

      text1: 'var(--swatch10)' /* Brightest for high contrast */,
      text2: 'var(--swatch9)' /* Slightly muted text */,
      link: 'var(--swatch6)' /* Subtle highlight for links */,
      primary: 'var(--swatch7)',
      border: 'var(--swatch3)',
      bar: 'var(--swatch7)',
      surface1: 'var(--swatch1)' /* Darkest surface */,
      surface2: 'var(--swatch2)' /* Secondary surface */,
      surface3: 'var(--swatch3)' /* Tertiary surface */,
    },
  },

  Orange: {
    light: {
      '--hue-orange': '75', // Define the hue as a CSS custom property
      swatch1: 'oklch(99% .05 var(--hue-orange))',
      swatch2: 'oklch(90% .1 var(--hue-orange))',
      swatch3: 'oklch(80% .2 var(--hue-orange))',
      swatch4: 'oklch(72% .25 var(--hue-orange))',
      swatch5: 'oklch(67% .31 var(--hue-orange))',
      swatch6: 'oklch(50% .27 var(--hue-orange))',
      swatch7: 'oklch(35% .25 var(--hue-orange))',
      swatch8: 'oklch(25% .2 var(--hue-orange))',
      swatch9: 'oklch(13% .2 var(--hue-orange))',
      swatch10: 'oklch(5% .1 var(--hue-orange))',

      text1: 'var(--swatch10)', // Primary text color
      text2: 'var(--swatch9)', // Secondary text color
      link: 'var(--swatch3)', // Link color
      primary: 'var(--swatch7)',
      border: 'var(--swatch3)',
      bar: 'var(--swatch7)',
      surface1: 'var(--swatch1)', // Darkest surface color
      surface2: 'var(--swatch2)', // Secondary surface color
      surface3: 'var(--swatch3)', // Tertiary surface color
    },
    dark: {
      '--hue-orange': '75', // Define the hue as a CSS custom property
      swatch1: 'oklch(99% .05 var(--hue-orange))',
      swatch2: 'oklch(90% .1 var(--hue-orange))',
      swatch3: 'oklch(80% .2 var(--hue-orange))',
      swatch4: 'oklch(72% .25 var(--hue-orange))',
      swatch5: 'oklch(67% .31 var(--hue-orange))',
      swatch6: 'oklch(50% .27 var(--hue-orange))',
      swatch7: 'oklch(35% .25 var(--hue-orange))',
      swatch8: 'oklch(25% .2 var(--hue-orange))',
      swatch9: 'oklch(13% .2 var(--hue-orange))',
      swatch10: 'oklch(5% .1 var(--hue-orange))',

      text1: 'var(--swatch1)' /* Lightest for high contrast */,
      text2: 'var(--swatch2)' /* Slightly muted */,
      link: 'var(--swatch5)' /* Highlighted for links */,
      primary: 'var(--swatch7)',
      border: 'var(--swatch3)',
      bar: 'var(--swatch7)',
      surface1: 'var(--swatch10)' /* Darkest surface */,
      surface2: 'var(--swatch9)' /* Secondary surface */,
      surface3: 'var(--swatch8)' /* Tertiary surface */,
    },
  },
}

export default function setGlobalColorTheme(themeMode: 'light' | 'dark', color: ThemeColors) {
  const theme = themes[color][themeMode] as {
    [key: string]: string
  }

  for (const key in theme) {
    document.documentElement.style.setProperty(`--${key}`, theme[key])
  }
}
