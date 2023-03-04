import { showNotify } from 'vant'

export const showTips = function (options = {}) {
  showNotify(Object.assign({ type: 'warning', message: '访问出错', position: 'center'}, options))
}
