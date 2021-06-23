"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = void 0;
const rc_1 = __importDefault(require("rc"));
function getConfig(name) {
    const config = rc_1.default(name);
    if (!config) {
        throw new Error('Config by name $(name) not found!');
    }
    return config;
}
exports.getConfig = getConfig;
//# sourceMappingURL=config.js.map