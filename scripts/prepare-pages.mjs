import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const output = fileURLToPath(new URL('../dist/pages/', import.meta.url));
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(new URL('../dist/root/', import.meta.url), output, { recursive: true });
await cp(new URL('../dist/siir/', import.meta.url), `${output}/siir`, { recursive: true });
await writeFile(`${output}/.nojekyll`, '');
console.log(`GitHub Pages output: ${output}`);
