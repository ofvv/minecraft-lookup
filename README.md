# Minecraft-Lookup
# 
### Example:

```js
const mcapi = require("minecraft-lookup");

mcapi.skin("").then(data => console.log(data));
mcapi.user("").then(data => console.log(data));
mcapi.server("hypixel.net").then(data => console.log(data));
mcapi.head("").then(data => console.log(data));
mcapi.namemcfriends("adf01e23-43c8-44e7-b039-a0981da5a093").then(data => console.log(data))
mcapi.nameHistory("username", "").then(data => console.log(data))
mcapi.status().then(data => console.log(data));
mcapi.ofCape("Notch").then(data => console.log(data));
// You Can Also Do const data = await mcapi.skin(username) etc...

//mcapi.ofCape() Output: "http://s.optifine.net/capes/cessabit.png"

//mcapi.status() Output:
/*
[
  {"minecraft.net":"green"},
  {"session.minecraft.net":"green"},
  {"account.mojang.com":"green"},
  {"authserver.mojang.com":"green"},
  {"sessionserver.mojang.com":"red"},
  {"api.mojang.com":"green"},
  {"textures.minecraft.net":"green"},
  {"mojang.com":"green"}]
*/

// mcapi.skin() Output: { view: 'link' download: 'link' }

// mcapi.user() Output: { name: '' id: 'adf01e2343c844e7b039a0981da5a093' }

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
  motd: { raw: [Array], clean: [Array], html: [Array] },
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
  headowner: '',
  gethead: {
    '1.13': '/give @p minecraft:player_head{SkullOwner:"ZiroCore"}',
    '1.12': '/give @p minecraft:skull 1 3 {SkullOwner:"ZiroCore"}'
  }
}
*/
/*
mcapi.nameHistory("type", "content") Output:
[
  { name: 'DeltaNinja' },
  { name: 'Dream', changedToAt: 1423044676000 }
]
*/
```
#
