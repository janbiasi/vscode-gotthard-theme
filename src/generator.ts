import { resolve } from 'node:path';
import { writeFile, mkdirp } from 'fs-extra';
import { Eta } from 'eta';
import { themes, transformThemeToTemplateVariables } from './themes';

const SOURCE_ROOT = resolve(__dirname);
const TEMPLATE_PATH = resolve(SOURCE_ROOT, 'templates');
const TARGET_DIR = resolve(__dirname, '../dist/');

const templateEngine = new Eta({
            views: TEMPLATE_PATH
        });

(async () => {
    await mkdirp(TARGET_DIR);

    for (const theme of themes) {
        const payload = transformThemeToTemplateVariables(theme);

        console.log(`Generating theme "${theme.name}" ...`);
        const result = templateEngine.render('./theme.template.json', payload);

        console.log(`Writing compiled theme "${theme.name}" ...`);
        await writeFile(resolve(TARGET_DIR, `${theme.id}.json`), result);

        console.log(`${theme.name} generated successfully!`);
    }
})();
