const app = {}
app.content = {}//$CONTENT //- filled during build time

document.addEventListener("DOMContentLoaded", function(){
  const lyricNodes = document.querySelectorAll('[data-lyrics]')

  function insertContent (node) {
    const lyricName = node.dataset.lyrics
    node.innerHTML = app.content[lyricName+'.html'];
  }

  lyricNodes.forEach(insertContent) 
})