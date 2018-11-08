module.exports = (api, options, rootOptions, opts) => {

// Import template
const importFile =`import helloWorld from \'./helloWorld\';`

// This works
// try {
//   api.injectImports('src/main.js', importFile)
// } catch (e) {
//   console.error(e)
// }

// This doesn't work
try {
  api.injectImports('src/empty.js', importFile)
} catch (e) {
  console.error(e)
}

}