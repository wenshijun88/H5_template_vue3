import { createVNode, render } from "vue"
import Loading from './index.vue'

let mountNode = null
export function $showLoading(options){
  //确保只存在一个弹框，如果前一个弹窗还在，就移除
  if (mountNode) {
    document.body.removeChild(mountNode);
    mountNode = null;
  }
  //将options参数传入，并将Notice组件转换成虚拟DOM，并赋值给app
  const app = createVNode(Loading, {
    ...options,
  });
  //创建一个空的div
  mountNode = document.createElement("div");
  mountNode.className = 'container_loading'
  //render函数的作用就是将Notice组件的虚拟DOM转换成真实DOM并插入到mountNode元素里
  render(app, mountNode);
  //然后把转换成真实DOM的Notice组件插入到body里
  document.body.appendChild(mountNode);
}

// 销毁loading组件
export function $hiddenLoading() {
  mountNode && document.body.removeChild(mountNode);
}

