import { Platform } from 'react-native';
import { DefaultTheme, configureFonts } from 'react-native-paper';
import { MD3Type } from 'react-native-paper/lib/typescript/types';

const baseFont = {
  fontFamily: 'Raleway-Regular',
} as const;

const fontConfig:MD3Type = {
    letterSpacing: 0.5,
    lineHeight: 22,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Raleway-Italic'
  // customVariant: {
  //   fontFamily: Platform.select({
  //     web: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
  //     ios: 'Raleway-Bold',
  //     default: 'sans-serif',
  //   }),
  //   fontWeight: '400',
  //   letterSpacing: 0.5,
  //   lineHeight: 22,
  //   fontSize: 20,
  // }
  // fontFamily: 'Raleway-Bold'
};

const baseVariants = configureFonts({ config: baseFont });

const customVariants = {
  // Customize individual base variants:
  displayMedium: {
    ...baseVariants.displayMedium,
    fontFamily: 'Raleway-Bold',
  },

  // Add own tokens if required:
  bold: {
    ...baseVariants.bodyMedium,
    fontFamily: 'Raleway-Bold',
  },
  italic: {
    ...baseVariants.bodyMedium,
    fontFamily: 'Raleway-Italic',
  },
  boldItalic: {
    ...baseVariants.bodyMedium,
    fontFamily: 'Raleway-BoldItalic',
  },
} as const;

const fontConfig1 = {
  web: {
    regular: {
      fontFamily: 'Raleway-Bold',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Raleway-BoldItalic',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Raleway-Italic',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Raleway-Regular',
      fontWeight: 'normal',
    },
    variableFont: {
      fontFamily: 'Raleway-VariableFont',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'Raleway-Bold',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Raleway-BoldItalic',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Raleway-Italic',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Raleway-Regular',
      fontWeight: 'normal',
    },
    variableFont: {
      fontFamily: 'Raleway-VariableFont',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'Raleway-Bold',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Raleway-BoldItalic',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Raleway-Italic',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Raleway-Regular',
      fontWeight: 'normal',
    },
    variableFont: {
      fontFamily: 'Raleway-VariableFont',
      fontWeight: 'normal',
    },
  },
};

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6A00C2',
    secondary: '#414757',
    error: '#f13a59',
    fonts: configureFonts({config:fontConfig}),
  },
};
