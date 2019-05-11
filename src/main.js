const app = {}
app.content = {}//$CONTENT //- filled during build time

document.addEventListener("DOMContentLoaded", function(){
  const lyricNodes = document.querySelectorAll('[data-lyrics]')
  const sanitize = function (lyricName) {
    let sanitizedName = lyricName || ''
    sanitizedName = sanitizedName.replace('.md', '')
    return sanitizedName
  }

  function insertContent (node) {
    const lyricName = sanitize(node.dataset.lyrics)
    node.innerHTML = app.content[lyricName+'.html'];
  }

  lyricNodes.forEach(insertContent)
})
