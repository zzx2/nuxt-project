import request from '~/utils/request'
export function getUserInfo (data) {
  return request({
    url: '/users/userinfo',
    method: 'get',
    data
  })
}
