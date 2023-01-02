
const path = require('path');

module.exports = {
    mode:'development',
    entry:'./src/ts/index.js',
    output:{
        path:path.join(__dirname,'public/dist/js'),
        filename:'[name].bundle.js',
        clean:true
    }
}











