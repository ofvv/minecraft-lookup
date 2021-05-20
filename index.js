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
  namemc
} = require('./urls.json');

const fetch = require("node-fetch");

module.exports = {
    status: async function() {
        const data = await fetch(
            statusurl
        ).then((res) => res.json()).catch(e => {});
        return data;
    },
    ofCape: async function(username) {
      if (!username) throw new TypeError(`No Username Provided!`)

        return `${capeurl}${username}.png`;
    },
    user: async function(username) {
        if (!username) throw new TypeError(`No Username Provided!`)
        const data = await fetch(
            `${url}/users/profiles/minecraft/${username}`
        ).then((res) => res.json()).catch(e => {});
        return data;
    },

    skin: async function(username) {
        if (!username) throw new TypeError(`No Username Provided!`)
        const data = {
            view: `${skinurl}/skin/${username}`,
            download: `${skinurl}/download/${username}`
        }
        return data;
    },


    head: async function(username, size) {
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
    },

    server: async function(ip) {
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
    },

  namemcfriends: async function (namemcuuid) {
      if (!namemcuuid) throw new TypeError(`No UUID Provided!`);
      const namemcdata = await fetch(
      `${namemc}/profile/${namemcuuid}/friends`
    ).then((res) => res.json()).catch(e => {});
    return namemcdata;

    }

}
