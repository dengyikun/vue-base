import fetch from 'node-fetch'
import { message } from 'ant-design-vue'
import auth from '@/utils/auth'

const toSearch = object => {
  let param = ''
  for (let key in object) {
    if (object[key]) {
      param += '&' + key + '=' + encodeURIComponent(object[key])
    }
  }
  return param
}

export default (method, url, body, options = {}) =>
  new Promise((resolve, reject) => {
    const headers = {
      Accept: 'application/json',
      ...options.headers
    }

    const token = auth.getToken()
    if (token) {
      headers['Authorization'] = 'session ' + token
    }

    switch (method.toUpperCase()) {
      case 'GET':
      case 'DELETE':
        if (body) {
          url += `${url.includes('?') ? '' : '?'}${toSearch(body)}`
          body = undefined
        }
        break
      case 'POST':
      case 'PATCH':
      case 'PUT':
        if (body && !(body instanceof FormData)) {
          body = JSON.stringify(body)
          headers['Content-Type'] = 'application/json'
        }
        break
    }

    options.method = method.toUpperCase()
    options.body = body
    options.headers = headers

    fetch(url, options).then(response => {
      if (headers['Accept'] !== 'application/json') {
        resolve(response)
      } else {
        switch (response.status) {
          case 200:
          case 201:
            response.json().then(data => {
              resolve(data)
            })
            break
          case 100:
          case 101:
          case 102:
          case 202:
          case 203:
          case 204:
          case 205:
          case 206:
          case 207:
            resolve()
            break
          case 401: {
            auth.setToken()
            const { origin, pathname } = window.location
            window.location.href = origin + pathname
            break
          }
          default:
            response
              .json()
              .then(data => {
                reject(data)
                window.console.error(
                  `请求错误 ${response.status}：${data || '未知错误'}`
                )
                typeof data === 'string' && message.error(data)
              })
              .catch(() => {
                reject('未知错误')
                window.console.error(
                  `请求错误 ${response.status}：${'未知错误'}`
                )
                message.error('未知错误')
              })
            break
        }
      }
    })
  })
