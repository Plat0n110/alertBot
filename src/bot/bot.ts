import { Telegraf } from "telegraf";
import { getConfig } from "../config/config";
const Markup = require('telegraf');


export const init = function() {
  
  const config = getConfig(".casi_bot_rc");
  const bot = new Telegraf(config.bot_section.bot_token);
  bot.start((ctx) => ctx.reply('Welcome, dear user!', Markup.keyboard([
   ['Btn1'],
  ]).extra()
  )
  );
    bot.launch();
}
