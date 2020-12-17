<template>
<div>
    <div class="div_commodity_show_box">
        <div class="div_commodity_show_top_big_box">
            <img :src="this.$route.query.clothespictureaf">
        </div>
        <div class="div_commodity_show_bottom_Small_box">
            <img :src="this.$route.query.clothespictureaf">
        </div>
        <div class="div_commodity_show_bottom_Small_box">
            <img :src="this.$route.query.clothespictureaf">
        </div>
    </div>
    <div class="div_right_fix_box" id="div_right_fix_box">
        <div class="div_right_fix_box_title_box">
            <span>{{this.$route.query.clothesname}}</span>
        </div>
        <div class="div_right_fix_box_commodity_name_box">
            <div class="div_right_fix_box_commodity_name_box_left">
                <span>原价：￥{{this.$route.query.clothespricebefore}} 现售：</span>
                <div class="div_right_fix_box_commodity_name_box_right">
                    <span>￥{{this.$route.query.clothespriceafter}}</span>
                </div>
            </div>
        </div>
        <div class="div_right_fix_freight_box">
            <span>运费：￥12.0</span>
        </div>
        <div class="div_right_fix_sum_box">
            <span class="div_right_fix_sum_box_span">共出售 {{this.$route.query.clothessale}} 件 </span>
        </div>
        <div class="div_right_fix_select_box">
            <span>尺寸选择：</span>
        </div>
        <div class="div_right_fix_select_choice_box">
            <div class="div_right_fix_select_choice_box_style">
                <span>{{this.$route.query.clothessize}}</span>
            </div>
        </div>
        <div class="div_right_fix_select_box">
            <span>颜色选择：</span>
        </div>
        <div class="div_right_fix_select_choice_box">
            <div class="div_right_fix_select_choice_box_style">
                <span>{{this.$route.query.clothescolor}}</span>
            </div>
        </div>
        <div class="div_right_fix_select_num_box">
            <div class="div_right_fix_select_num_left_box">
                <span>数量：</span>
            </div>
            <div class="div_right_fix_select_num_right_box">
                <input type="text" class="form-control" placeholder="" v-model="clothesnum">
            </div>
        </div>
        <div class="div_right_fix_button_box">
            <button type="button" class="btn btn-primary">立即购买</button>
            <button type="button" class="btn btn-primary" @click="return_clothename()">加入购物车</button>
        </div>
        <div class="div_right_fix_made_come_from_box">
            <span>产地：{{this.$route.query.clothesfrom}}</span>
        </div>
        <div class="div_right_fix_made_come_from_box">
            <span>材质：{{this.$route.query.clothesmade}}</span>
        </div>
    </div>
    <div class="div_commodity_details_span_box">
        <span>商品详情</span>
    </div>
