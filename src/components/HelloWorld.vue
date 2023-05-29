<template>
  <div>
    <div id='page_content_list'>
      页面1
    </div>
  </div>
</template>

<script>
  import * as API from '@/api/home'
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    setup () {
      API.test({})
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;

}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;


}
.sr_box .sr_item:first-child
</style>
