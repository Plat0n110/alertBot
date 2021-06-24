import { Telegraf, Markup } from "telegraf";
import { getConfig } from "../config/config";

// const buttons = Markup.inlineKeyboard([
//   [Markup.callbackButton("Test", "test")],
//   [Markup.callbackButton("Test 2", "test2")],
// ]);

export const init = function () {
  const config = getConfig(".casi_bot_rc");
  const bot = new Telegraf(config.bot_section.bot_token);
  bot.start((ctx) =>
    ctx.reply("Welcome, dear user!", Markup.keyboard([["Btn1"]]).resize().extra())
  );
  bot.on('text', (ctx) => ctx.reply('Reply'))
  bot.launch();
}
