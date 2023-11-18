import { d as defineEventHandler } from '../index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const index = defineEventHandler(() => "<h1>nitro is amazing!</h1>");

export { index as default };
//# sourceMappingURL=index.mjs.map