</div>
</template>
<style>
.div_commodity_show_box
{
    width: 30%;
    height: 600px;
    float: left;
    margin-left: 5%;
    text-align: center;
}
.div_commodity_show_box img
{
    max-width: 100%;
}
.div_commodity_show_top_big_box
{
    width: 100%;
    height: 500px;
    float: left;
}
.div_commodity_show_bottom_Small_box
{
    width: 100px;
    height: 100px;
    float: left;
    margin-left: 15px;
    border: lightgray solid 1px;
    border-radius: 5px;
}
.div_commodity_show_bottom_Small_box :hover
{
    border: rgb(30, 119, 170) solid 1px;
    border-radius: 5px;
}
.div_right_fix_box
{
    width: 320px;
    height: auto;
    float: right;
    border: lightgray solid 1px;
    border-radius: 5px;
    position: fixed;
    background-color: white;
    right: 40px;
}
.div_right_fix_box span
{
    font-size: 1.5vh;
    margin-left: 5%;
}
.div_right_fix_box_title_box
{
    width: 100%;
    height: 50px;
    float: left;
    text-align: left;
    line-height: 50px;
    background-color:#87CEFA;
}
.div_right_fix_box_title_box span
{
    font-weight: 600;
    color:#4682B4;
}
.div_right_fix_box_commodity_name_box
{
    width: 100%;
    height: 40px;
    float: left;
    text-align: center;
    line-height: 40px;
}
.div_right_fix_box_commodity_name_box_left
{
    width: 100%;
    height: 40px;
    float: left;
    text-align: left;
}
.div_right_fix_box_commodity_name_box_left span
{
    font-size: 1.5vh;
    font-weight: 600;
}
.div_right_fix_box_commodity_name_box_right
{
    width: 50px;
    height: 20px;
    float: right;
    line-height: 20px;
    border-radius: 10px;
    margin: 10px 0 0 10px;
    background-color:#87CEFA;
    text-align: center;
    position: relative;
    right: 35%;
}
.div_right_fix_freight_box
{
    width: 100%;
    height: 40px;
    float: left;
    line-height: 40px;
    text-align: left;
}
.div_right_fix_freight_box span
{
    font-weight: 600;
}
.div_right_fix_sum_box
{
    height: 40px;
    width: 100%;
    float: left;
    line-height: 40px;
    text-align: left;
}
.div_right_fix_sum_box_span
{
    font-size: 1.8vh;
    font-weight: 700;
}
.div_right_fix_select_box
{
    height: 40px;
    width: 100%;
    float: left;
    line-height: 40px;
    text-align: left;
}
.div_right_fix_select_box span
{
    font-weight: 600;
}
.div_right_fix_select_choice_box
{
    height: 40px;
    width: 100%;
    float: left;
    line-height: 40px;
    text-align: left;
}
.div_right_fix_select_choice_box_style
{
    width: 55px;
    height: 25px;
    float: left;
    background-color: lightskyblue;
    line-height: 25px;
    margin: 7.5px 0 0 5%;
    text-align: center;
    border-radius: 3px;
}
.div_right_fix_select_choice_box_style span
{
    font-size: 1vh;
    color: white;
}
.div_right_fix_select_num_box
{
    height: 40px;
    width: 100%;
    float: left;
    line-height: 40px;
    text-align: left;
}
.div_right_fix_select_num_left_box
{
    width: 30%;
    height: 40px;
    float: left;
    line-height: 40px;
    text-align: center;
}
.div_right_fix_select_num_left_box span
{
    font-weight: 600;
}
.div_right_fix_select_num_right_box
{
    width: 20%;
    height: 40px;
    float: left;
    text-align: left;
    line-height: 40px;
}
.div_right_fix_button_box
{
    width: 100%;
    height: 40px;
    float: left;
    line-height: 40px;
    padding-left: 5%;
    padding-bottom: 80px;
}
.div_right_fix_made_come_from_box
{
    width: 100%;
    height: 40px;
    float: left;
    line-height: 40px;
    border: lightgray solid 1px;
}
.div_commodity_details_span_box
{
    width: 100%;
    height: 80px;
    float: left;
    background-color: yellow;
    text-align: left;
    line-height: 80px;
    margin-top: 80px;
}
.div_commodity_details_span_box span
{
    font-size: 2.5vh;
    font-weight: 600;
    margin-left: 5%;
}
</style>
<script>
import Axios from 'axios'
export default{
    data() {
        return {
            clothesnum: ''
        }
    },
    methods: {
        return_clothename() {
            const _this = this
            Axios.get('http://localhost:8181/User_Data/Check_User').then(function(resq) {
                if (resq.data === '你还未登录') {
                    alert('你还未登录！')
                } else {
                    if (_this.clothesnum === '') {
                alert('所选商品的数量为空！')
            } else {
                    Axios.post('http://localhost:8181/Shop_Car/Save_Clothesname/', {carclothesname: _this.$route.query.clothesname}).then(function(resq) {
                        if (resq.data === '该商品已在购物车里！') {
                            alert('该商品已在购物车里！')
                        } else if (resq.data === '添加失败！') {
                            alert('添加失败！')
                        } else {
                            _this.$store.commit('top_shop_car', resq.data)
                            alert('添加成功')
                        }
                    })
                    Axios.post('http://localhost:8181/Shop_Car/Save_Clothesnum/', {carclothesnum: _this.clothesnum, clothesname: _this.$route.query.clothesname}).then(function(resq) {})
                    }
                }
            })
        }
    },
    // computed: {
    //     User_Name: function() {
    //         return this.$store.state.User_Name
    //     }
    // },
    mounted() {
        // if (this.Change_Value === 1) {
        //     var div_right_fix_box = document.getElementById('div_right_fix_box')
        // }
    }
}
</script>
