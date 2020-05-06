const prefix = 'vue-'
const { getItem, setItem } = localStorage

function getToken() {
  return getItem(`${prefix}token`)
}

function setToken(token = '') {
  setItem(`${prefix}token`, token)
}

export default {
  getToken,
  setToken
}
