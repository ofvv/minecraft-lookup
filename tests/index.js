const mcapi = require(`${process.cwd()}/library/index.js`);

mcapi.skin("ZiroCore").then(data => console.log(data));
mcapi.user("ZiroCore").then(data => console.log(data));
mcapi.server("hypixel.net").then(data => console.log(data));
mcapi.head("ZiroCore").then(data => console.log(data));
mcapi.namemcfriends("adf01e23-43c8-44e7-b039-a0981da5a093").then(data => console.log(data))
mcapi.nameHistory("username", "ZiroCore").then(data => console.log(data))
mcapi.status().then(data => console.log(data));
mcapi.ofCape("Notch").then(data => console.log(data));
// works pog
