"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URL = exports.PORT = void 0;
const env = require("env-var");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.PORT = env.get('PORT').asString();
exports.URL = env.get('URL').asString();
//# sourceMappingURL=env.config.js.map