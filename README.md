# Minecraft-Lookup

### Example:
```js
const mcapi = require("minecraft-lookup");

mcapi.skin(username).then(data => console.log(data));
mcapi.user(username).then(data => console.log(data));
mcapi.server(ip).then(data => console.log(data));
mcapi.head(username).then(data => console.log(data));
// You Can Also Do const data = await mcapi.skin(username) etc...

// mcapi.skin() Output: { view: 'link' download: 'link' }

// mcapi.user() Output: { name: 'ZiroCore' id: 'adf01e2343c844e7b039a0981da5a093' }

/* mcapi.server() Output:
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
mcapi.head() Output: 
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

```
[Support Server](https://www.zirobot.xyz/support)
