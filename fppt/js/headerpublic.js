Vue.component('headers', {
    data: function () {
      return {
        navlistname: [
            { name: '首页' },{ name: '关于深圳国资帮扶云' }, { name: '成果展示' }, { name: '特色平台' }, { name: '帮扶动态' }, { name: '帮扶风采' },
            //{ name: '登录/注册' },
        ],
        chengguoarr: [
            {
                name: '数读帮扶'
            }, {
                name: '帮扶地图'
            }, {
                name: '特色项目'
            }, {
                name: '产业帮扶'
            }, {
                name: '帮扶大事记'
            }
        ],
        tsptarrr: [
            {
                name: '消费扶贫中心'
            }, {
                name: '农村产权交易'
            }, {
                name: '生态碳汇交易'
            }, {
                name: '教育帮扶'
            }, {
                name: '金融帮扶'
            },
        ],
        banfuarr: [
            {
                name: '最新资讯'
            }, {
                name: '各地新闻'
            }, {
                name: '帮扶政策'
            },
        ],
        banfufcarr: [
            {
                name: '人物风采'
            }, {
                name: '帮扶手记'
            }, {
                name: '乡村文化'
            },
        ],
      }
    },
    methods:{
        chengguoclick:function(val,index){
            console.log(val,index)
            if(val.name === '最新资讯' || val.name === '各地新闻' || val.name === '帮扶政策') {
                location.href='./Whatsnew.html'
                localStorage.setItem('val',index)
            }
            if(val.name === '数读帮扶') {
                window.location = './Helpinreading.html'
            } else if(val.name === '帮扶地图') {
                window.location = './bangfumap.html'
            }else if(val.name === '特色项目') {
                window.location = './bangfuxiangmu.html'
            }else if(val.name === '产业帮扶') {
                window.location = './cangyebangfu.html'
            }else if(val.name === '帮扶大事记') {
                window.location = './Helpmemorabilia.html'
            }else if(val.name === '教育帮扶') {
                window.location = './EducationAssistance.html'
            }else if(val.name === '金融帮扶') {
                window.location = './Financialassistance.html'
            }else if(val.name === '人物风采') {
                window.location = './Characterstyle.html'
            }else if(val.name === '帮扶手记') {
                window.location = './bangfushouji.html'
            }else if(val.name === '乡村文化') {
                window.location = './xiangcunwenhua.html'
            }else if(val.name === '首页') {
                window.location = './index.html'
            }
        }
      },
    template: `<header>
    <div class="navlist">
        <div class="title">
            深圳国资国企脱贫攻坚云服务平台
        </div>
        <div class="list">
            
            <ul>
                <li v-for='(item,index) in navlistname' :key="index">
                   <span v-if='item.name == "关于深圳国资帮扶云"'>{{item.name}}</span>
                   <span v-if='item.name == "首页"' @click='chengguoclick(item,index)'>{{item.name}}</span>
                   <span v-if='item.name == "登录/注册"'>{{item.name}}</span>
                    <el-dropdown v-if='item.name !== "关于深圳国资帮扶云" &&  item.name !== "首页" && item.name !== "登录/注册"'>
                        <span class="el-dropdown-link" >
                            {{item.name}}
                        </span>
                        <el-dropdown-menu  slot="dropdown"  v-if='item.name === "成果展示"'>
                            <el-dropdown-item v-for='(item,index) in chengguoarr':key="index">
                            <li style='width:100%;padding:0 20px'  @click='chengguoclick(item,index)' >{{item.name}}</li>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                        <el-dropdown-menu slot="dropdown" v-if='item.name === "特色平台"'>
                            <el-dropdown-item v-for='(item,index) in tsptarrr' :key="index">
                            <li style='width:100%;padding:0 20px'  @click='chengguoclick(item,index)' >{{item.name}}
                            </el-dropdown-item>
                        </el-dropdown-menu>
                        <el-dropdown-menu slot="dropdown" v-if='item.name === "帮扶动态"'>
                            <el-dropdown-item v-for='(item,index) in banfuarr' :key="index">
                            <li style='width:100%;padding:0 20px'  @click='chengguoclick(item,index)' >{{item.name}}
                            </el-dropdown-item>
                        </el-dropdown-menu>
                        <el-dropdown-menu slot="dropdown" v-if='item.name === "帮扶风采"'>
                            <el-dropdown-item v-for='(item,index) in banfufcarr' :key="index">
                            <li style='width:100%;padding:0 20px'  @click='chengguoclick(item,index)' >{{item.name}}
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </li>
            </ul>
        </div>
    </div>
</header>`
  })



function headersget(classname){
    console.log(classname)
    var h = (window.screen.availHeight ) * 0.8
        classname.css({
            'height': h   
        })
}