Vue.component('headers', {
    props:{
        showid:Boolean,
        ishow: Boolean,
        ishows: Boolean
    },
    data: function () {
      return {
      }
    },
    methods:{
        gobanck(){
            this.$emit('getchilis', 1)
            console.log('当前页面操作是否显示')
        },
        gobanck1(){
            window.history.go(-1)
            console.log('返回上一页使用')
        }
    },
   
    mounted() {
        //console.log(this.ishow,this.showid)
    },
    beforeUpdate() {
        //console.log(this.ishow,this.showid)
    },
      template:`<header>
                    <img src="../images/back.png" alt="" @click='gobanck()' v-if='this.showid || this.ishow'>
                    <img src="../images/back.png" alt="" @click='gobanck1()' v-if='!this.showid && !this.ishow'>
                    <p><slot></slot></p>
                    <i v-if='this.showid || this.ishows' class="el-icon-search"></i>
                    <i v-if='this.ishow' class="iconfont icon-fenxiang" style='float: right;margin:0 10px;font-size:25px'></i>
                    <i v-if='this.ishow' class="iconfont icon-xin" style='float: right;font-size:22px'></i>
                </header>`
    })