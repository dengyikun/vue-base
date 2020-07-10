import Vue from 'vue'

const filterFiles = require.context('@/filters', true, /\.js$/)

filterFiles.keys().map(path => {
  const name = path.replace(/^\.\/(.*)\.\w+$/, '$1')
  const filter = filterFiles(path)
  if (!['index'].includes(name)) {
    Vue.filter(name, filter.default)
  }
})
