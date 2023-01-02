
const path = require('path');

module.exports = {
    mode:'development',
    entry:{
        login:'./src/ts/pages/login.js',
        index:'./src/ts/pages/index.js',
        'workshops-list':'./src/ts/pages/workshops-list.js',
        'add-workshop':'./src/ts/pages/add-workshop.js'

    },
    output:{
        path:path.join(__dirname,'public/dist/js'),
        filename:'[name].bundle.js',
        clean:true
    }
}











