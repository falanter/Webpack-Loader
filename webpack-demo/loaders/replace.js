const {getOptions}=require('loader-utils')
module.exports = function(source) {
    const options = getOptions(this)
    return source.replace(/123/, 456)
   }