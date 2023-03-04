const files = require.context('.', false, /\.js$/)
const modules = Object.assign({}, ...files.keys().filter(key => !(/index.js$|\s+copy.js$/).test(key)).map(key => ({ [key.replace(/(\.\/|\.js)/g, '')]: files(key).default })))
console.log('modules :>> ', modules)
export default modules
