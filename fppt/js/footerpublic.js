Vue.component('footers', {
    data: function () {
        return {

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
            footerimgs: [
                {
                    imgs: '../images/footerimg.jpg'
                }, {
                    imgs: '../images/footerimg.jpg'
                }, {
                    imgs: '../images/footerimg.jpg'
                }, {
                    imgs: '../images/footerimg.jpg'
                }, {
                    imgs: '../images/footerimg.jpg'
                },
            ],
        }
    },
    methods: {
        chengguoclick: function (val, index) {
            console.log(val, index)
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
            }
        }
    },
    template: ` <div class="footers">
    <div class="fottop">
        <div class="foleft">
            <div class="top">
                深圳国资国企 <br /> 脱贫攻坚云服务平台
            </div>
            <div class="bottom">
                联系我们
            </div>
        </div>
        <div class="forgith">
            <ul>
                <li>
                    关于深圳国资帮扶云
                </li>
            </ul>
            <ul>
                <li>成果展示 </li>
                <li v-for='(item,index) in chengguoarr' :key="index"  @click='chengguoclick(item,index)'>
                    {{item.name}}
                </li>
            </ul>
            <ul>
                <li>特色平台 </li>
                <li v-for='(item,index) in tsptarrr' :key="index"  @click='chengguoclick(item,index)'>
                    {{item.name}}
                </li>
            </ul>
            <ul>
                <li> 帮扶动态 </li>
                <li v-for='(item,index) in banfuarr' :key="index"  @click='chengguoclick(item,index)'>
                    {{item.name}}
                </li>
            </ul>
            <ul>
                <li> 帮扶风采 </li>
                <li v-for='(item,index) in banfufcarr' :key="index"  @click='chengguoclick(item,index)'>
                    {{item.name}}
                </li>
            </ul>
        </div>
    </div>
    <div class="footerbanner">
        <div v-for='(item,index) in footerimgs' :key="index">
            <img :src="item.imgs" alt="">
        </div>
    </div>
</div>`
})