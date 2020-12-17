<template>
<div>
    <div class="container-fluid" style="margin: 0;padding: 0;">
        <div class="div_top_fixed_box" id="div_top_fixed_box_No_Login">
            <div class="div_top_fixed_right_box">
                <div class="div_top_fixed_right_remind">
                    <span>游客你好，欢迎来到良品专卖店！</span>
                </div>
                <div class="div_top_fixed_right_login_and_sign_box">
                    <div class="div_top_fixed_right_login_box">
                        <span @click="OpenLogin()">[登录]</span>
                    </div>
                    <div class="div_top_fixed_right_sign_box">
                        <span @click="OpenSign()">[新用户注册]</span>
                    </div>
                </div>
                <div class="div_top_fixed_right_shop_car_box">
                    <div class="div_top_fixed_right_shop_car_font_box">
                        <span>购物车</span>
                    </div>
                    <div class="div_top_fixed_right_shop_car_right_num_box">
                        <div class="div_top_fixed_right_shop_car_right_num_sq">
                            <span>{{this.$store.state.top_shop_car}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="div_top_fixed_box" id="div_top_fixed_box_Logined">
            <div class="div_top_fixed_right_box">
                <div class="div_top_fixed_right_remind">
                    <span><span style="color: darkseagreen;">{{this.Logined_User_Name.username}} </span> 你好，欢迎来到良品专卖店！</span>
                </div>
                <div class="div_top_fixed_right_shop_car_box">
                    <span class="div_top_fixed_box_span_xiegang">/</span>
                    <div class="div_top_fixed_right_shop_car_font_box">
                        <span @click="Opne_Shop_Car()">购物车</span>
                    </div>
                    <div class="div_top_fixed_right_shop_car_right_num_box">
                        <div class="div_top_fixed_right_shop_car_right_num_sq">
                            <span>{{this.$store.state.top_shop_car}}</span>
                        </div>
                    </div>
                    <span class="div_top_fixed_box_span_xiegang">/</span>
                </div>
                <div class="logined_user_function">
                    <table style="width:100%">
                        <tr>
                            <td class="logined_user_function_td_font" @click="Index_My_Order()">我的订单</td>
                            <td class="logined_user_function_td_xiegang">/</td>
                            <td class="logined_user_function_td_font">个人中心</td>
                            <td class="logined_user_function_td_xiegang">/</td>
                            <td class="logined_user_function_td_font" @click="Login_Out()">退出登录</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <nav class="navbar navbar-default div_content_navigation_bar_style">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">良品服装专卖店</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li @click="Link_to_Index()"><a href="#">网站首页<span class="sr-only">(current)</span></a></li>
                    <li><a href="#">新到商品</a></li>
                    <li><a href="#">热销商品</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" @click="Link_to_Index_Commodity_Classification()">商品分类<span class="caret"></span></a>
                        <!-- <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">One more separated link</a></li>
                        </ul> -->
                    </li>
                </ul>
                <form class="navbar-form navbar-left">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="">
                    </div>
                    <button type="submit" class="btn btn-default">店内搜索</button>
                </form>
                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">排序<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">按价格从低到高</a></li>
                            <li><a href="#">按价格从高到底</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">按销量从高到底</a></li>
                            <li><a href="#">按销量从底到高</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
        <router-view/>
    </div>
    <div id = "Login_div_disappear"></div>
    <div id = "Login_div_appear">
        <div class="div_top_d1_style">
            <span>用户登录</span>
            <div class="div_top_d1_close" @click="cancel()">
                <span class="glyphicon glyphicon-remove"></span>
            </div>
        </div>
        <div class="div_Tips_p_style">
            <p>Please Sign in</p>
        </div>
        <div class="div_top_input_div">
            <div class="div_top_input_user_input_div">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Email address" aria-describedby="basic-addon2" v-model="Login_User_Email">
                </div>
            </div>
            <div class="div_top_input_user_input_div">
                <div class="input-group">
                    <input type="password" class="form-control" placeholder="Password" aria-describedby="basic-addon2" v-model="Login_User_Pwd">
                </div>
            </div>
        </div>
        <div class="div_top_buttom_div">
            <div class="div_top_buttom_login_button">
                <button type="button" @click="confirm()">登录</button>
            </div>
            <div class="div_top_buttom_close_button">
                <button type="button" @click="cancel()">关闭窗口</button>
            </div>
        </div>
    </div>
    <div id = "Login_div_disappear"></div>
    <div id = "Sign_div_appear">
        <div class="div_top_d1_style">
            <span>新用户注册</span>
            <div class="div_top_d1_close" @click="cancel()">
                <span class="glyphicon glyphicon-remove"></span>
            </div>
        </div>
        <div class="Sign_div_appear_input_div">
            <div class="Sign_div_appear_input_div_font_style">
                <p>用户名</p>
            </div>
            <div style="width: 100%;height: 50%;float: left;">
                <input type="text" class="form-control" placeholder="用户名" aria-describedby="basic-addon2" v-model="Sign_User_Name">
            </div>
        </div>
        <div class="Sign_div_appear_input_div">
            <div class="Sign_div_appear_input_div_font_style">
                <p>密码</p>
            </div>
            <div style="width: 100%;height: 50%;float: left;">
                <input type="password" class="form-control" placeholder="" aria-describedby="basic-addon2" v-model="Sign_User_Pwd">
            </div>
        </div>
        <div class="Sign_div_appear_input_div">
            <div class="Sign_div_appear_input_div_font_style" >
                <p>密码确认</p>
            </div>
            <div style="width: 100%;height: 50%;float: left;">
                <input type="password" class="form-control" placeholder="" aria-describedby="basic-addon2">
            </div>
        </div>
        <div class="Sign_div_appear_input_div">
            <div class="Sign_div_appear_input_div_font_style">
                <p>性别</p>
            </div>
            <div style="width: 100%;height: 50%;float: left;">
                <div class="Sign_div_appear_input_sex"  v-for="(item,index) in list" :key="item.id" :value="item.value">
                   <span v-if="item.value == '男'">男</span><span v-if="item.value == '女'">女</span> <input type="radio" name="test" :checked="item.isCheck" @change="changeInput(index)">
                </div>
            </div>
        </div>
        <div class="Sign_div_appear_input_div">
            <div class="Sign_div_appear_input_div_font_style">
                <p>邮箱</p>
            </div>
            <div style="width: 100%;height: 50%;float: left;">
                <input type="text" class="form-control" placeholder="" aria-describedby="basic-addon2" v-model="Sign_User_EMail">
            </div>
        </div>
        <div class="Sign_div_appear_input_div" style="border-top: solid 1px darkgrey;">
            <div class="Sign_div_button_box">
                <div class="Sign_div_button_sgin">
                    <button type="button" @click="Signconfirm()">注册</button>
                </div>
                <div class="Sign_div_button_close">
                    <button type="button" @click="cancel()">关闭窗口</button>
                </div>
            </div>
        </div>
    </div>
    <div id = "Shop_Car_div_disappear"></div>
    <div id = "Shop_Car_div_appear">
        <div class="Shop_Car_div_top">
            <span>我的购物车</span>
            <div class="Shop_Car_div_top_right_Exit" @click="Close_Shop_Car()">
                <span class="glyphicon glyphicon-remove"></span>
            </div>
        </div>
        <div class="Shop_Car_div_Content">
            <div class="Shop_Car_div_Content_Shop_information_box">
                <table style="width: 100%;height: 100%;">
                    <tr style="width: 100%;height: 100%;">
                        <td style="width: 10%;text-align: center;">#</td>
                        <td style="width: 20%;">商品图片</td>
                        <td style="width: 25%;">商品名称</td>
                        <td style="width: 10%;">商品单价</td>
                        <td style="width: 10%;">数量</td>
                        <td style="width: 10%;">小计</td>
                        <td style="width: 10%;">操作</td>
                    </tr>
                </table>
            </div>
            <div class="Shop_Car_div_Content_commodity">
                <div v-for="(item,index) in User_Shop_Car_Save" :key="index">
                    <div class="div_shop_car_user_sel_box">
                        <div class="div_shop_car_user_sel_number">
                            <span>{{index + 1}}</span>
                        </div>
                        <div class="div_shop_car_user_sel_picture">
                            <img :src="item.clothespictureaf">
                        </div>
                        <div class="div_shop_car_user_sel_name">
                            <span>{{item.clothesname}}</span>
                        </div>
                        <div class="div_shop_car_user_sel_Price">
                            <div style="width: 100%;height: 50px;line-height: 50px;">
                                <span>原价￥ {{item.clothespricebefore}}</span>
                            </div>
                            <div style="width: 100%;height: 50px;line-height: 50px;">
                                <span>现售￥ {{item.clothespriceafter}}</span>
                            </div>
                        </div>
                        <div class="div_shop_car_user_sel_input_sum">
                            <input type="text" class="form-control" placeholder="" :value="item.carclothesnum" @blur.prevent="test_input(item.idclothe, $event)">
                        </div>
                        <div class="div_shop_car_user_sel_all_sum">
                            <span>￥ {{item.clothespriceafter * item.carclothesnum}}</span>
                        </div>
                        <div class="div_shop_car_user_sel_control" @click="test_del(item.clothesname)">
                            <a>删除</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Shop_Car_div_Content_commodity_sum">
                <div class="Shop_Car_div_Content_commodity_sum_clear_shop_car_box">
                    <span class="Shop_Car_div_Content_commodity_sum_clear_shop_car_box_hover" @click="Clear_All()">清空购物车</span>
                </div>
                <div class="Shop_Car_div_Content_commodity_sum_right_box">
                    <span>已选 {{this.$store.state.top_shop_car}} 件商品合计(不含运费）等￥ {{this.$store.state.shop_char_sum_price}}</span>
                </div>
            </div>
        </div>
        <div class="Shop_Car_div_Bottom">
            <button type="button" @click="Close_Shop_Car()">关闭窗口</button>
            <button type="button" @click="Index_My_Order()">去结算</button>
        </div>
    </div>
</div>
</template>
<script>
import Axios from 'axios'
export default {
    name: 'Sign_Data',
    data() {
        return {
            Logined_User_Name: '',
            User_Shop_Car_Save: [
            ],
            list: [
                {
                    value: '男',
                    isCheck: false
                },
                {
                    value: '女',
                    isCheck: false
                }
            ],
            Sign_User_Name: '',
            Sign_User_Pwd: '',
            Sign_User_EMail: '',
            Login_User_Email: '',
            Login_User_Pwd: ''
        }
    },
    methods: {
        img_over(e) {
            e.currentTarget.classList.add('animated')
            e.currentTarget.classList.add('animate__heartBeat')
        },
        img_leave(e) {
            e.currentTarget.classList.remove('animated')
            e.currentTarget.classList.remove('animate__heartBeat')
        },
        OpenLogin() {
            let Login_div_appear = document.getElementById('Login_div_appear')
            Login_div_appear.style.display = 'block'
            let Login_div_disappear = document.getElementById('Login_div_disappear')
            Login_div_disappear.style.display = 'block'
        },
        OpenSign() {
            let Sign_div_appear = document.getElementById('Sign_div_appear')
            Sign_div_appear.style.display = 'block'
            let Login_div_disappear = document.getElementById('Login_div_disappear')
            Login_div_disappear.style.display = 'block'
        },
        cancel() {
            let Login_div_disappear = document.getElementById('Login_div_disappear')
            Login_div_disappear.style.display = 'none'
            let Login_div_appear = document.getElementById('Login_div_appear')
            Login_div_appear.style.display = 'none'
            let Sign_div_appear = document.getElementById('Sign_div_appear')
            Sign_div_appear.style.display = 'none'
        },
        confirm() {
            const _this = this
            if (this.Login_User_Name === '' || this.Login_User_Pwd === '') {
                alert('需要输入的信息有空白或者没有填写')
                } else {
                Axios.post('http://localhost:8181/User_Data/login/', {
                useremail: this.Login_User_Email,
                userpwd: this.Login_User_Pwd
                }).then(function(resq) {
                    if (resq.data === 'error') {
                        alert('登陆失败，用户名或者密码错误！')
                    } else {
                        _this.Logined_User_Name = resq.data.username
                        alert('登录成功')
                        location.reload()
                        // }
                    }
                })
            }
        },
        Signconfirm() {
            var sex_value
            const _this = this
            this.list.map((v, i) => {
                if (v.isCheck) {
                    sex_value = v.value
                }
            })
            if (this.Sign_User_Name === '' || this.Sign_User_Pwd === '' || this.sex_value === '' || this.Sign_User_EMail === '') {
                alert('需要输入的信息有空白或者没有填写')
                } else {
                Axios.post('http://localhost:8181/User_Data/save/', {
                username: this.Sign_User_Name,
                userpwd: this.Sign_User_Pwd,
                usersex: sex_value,
                useremail: this.Sign_User_EMail
                }).then(function(resq) {
                    _this.Logined_User_Name = resq.data.username
                    alert('恭喜你注册成功')
                    location.reload()
                })
            }
        },
        changeInput(index) {
            this.list.map((v, i) => {
                if (i === index) {
                    v.isCheck = true
                } else {
                    v.isCheck = false
                }
            })
        },
        Link_to_Index() {
            this.$router.push({path: '/Index_Content'})
        },
        Link_to_Index_Commodity_Classification() {
            this.$router.push({path: '/Index_Commodity_Classification'})
        },
        Login_Out() {
            var res = confirm('您确定要退出登录吗？')
            if (res === true) {
                this.$cookies.remove('User_Name')
                Axios.get('Http://localhost:8181/User_Data/out').then(function(resq) {
                })
                alert('退出成功')
                location.reload()
            } else {
            }
        },
        Opne_Shop_Car() {
            const _this = this
            let Shop_Car_div_disappear = document.getElementById('Shop_Car_div_disappear')
            Shop_Car_div_disappear.style.display = 'block'
            let Shop_Car_div_appear = document.getElementById('Shop_Car_div_appear')
            Shop_Car_div_appear.style.display = 'block'
            Axios.get('http://localhost:8181/Show/find/').then(function (resq) {
                _this.User_Shop_Car_Save = resq.data
                let c = 0
                if (_this.User_Shop_Car_Save.length !== 0) {
                    for (let i = 0; i <= _this.User_Shop_Car_Save.length - 1; i++) {
                        c += _this.User_Shop_Car_Save[i].clothespriceafter * _this.User_Shop_Car_Save[i].carclothesnum
                    }
                    _this.$store.commit('shop_char_sum_price', c)
                } else {
                    _this.$store.commit('shop_char_sum_price', c)
                }
            })
        },
        Close_Shop_Car() {
            let Shop_Car_div_disappear = document.getElementById('Shop_Car_div_disappear')
            Shop_Car_div_disappear.style.display = 'none'
            let Shop_Car_div_appear = document.getElementById('Shop_Car_div_appear')
            Shop_Car_div_appear.style.display = 'none'
        },
        test_del(index) {
            const _this = this
            Axios.post('http://localhost:8181/del/car/', {carclothesname: index}).then(function(resq) {
                if (resq.data === index) {
                    alert('删除成功！')
                    _this.$store.commit('top_shop_car', _this.$store.state.top_shop_car - 1)
                    _this.Close_Shop_Car()
                    _this.Opne_Shop_Car()
                } else {
                    alert('删除失败！')
                }
            })
            Axios.post('http://localhost:8181/del/num/', {carclothesnum: null, clothesname: index}).then(function(resq) {
            })
        },
        test_input(index, event) {
            const _this = this
            if (event.target.value === '') {
                alert('数量不能为空！')
            } else {
                Axios.post('http://localhost:8181/Change/num', {idclothe: index, carclothesnum: event.target.value}).then(function(resq) {
                    _this.Close_Shop_Car()
                    _this.Opne_Shop_Car()
                })
            }
        },
        Clear_All() {
            const _this = this
            if (this.$store.state.top_shop_car === 0) {
                alert('购物车为空！')
            } else {
                Axios.get('http://localhost:8181/del/all').then(function(resq) {
                    alert(resq.data)
                    _this.$store.commit('top_shop_car', 0)
                    _this.Close_Shop_Car()
                    _this.Opne_Shop_Car()
                })
            }
        },
        Index_My_Order() {
            this.$router.push({path: '/Index_My_Order'})
            this.Close_Shop_Car()
        }
    },
    created() {
        const _this = this
        Axios.get('http://localhost:8181/Shop_Car/all/').then(function(resq) {
            _this.$store.commit('top_shop_car', resq.data)
        })
    },
    mounted() {
        var div_top_fixed_box_Logined = document.getElementById('div_top_fixed_box_Logined')
        var div_top_fixed_box_No_Login = document.getElementById('div_top_fixed_box_No_Login')
        const _this = this
        Axios.get('http://localhost:8181/User_Data/Check_User').then(function(resq) {
            if (resq.data === '你还未登录') {
                div_top_fixed_box_Logined.classList.add('hidden')
                div_top_fixed_box_No_Login.classList.remove('hidden')
                _this.$store.commit('top_shop_car', 0)
            } else {
                    _this.Logined_User_Name = resq.data
                    div_top_fixed_box_No_Login.classList.add('hidden')
                    div_top_fixed_box_Logined.classList.remove('hidden')
            }
        })
    }
}
</script>
<style>
        .router-link-active
        {
            text-decoration: none;
        }
        .input-group
        {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
        }
        .form-control
        {
            width: 100%;
            height: 100%;
        }
        .div_top_fixed_box
        {
            width: 100%;
            background-color: white;
            height: 40px;
            float: left;
            position: fixed;
            box-shadow: 0 0 1vh #c0c0c0;
            z-index: 1;
            line-height: 40px;
        }

        .div_top_fixed_right_remind
        {
            width: 54%;
            height: 40px;
            float: left;
            line-height: 40px;
            text-align: right;
        }
        .div_top_fixed_right_remind span
        {
            font-size: 0.5vw;
        }
        .div_top_fixed_right_login_and_sign_box
        {
            width: 30%;
            height: 40px;
            float:left;
            line-height: 40px;
        }
        .div_top_fixed_right_login_and_sign_box a
        {
            font-size: 0.5vw;
            color: black;
        }
        .div_top_fixed_right_login_box
        {
            width: 35%;
            height: 40px;
            float: left;
            text-align: right;
        }
        .div_top_fixed_right_sign_box
        {
            width: 65%;
            height: 40px;
            float: left;
        }
        .div_top_fixed_right_shop_car_box
        {
            width: 16%;
            height: 40px;
            float: left;
        }
        .div_top_fixed_right_shop_car_font_box
        {
            width: 60%;
            height: 40px;
            float:left;
            text-align: center;
            line-height: 40px;
        }
        .div_top_fixed_right_shop_car_font_box span
        {
            font-size: 0.5vw;
        }
        .div_top_fixed_right_shop_car_right_num_box
        {
            margin-top: 10px;
            float: left;
            display: flex;
            align-items: center; /*定义元素垂直居中*/
            justify-content: center; /*定义元素水平居中*/
        }
        .div_top_fixed_right_shop_car_right_num_sq
        {
            width: 20px;
            height: 20px;
            float:left;
            border-radius: 40%;
            line-height: 20px;
            text-align: center;
            background-color: #cccccc;
        }
        .div_top_fixed_right_shop_car_right_num_sq span
        {
            font-size: 0.5vw;
        }
        .div_content_navigation_bar_style
        {
            margin-top: 80px;
            width: 98%;
            margin-left: 1%;
            border: 0;
            background-color: #eeeeee;
        }
        /*超大PC屏幕下的专用样式*/
        @media screen and (min-width:1200px)
        {
            .div_top_fixed_right_box
            {
                width: 50%;
                height: 40px;
                float: right;
            }
            #Shop_Car_div_appear
            {
                width: 850px;
                height: 500px;
                z-index: 2;
                position: fixed;
                top: 100px;
                left: 50%;
                margin-left: -425px;
                overflow: hidden;
                display: none;
                background-color: white;
                border-radius: 1vh;
                box-shadow: dimgrey 0 0 20px;
            }
            #Login_div_appear
            {
                width: 600px;
                height: 350px;
                z-index: 2;
                position: fixed;
                top: 100px;
                left: 50%;
                margin-left: -300px;
                overflow: hidden;
                display: none;
                background-color: white;
                border-radius: 1vh;
            }
            #Sign_div_appear
            {
                width: 600px;
                height: 645px;
                z-index: 2;
                position: fixed;
                top: 100px;
                left: 50%;
                margin-left: -300px;
                overflow: hidden;
                display: none;
                background-color: white;
                border-radius: 1vh;
            }
        }
        /*中等PC屏幕下的专用样式*/
        @media screen and (min-width:992px) and (max-width: 1199px)
        {
            .div_top_fixed_right_box
            {
                width: 50%;
                height: 40px;
                float: right;
            }
            #Shop_Car_div_appear
            {
                width: 800px;
                height: 500px;
                z-index: 2;
                position: fixed;
                top: 100px;
                left: 50%;
                margin-left: -400px;
                overflow: hidden;
                display: none;
                background-color: white;
                border-radius: 1vh;
            }
            #Login_div_appear
            {
                width: 600px;
                height: 350px;
                z-index: 2;
                position: fixed;
                top: 100px;
                left: 50%;
                margin-left: -300px;
                overflow: hidden;
                display: none;
                background-color: white;
                border-radius: 1vh;
            }
            #Sign_div_appear
            {
                width: 600px;
                height: 645px;
                z-index: 2;
                position: fixed;
                top: 100px;
                left: 50%;
                margin-left: -300px;
                overflow: hidden;
                display: none;
                background-color: white;
                border-radius: 1vh;
            }
        }
        /*PAD屏幕下的专用样式*/
        @media screen and (min-width: 768px) and (max-width:991px )
        {
            .div_top_fixed_right_box
            {
                width: 50%;
                height: 40px;
                float: right;
            }
            #Shop_Car_div_appear
            {
                width: 700px;
                height: 500px;
                z-index: 2;
                position: fixed;
                top: 100px;
                left: 50%;
                margin-left: -350px;
                overflow: hidden;
                display: none;
                background-color: white;
                border-radius: 1vh;
            }
            #Login_div_appear
            {
                width: 500px;
                height: 350px;
                z-index: 2;
                position: fixed;
                top: 100px;
                left: 50%;
                margin-left: -250px;
                overflow: hidden;
                display: none;
                background-color: white;
                border-radius: 1vh;
            }
            #Sign_div_appear
            {
                width: 500px;
                height: 645px;
                z-index: 2;
                position: fixed;
                top: 100px;
                left: 50%;
                margin-left: -250px;
                overflow: hidden;
                display: none;
                background-color: white;
                border-radius: 1vh;
            }
        }
        /*PHONE屏幕下的专用样式*/
        @media screen and (max-width:767px)
        {
            .div_top_fixed_right_box
            {
                width: 100%;
                height: 40px;
                float: right;
            }
            #Shop_Car_div_appear
            {
                width: 600px;
                height: 500px;
                z-index: 2;
                position: fixed;
                top: 100px;
                left: 50%;
                margin-left: -300px;
                overflow: hidden;
                display: none;
                background-color: white;
                border-radius: 1vh;
            }
            #Login_div_appear
            {
                width: 400px;
                height: 350px;
                z-index: 2;
                position: fixed;
                top: 100px;
                left: 50%;
                margin-left: -200px;
                overflow: hidden;
                display: none;
                background-color: white;
                border-radius: 1vh;
            }
            #Sign_div_appear
            {
                width: 400px;
                height: 645px;
                z-index: 2;
                position: fixed;
                top: 100px;
                left: 50%;
                margin-left: -200px;
                overflow: hidden;
                display: none;
                background-color: white;
                border-radius: 1vh;
            }
        }
        #Login_div_disappear
        {
            position: fixed;
            left: 0;
            top:0;
            width: 100%;
            height: 100%;
            background-color: grey;
            z-index: 1;
            opacity: 0.8;
            display: none;
        }
        #Shop_Car_div_disappear
        {
            position: fixed;
            left: 0;
            top:0;
            width: 100%;
            height: 100%;
            background-color: grey;
            z-index: 1;
            opacity: 0.8;
            display: none;
        }
        .top
        {
            width: 90%;
            height: 20px;
            margin: 2px auto;
        }
        .top a
        {
            float: right;
            margin-right: 2px;
            text-decoration: none;
            color: #3A3C3D;
            opacity: 0.5;
        }
        .top a:hover
        {
            opacity: 1;
        }
        .div_top_d1_style
        {
            width: 100%;
            height: 65px;
            float: left;
            line-height: 65px;
            text-align: left;
            border-bottom: dimgrey solid 1px;
        }
        .div_top_d1_style span
        {
            font-size: 2.5vh;
            margin-left: 50px;
            font-weight: 600;
        }
        .div_top_d1_close
        {
            width: 30px;
            height: 30px;
            float: right;
            margin: 17.5px 17.5px 0 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .div_top_d1_close span
        {
            margin: 0;
            padding: 0;
        }
        .div_Tips_p_style
        {
            width: 100%;
            height: 90px;
            float: left;
            line-height: 135px;
            text-align: left;
        }
        .div_Tips_p_style p
        {
            font-size: 3.2vh;
            margin-left: 20px;
        }
        .div_top_input_div
        {
            width: 100%;
            height: 125px;
            float: left;
        }
        .div_top_input_user_input_div
        {
            width: 95%;
            height: 55px;
            float: left;
            margin-left: 2.5%;
            margin-top: 5px;
        }
        .div_top_buttom_div
        {
            width: 210px;
            height: 40px;
            float: right;
            margin-top: 15px;
            margin-right: 10px;
        }
        .div_top_buttom_login_button
        {
            width: 45%;
            height: 40px;
            float: left;
            margin-left: 2.5%;
        }
        .div_top_buttom_login_button button
        {
            width: 100%;
            height: 100%;
        }
        .div_top_buttom_login_button button:hover
        {
            background-color: powderblue;
        }
        .div_top_buttom_close_button
        {
            width: 45%;
            height: 40px;
            float: left;
            margin-left: 5%;
        }
        .div_top_buttom_close_button button
        {
            width: 100%;
            height: 100%;
        }
        .div_top_buttom_close_button button:hover
        {
            background-color: powderblue;
        }
        .Sign_div_appear_input_div
        {
            width: 95%;
            height: 85px;
            float: left;
            margin: 10px 0 0 2.5%;
        }
        .Sign_div_appear_input_div_font_style
        {
            width: 100%;
            height: 50%;
            float: left;
            line-height: 42.5px;
            text-align: left;
        }
        .Sign_div_appear_input_div_font_style p
        {
            font-size: 1.5vh;
            font-weight: 600;
        }
        .Sign_div_appear_input_sex
        {
            width: 45px;
            height: 42.5px;
            float: left;
            margin-left: 10px;
            text-align: center;
            line-height: 42.5px;
        }
        .Sign_div_appear_input_sex span
        {
            font-size: 1.5vh;
        }
        .Sign_div_button_box
        {
            width: 210px;
            height: 40px;
            float: right;
            margin: 22.5px 10px 0 0;
        }
        .Sign_div_button_sgin
        {
            width: 45%;
            height: 40px;
            float: left;
            margin-left: 2.5%;
        }
        .Sign_div_button_sgin button
        {
            width: 100%;
            height: 100%;
        }
        .Sign_div_button_sgin button:hover
        {
            background-color: powderblue;
        }
        .Sign_div_button_close
        {
            width: 45%;
            height: 40px;
            float: left;
            margin-left: 5%;
        }
        .Sign_div_button_close button
        {
            height: 100%;
            width: 100%;
        }
        .div_top_fixed_box_span_xiegang
        {
            float: left;
            margin-left: 5%;
            font-size: 1.5vh;
            color: darkgrey;
        }
        .logined_user_function
        {
            width: 30%;
            height: 40px;
            float: left;
        }
        .logined_user_function td
        {
            font-size: 1vh;
        }
        .logined_user_function_td_font
        {
            width: 30%;
            height: 40px;
            text-align: center;
        }
        .logined_user_function_td_xiegang
        {
            width: 5%;
            height: 40px;
            text-align: center;
        }
        .Shop_Car_div_top
        {
            width: 100%;
            height: 60px;
            float: left;
            line-height: 60px;
        }
        .Shop_Car_div_top span
        {
            font-size: 2vh;
            font-weight: 600;
            margin-left: 5%;
        }
        .Shop_Car_div_top_right_Exit
        {
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center; /*定义元素垂直居中*/
            justify-content: center; /*定义元素水平居中*/
            float: right;
        }
        .Shop_Car_div_top_right_Exit span
        {
            font-size: 2vh;
        }
        .Shop_Car_div_Content
        {
            width: 100%;
            height: 380px;
            float: left;
            border-top: darkgrey solid 1px;
            border-bottom: darkgrey solid 1px;
        }
        .Shop_Car_div_Content_Shop_information_box
        {
            width: 98%;
            margin-left: 1%;
            height: 60px;
            float: left;
            line-height: 60px;
        }
        .Shop_Car_div_Content_Shop_information_box td
        {
            font-size: 1.5vh;
            font-weight: 600;
        }
        .Shop_Car_div_Content_commodity
        {
            width: 98%;
            margin-left: 1%;
            height: 240px;
            float: left;
            overflow-x: hidden;
            overflow-y: scroll;
        }
        .Shop_Car_div_Content_commodity_sum
        {
            width: 100%;
            height: 80px;
            float: left;
            line-height: 60px;
        }
        .Shop_Car_div_Content_commodity_sum span
        {
            font-size: 1.5vh;
            font-weight: 600;
        }
        .Shop_Car_div_Content_commodity_sum_clear_shop_car_box
        {
            width: 20%;
            height: 30px;
            margin-top: 15px;
            margin-left: 20px;
            float: left;
            line-height: 30px;
            text-align: center;
            border-radius: 10px;
            border: darkgray solid 1px;
            background-color: lightskyblue;
        }
        .Shop_Car_div_Content_commodity_sum_clear_shop_car_box_hover:hover
        {
            color: black;
        }
        .Shop_Car_div_Content_commodity_sum_right_box
        {
            width: 40%;
            height: 30px;
            float: right;
            margin-top: 25px;
            line-height: 30px;
            text-align: center;
        }
        .Shop_Car_div_Bottom
        {
            width: 100%;
            height: 60px;
            float: left;
        }
        .Shop_Car_div_Bottom button
        {
            float: right;
            margin-right: 10px;
            height: 30px;
            margin: 15px 15px 0 0;
        }
        .div_shop_car_user_sel_box
        {
            width: 100%;
            height: 100px;
            float: left;
            line-height: 100px;
            margin-bottom: 5px;
            border-radius: 10px;
            margin-top: 5px;
            border: darkgray solid 1px;
        }
        .div_shop_car_user_sel_number
        {
            width: 10%;
            height: 100px;
            float: left;
            text-align: center;
        }
        .div_shop_car_user_sel_picture
        {
            width: 20%;
            height: 100px;
            float: left;
            text-align: center;
        }
        .div_shop_car_user_sel_picture img
        {
            height: 90%;
            max-width: 100%;
        }
        .div_shop_car_user_sel_name
        {
            width: 25%;
            height: 100px;
            float: left;
            text-align: left;
        }
        .div_shop_car_user_sel_Price
        {
            width: 15%;
            height: 100px;
            float: left;
            text-align: left;
        }
        .div_shop_car_user_sel_input_sum
        {
            width: 10%;
            height: 100px;
            float: left;
            text-align: left;
        }
        .div_shop_car_user_sel_input_sum input
        {
            width: 100%;
            height: 40px;
            margin-top: 30px;
        }
        .div_shop_car_user_sel_all_sum
        {
            width: 10%;
            height: 100px;
            float: left;
            text-align: left;
        }
        .div_shop_car_user_sel_control
        {
            width: 10%;
            height: 100px;
            float: left;
            text-align: center;
        }
</style>
