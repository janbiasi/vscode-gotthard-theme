import { GrayscaleDark } from './colors/grayscale-dark';
import { GrayscaleDarkMedium } from './colors/grayscale-dark-medium';
import { GrayscaleLight } from './colors/grayscale-light';
import { PrimaryDark } from './colors/primary-dark';
import { PrimaryLight } from './colors/primary-light';
import { TemplateVariables } from './types';

export interface Theme {
    id: string;
    name: string;
    type: string;
    grayscale: any;
    primary: any;
}

export const themes = [
    {
        id: 'gotthard',
        name: 'Gotthard',
        type: 'dark',
        grayscale: GrayscaleDark,
        primary: PrimaryDark,
    },
    {
        id: 'gotthard-medium-dark',
        type: 'dark',
        name: 'Gotthard - Medium Dark',
        grayscale: GrayscaleDarkMedium,
        primary: PrimaryDark,
    },
    {
        id: 'gotthard-light',
        type: 'light',
        name: 'Gotthard - Light',
        grayscale: GrayscaleLight,
        primary: PrimaryLight,
    },
];

export const transformThemeToTemplateVariables = (theme: Theme): TemplateVariables => ({
    name: theme.name,
    id: theme.id,
    type: theme.type,
    grayscale: {
        backgroundLayer1: theme.grayscale.BACKGROUND_LAYER_1,
        backgroundLayer2: theme.grayscale.BACKGROUND_LAYER_2,
        backgroundLayerFocus: theme.grayscale.BACKGROUND_LAYER_FOCUS,
        layerBorder: theme.grayscale.LAYER_BORDER,
        foreground: theme.grayscale.FOREGROUND,
        primaryContrast: theme.grayscale.PRIMARY_CONTRAST,
    },
    primary: {
        magentaDark: theme.primary.MAGENTA_DARK,
        magentaLight: theme.primary.MAGENTA_LIGHT,
        red: theme.primary.RED,
        yellow: theme.primary.YELLOW,
        brown: theme.primary.BROWN,
        blue: theme.primary.BLUE,
        green: theme.primary.GREEN,
        grayDark: theme.primary.GRAY_DARK,
    },
});
