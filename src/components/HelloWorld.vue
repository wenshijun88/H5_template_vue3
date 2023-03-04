<template>
  <div>
    <div id='page_content_list'>
      <div class='content_list' style='display: none'>
        <div v-for='(item, $index) in zcList' :key="$index">
          <div class='content_item'>
            <div class='item_title'>{{item[0]}}</div>
            <div class='item_name'>
              {{item[1]}}
            </div>
            <div class='item_detail_box'>
              <div class='item_detail'>
                <span class='val'>{{item[2]}}</span>
                <span class='tip'>安排资金数</span>
              </div>
              <div class='item_detail'>
                <span class='val'>{{item[3]}}</span>
                <span class='tip'>实际支出数</span>
              </div>
              <div class='item_detail'>
                <span class='val' style='color: #333'>{{item[4]}}</span>
                <span class='tip'>主管科室</span>
              </div>
              <div class='item_detail'>
                <span class='val' :class="{'warnning': item[5]< 100, 'success': item[5]>= 100}">{{item[5]}}%</span>
                <span class='tip'>进度</span>
              </div>
            </div>
            <img class='item_arrow_down_img' :class="{'isShow': isShowMap[$index]}"
                 @click='toggleShowZcDetail(item, $index)'
                 src='vfs/root/products/ebi/sys/picture/珠海财政可视化H5/zc_item_arrow_down.png'>
          </div>
          <!--二级展开start-->
          <div class='item_detail_list'  :class="{'isShow': isShowMap[$index]}" v-if='zcDetailListMap[$index]'>
            <div class='detail_item' v-for="(detailItem, detailIndex) in zcDetailListMap[$index]" :key="detailIndex">
              <div class='item_title'>{{detailItem[0]}}</div>
              <div class='item_name'>
                {{detailItem[1]}}
              </div>
              <div class='item_detail_box'>
                <div class='item_detail'>
                  <span class='val'>{{detailItem[2]}}</span>
                  <span class='tip'>安排资金数</span>
                </div>
                <div class='item_detail'>
                  <span class='val'>{{detailItem[3]}}</span>
                  <span class='tip'>实际支出数</span>
                </div>
                <div class='item_detail'>
                  <span class='val' style='color: #333'>{{detailItem[4]}}</span>
                  <span class='tip'>主管科室</span>
                </div>
                <div class='item_detail'>
                  <span class='val' :class="{'warnning': item[5]< 100, 'success': item[5]>= 100}">{{detailItem[5]}}%</span>
                  <span class='tip'>进度</span>
                </div>
              </div>
            </div>
          </div>
          <!--二级展开end-->
        </div>
      </div>
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
