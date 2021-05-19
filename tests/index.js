const mcapi = require("../index");

mcapi.skin("ZiroCore").then(data => console.log(data));
mcapi.user("ZiroCore").then(data => console.log(data));
mcapi.server("hypixel.net").then(data => console.log(data));
mcapi.head("ZiroCore").then(data => console.log(data));
mcapi.status().then(data => console.log(data));
mcapi.namemcfriends("adf01e23-43c8-44e7-b039-a0981da5a093").then(data => console.log(data))
console.log(mcapi.ofCape("cessabit"));
// works pog

