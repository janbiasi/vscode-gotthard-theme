export interface TemplateVariables {
    name: string;
    id: string;
    type: string;
    primary: {
        magentaDark: string;
        magentaLight: string;
        red: string;
        yellow: string;
        brown: string;
        blue: string;
        green: string;
        grayDark: string;
    };
    grayscale: {
        backgroundLayer1: string;
        backgroundLayer2: string;
        backgroundLayerFocus: string;
        layerBorder: string;
        foreground: string;
        primaryContrast: string;
    };
}
