module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'import',
      {
        libraryName: 'element-ui'
      },
      'element'
    ],
    [
      'import',
      {
        libraryName: 'ant-design-vue',
        style: 'css'
      },
      'ant'
    ]
  ]
}
