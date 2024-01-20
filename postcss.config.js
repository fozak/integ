const fluidvars = require("postcss-fluidvars");
//*** notes***//
module.exports = {
    plugins: [
        fluidvars({namespace: 's'})
    ]
};
