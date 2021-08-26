import { resolve } from 'path';
import { readFile, writeFile } from 'fs-extra';
import { render } from 'eta';
import { themes, transformThemeToTemplateVariables } from './themes';

const SOURCE_ROOT = resolve(__dirname);
const TARGET_DIR = resolve(__dirname, '../dist/');
const BASE_TEMPLATE_PATH = resolve(SOURCE_ROOT, 'templates/theme.template.json');

(async () => {
    console.log('Loading base template from %s', BASE_TEMPLATE_PATH);
    const templateContent = await readFile(BASE_TEMPLATE_PATH, 'utf8');

    for (const theme of themes) {
        const payload = transformThemeToTemplateVariables(theme);

        console.log(`Generating theme "${theme.name}" ...`);
        const result = render(templateContent, payload);

        console.log(`Writing compiled theme "${theme.name}" ...`);
        await writeFile(resolve(TARGET_DIR, `${theme.id}.json`), result);

        console.log(`${theme.name} ready!`);
    }
})();
