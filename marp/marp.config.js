const marpHideSlidesPlugin = require('./plugins/hide-slides-plugin')

module.exports = {
  engine: ({ marp }) => marp.use(marpHideSlidesPlugin)
}