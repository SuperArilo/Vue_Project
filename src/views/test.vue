<template>
    <div>
        <div class="div_nav_header_box">
          <div class="div_nav_header_left_logo_box">
              <img src="static\icon\logo.png"/>
          </div>
          <div class="div_nav_header_right_ul_box">
              <ul>
                  <li>首页</li>
                  <li @mouseover="mouseover($event)">海外助孕</li>
                  <li @mouseover="mouseover($event)">试管服务</li>
                  <li @mouseover="mouseover($event)">合作医院</li>
                  <li @mouseover="mouseover($event)">成功案例</li>
                  <li @mouseover="mouseover($event)">咨询中心</li>
                  <li @mouseover="mouseover($event)">关于诺安生</li>
              </ul>
          </div>
      </div>
      <div class="div_hidden hidden" id="div_hidden" @mouseleave="mouseleave($event)">
          <ul v-for="(item,index) in list" :key="index">
              <li>{{item.li_a}}</li>
              <li>{{item.li_b}}</li>
              <li>{{item.li_c}}</li>
          </ul>
      </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [
                {
                    li_a: '第一试管婴儿',
                    li_b: '第二试管婴儿',
                    li_c: '第三试管婴儿'
                }
            ]
        }
    },
    methods: {
        mouseover(e) {
            var div_hidden = document.getElementById('div_hidden')
            // alert(e.currentTarget.offsetLeft)
            div_hidden.classList.remove('hidden')
            div_hidden.style.left = e.currentTarget.offsetLeft - 10 + 'px'
        },
        mouseleave(e) {
            var div_hidden = document.getElementById('div_hidden')
            div_hidden.classList.add('hidden')
        }
    }
}
</script>
  <style>
      .div_nav_header_box
      {
          width: 100%;
          height: 80px;
          float: left;
          background-color: aquamarine;
      }
      .div_nav_header_left_logo_box
      {
          width: auto;
          height: 80px;
          float: left;
          text-align: center;
          background-color: blueviolet;
          margin-left: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
      }
      .div_nav_header_right_ul_box
      {
          width: 700px;
          height: 80px;
          float: right;
          background-color: burlywood;
          line-height: 80px;
          margin-right: 200px;
      }
      .div_nav_header_right_ul_box ul
      {
          width: 100%;
          height: 100%;
          list-style: none;
          float: left;
          text-align: center;
          margin: 0;
          padding: 0;
      }
      .div_nav_header_right_ul_box li
      {
          float: left;
          width: 14%;
          font-size: 15px;
          font-weight: 600;
      }
      .div_nav_header_right_ul_box li:hover
      {
          color: darkseagreen;
      }
      .div_hidden
      {
          width: auto;
          height: auto;
          text-align: center;
          background-color: burlywood;
          position: absolute;
          top: 90px;
          padding-top: 6px;
      }
      .div_hidden ul
      {
          list-style: none;
          margin: 0;
          padding: 0;
      }
      .div_hidden li
      {
          text-align: center;
          height: 40px;
          width: 120px;
          line-height: 40px;
      }
  </style>
