<template>
    <Loading type="spinner" vertical color="#fff">{{msg}}</Loading>
</template>

<script>
  import { defineComponent, reactive, toRefs, } from 'vue'
  import { Loading } from 'vant';
  export default defineComponent({
    name: 'yy_Loading',
    components: {
      Loading,
    },
    props: {
      msg: {
        type: String,
        default: '加载中...'
      }
    },
    setup (){
      const state = reactive({
        isShowLoading: false,
      })

      return {
        ...toRefs(state),
      }
    }
  })
</script>
