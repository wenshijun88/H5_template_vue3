import request from '@/utils/request'

export const test = function (data, showLoading=true) {
  return request({
    url: '/app-api/member/auth/test',
    data: data,
    header: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    showLoading
  })
}
