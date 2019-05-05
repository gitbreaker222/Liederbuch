const Metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const watch = require('metalsmith-watch');

function concatHtmlToMainJs () {
  return function (files, x) {
    const fileNames = Object.keys(files)
    const MAIN_JS = 'main.js'
    const mainJs = files[MAIN_JS]
    const contentMarker = "{}//$CONTENT"
    const contentPattern = /content.*html$/
    const oldContent = mainJs.contents.toString()
    const newContent = {}
    fileNames.forEach(fileName => {
      if (contentPattern.test(fileName)) {
        const songMarkup = files[fileName].contents.toString()
        newContent[fileName] = songMarkup
      }
    })
    mainJs.contents = oldContent.replace(
      contentMarker,
      JSON.stringify(newContent)
    )
  }
}

// Build HTML / Structure
Metalsmith(__dirname)
  .source('./src')
  .destination('./build')
  .clean(true)
  .use(markdown()) //md to html
  //html to json in main.js
  .use(concatHtmlToMainJs())
  .use(
    watch({
      paths: {
        "${source}/**/*": "**/*",
      },
      livereload: true,
    })
  )
  .build(function(err, files) {
    if (err) {
      throw err;
    }
  });


// Start server
// Metalsmith(__dirname)
//   .source('./build')
//   .use(serve())
//   .build(function(err, files) {
//     if (err) {
//       throw err;
//     }
//   });
