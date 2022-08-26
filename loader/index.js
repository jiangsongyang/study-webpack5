module.exports = function (content, sourceMaps, b) {
  content += `\n console.log('mixin')\n`
  this.callback(null, content, sourceMaps)
  return content
}
