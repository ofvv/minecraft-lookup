const minecraft = require("../index");
const mcapi = new minecraft()

async function getSkin(user) {
const data = await mcapi.skin(user)
console.log(data)
}

async function getUser(user) {
const data = await mcapi.user(user)
console.log(data)
}

async function getServer(ip) {
const data = await mcapi.server(ip)
console.log(data)
}

async function getHead(user, size) {
const data = await mcapi.head(user, size)
console.log(data)
}

getSkin("ZiroCore")
getUser("ZiroCore")
getServer("hypixel.net")
getHead("ZiroCore", 250)

// getSkin() Output: { view: 'link' download: 'link' }

// getUser() Output: { name: 'ZiroCore' id: 'adf01e2343c844e7b039a0981da5a093' }

/* getServer() Output:
{
  servericon: 'link',
  ip: '172.65.230.166',
  port: 25565,
  debug: {
    ping: true,
    query: false,
    srv: false,
    querymismatch: false,
    ipinsrv: false,
    cnameinsrv: false,
    animatedmotd: false,
    cachetime: 1621441926,
    apiversion: 2
  },
  motd: { raw: [ [Array] ], clean: [ [Array] ], html: [ [Array] ] },
  players: { online: 128553, max: 200000 },
  version: 'Requires MC 1.8 / 1.16',
  online: true,
  protocol: 47,
  hostname: 'mc.hypixel.net'
}
*/

/*
getHead() Output: 
{
  helmhead: 'https://cravatar.eu/helmhead/ZiroCore/250.png',
  helmavatar: 'https://cravatar.eu/helmavatar/ZiroCore/250.png',
  headsize: 250,
  headowner: 'ZiroCore',
  gethead: {
    '1.13': '/give @p minecraft:player_head{SkullOwner:"ZiroCore"}',
    '1.12': '/give @p minecraft:skull 1 3 {SkullOwner:"ZiroCore"}'
  }
}
*/