export default mobile => {
  if (mobile && mobile.length === 11) {
    return mobile.substr(0, 3) + '****' + mobile.substr(7)
  } else {
    return mobile || '未设置手机号'
  }
}
