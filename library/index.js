/*
module.exports = {
  api: require('./library/Minecraft')
}
*/
const {
  statusurl,
  url,
  skinurl,
  heads,
  servers,
  capeurl,
  serverimg,
  namemc,
  sideviewurl,
  urlhistory
} = require(`./urls.json`);

const fetch = require("node-fetch");

module.exports = {
  status: async function() {
    try {
      const data = await fetch(
        `${statusurl}/check`
      ).then((res) => res.json()).catch(e => {});
      return data;
    } catch (e) {}
  },
  ofCape: async function(username) {
    try {
      if (!username) throw new TypeError(`No Username Provided!`)

      return `${capeurl}/${username}.png`;
    } catch (e) {}
  },
  user: async function(username) {
    try {
      if (!username) throw new TypeError(`No Username Provided!`)
      const data = await fetch(
        `${url}/users/profiles/minecraft/${username}`
      ).then((res) => res.json()).catch(e => {});
      return data;
    } catch (e) {}
  },

  skin: async function(username) {
    try {
      if (!username) throw new TypeError(`No Username Provided!`)
      const body = await fetch(
        `${url}/users/profiles/minecraft/${username}`
      ).then((res) => res.json()).catch(e => {});
      const data = {
        view: `${skinurl}/skin/${username}`,
        download: `${skinurl}/download/${username}`,
        sideview: `${sideviewurl}/renders/body/${body.id}`
      }
      return data;
    } catch (e) {}
  },


  head: async function(username, size) {
    try {
      if (!username) throw new TypeError(`No Username Provided!`)
      if (!size) size = 190;

      const data = {
        helmhead: `${heads}/helmhead/${username}/${size}.png`,
        helmavatar: `${heads}/helmavatar/${username}/${size}.png`,
        headsize: size,
        headowner: username,
        gethead: {
          "new": `/give @p minecraft:player_head{SkullOwner:"${username}"}`,
          "old": `/give @p minecraft:skull 1 3 {SkullOwner:"${username}"}`
        }
      }
      return data;
    } catch (e) {}
  },

  server: async function(ip) {
    try {
      if (!ip) throw new TypeError(`No Server IP Was Provided!`)

      const data = await fetch(
        `${servers}/${ip}`
      ).then((res) => res.json()).catch(e => {});
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
          "raw": data.motd.raw,
          "clean": data.motd.clean,
          "html": data.motd.html
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
    } catch (e) {}
  },

  namemcfriends: async function(namemcuuid) {
    try {
      if (!namemcuuid) throw new TypeError(`No UUID Provided!`);
      const namemcdata = await fetch(
        `${namemc}/profile/${namemcuuid}/friends`
      ).then((res) => res.json()).catch(e => {});
      return namemcdata;
    } catch (e) {}

  },

  nameHistory: async function(type, content) {
    try {
      if (!type) throw new TypeError(`No Type Provided (Types: username/uuid)`)
      if (!content) throw new TypeError(`No Content Provided!`);
      if (type === 'uuid') {
        const data = await fetch(
          `${urlhistory}/${content}/names`
        ).then((res) => res.json()).catch(e => {
          throw new TypeError(e)
        });
        return data;
      } else if (type === 'username') {
        const body = await fetch(
          `${url}/users/profiles/minecraft/${content}`
        ).then((res) => res.json()).catch(e => {});
        const data = await fetch(
          `${urlhistory}/${body.id}/names`
        ).then((res) => res.json()).catch(e => {
          throw new TypeError(e)
        });
        return data;
      } else throw new TypeError(`Not a Valid Type!`)
    } catch (e) {}
  }

}
