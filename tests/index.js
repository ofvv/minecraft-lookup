const mcapi = require("minecraft-lookup");

mcapi.api.skin("ZiroCore").then(data => console.log(data));
mcapi.api.user("ZiroCore").then(data => console.log(data));
mcapi.api.server("hypixel.net").then(data => console.log(data));
mcapi.api.head("ZiroCore").then(data => console.log(data));

// works pog
