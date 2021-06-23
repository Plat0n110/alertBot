"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const config_1 = require("../config/config");
const config = config_1.getConfig('.casi_bot_rc');
const bot = new telegraf_1.Telegraf(config.bot_section.bot_token);
bot.start((ctx) => ctx.reply('Welcome!'));
bot.launch();
//# sourceMappingURL=bot.js.map