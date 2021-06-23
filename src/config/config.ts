import rc from "rc";

export type ConfigT = {
  bot_section: {
    bot_token: string;
  };
};

export function getConfig(name: string): ConfigT {
  return {
    bot_section: {
      bot_token: "1779421656:AAH4XsnlK3t1RLamPdijLnT6moT6d8GXucI",
    },
  };

  // const config = rc(name);
  // if (!config) {
  //     throw new Error('Config by name $(name) not found!')
  // }
  // return <ConfigT>config
}
