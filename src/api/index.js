import request from '@/api/request'
import URL from '@/api/url'

export const login = data => {
  return request('POST', URL.login, data)
}
