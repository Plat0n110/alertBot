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




// import { Telegraf, Markup } from "telegraf";
// import { getConfig } from "../config/config";

// // const buttons = Markup.inlineKeyboard([
// //   [Markup.callbackButton("Test", "test")],
// //   [Markup.callbackButton("Test 2", "test2")],
// // ]);

// export const init = async function () {
//   //const config = getConfig(".casi_bot_rc");
//   //const bot = new Telegraf(config.bot_section.bot_token);
//   //bot.start((ctx) =>
//   //ctx.reply("Welcome, dear user!", Markup.keyboard([["Start", "Stop"]]).resize().extra())
//   //);
//   let upper = 100;
//   let lower = -100;
//   let myRandom = Math.floor(Math.random() * (upper - lower + 1)) + lower;
//   const array = [myRandom];
//   //array.push(3, 4, 7, 6, 34, 23, 12, 1, 65, 51)
//   // //console.log(array);

//   // array.push(2);
//   // console.log(array);

//   // array.push(3);
//   // console.log(array);

//   for (let i = 0; i < 10; i++) {
//     setTimeout(() => {
//       console.log(array[i])
//     }, 1000);
  

//     // array.push(myRandom);
//     console.log(array);
//     // setTimeout(() => {}, 3000);
//     // setTimeout(() => {}, 3000);
//     // setTimeout(() => {}, 3000);
//     // const myfunction = (a: string, b?: number) => {
//     //   console.log(b);
//     // };
//     // myfunction("abba");
//     array.push(
//       (myRandom = Math.floor(Math.random() * (upper - lower + 1)) + lower)
//     );
//   }
//   // console.log(array);

//   //bot.on('text', (ctx) => ctx.reply('Result'));
//   //bot.launch();
// };
