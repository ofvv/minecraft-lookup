/*
module.exports = {
  api: require('./library/Minecraft')
}
*/
const url = `https://api.mojang.com`;
const skinurl = `https://minotar.net`;
const heads = `https://cravatar.eu`;
const servers = `https://api.mcsrvstat.us/2`;
const serverimg = `https://eu.mc-api.net/v3/server/favicon`;
const fetch = require("node-fetch");

module.exports = {

 user: async function (username) {
    if (!username) throw new TypeError(`No Username Provided!`)
    const data = await fetch(
      `${url}/users/profiles/minecraft/${username}`
    ).then((res) => res.json()).catch(e => {
      throw new Error(e)
    });
        return data;
    },

    skin: async function (username) {
      if (!username) throw new TypeError(`No Username Provided!`)
      const data = {
        view: `${skinurl}/skin/${username}`,
        download: `${skinurl}/download/${username}`
      }
      return data;
    },


    head: async function (username, size) {
      if (!username) throw new TypeError(`No Username Provided!`)
      if (!size) size = 190;

      const data = {
        helmhead: `${heads}/helmhead/${username}/${size}.png`,
        helmavatar: `${heads}/helmavatar/${username}/${size}.png`,
        headsize: size,
        headowner: username,
        gethead: {
          "1.13": `/give @p minecraft:player_head{SkullOwner:"${username}"}`,
          "1.12": `/give @p minecraft:skull 1 3 {SkullOwner:"${username}"}`
        }
      }
      return data;
    },

    server: async function (ip) {
      if (!ip) throw new TypeError(`No Server IP Was Provided!`)

      const data = await fetch(
      `${servers}/${ip}`
    ).then((res) => res.json()).catch(e => {
      throw new Error(e)
    });
  let filtered = {
  "servericon": `${serverimg}/${ip.toLowerCase()}`,
  "ip": data.ip,
  "port": data.port,
  "debug": {
    "ping": data.debug.ping,
    "query": data.debug.query,
    "srv": data.debug.srv,
    "querymismatch": data.debug.querymismatch,
    "ipinsrv": data.debug.ipinsrv,
    "cnameinsrv": data.debug.cnameinsrv,
    "animatedmotd": data.debug.animatedmotd,
    "cachetime": data.debug.cachetime,
    "apiversion": data.debug.apiversion
  },
  "motd": {
    "raw": [data.motd.raw],
    "clean": [data.motd.clean],
    "html": [data.motd.html]
  },
  "players": {
    "online": data.players.online,
    "max": data.players.max
  },
  "version": data.version,
  "online": data.online,
  "protocol": data.protocol,
  "hostname": data.hostname,
    }
      return filtered;
    }

}