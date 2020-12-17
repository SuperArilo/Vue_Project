<template>
<div>
    <div class="div_content_box">
        <div class="div_content_left_table_box">
            <table>
                <tr v-for="(item,index) in table_Value" :key="index">
                    <td :class="table_id === item.id ? 'active_table_td' : ''" @click="table_style_change(item.id)" ref="list">{{item.Value}}</td>
                </tr>
            </table>
        </div>
        <div class="div_content_right_con_box">
            <div class="div_content_right_con_div_chlidern">
                <div class="div_content_right_con_div_chlidern_header">
                    <table>
                        <tr>
                            <td>下单时间：2020.12.3</td>
                            <td>订单号：2020123124950</td>
                            <td>订单状态：已完成</td>
                        </tr>
                    </table>
                </div>
                <div class="div_content_right_con_div_chlidern_Clothes_box" v-for="(item,index) in user_car_content" :key="index">
                    <div class="div_content_right_con_div_chlidern_Clothes_Picture">
                        <img :src="item.clothespicturebe">
                    </div>
                    <div class="div_content_right_con_div_chlidern_Clothes_Message">
                        <table>
                            <tr>
                                <td>{{item.clothesname}}</td>
                                <td>{{item.clothessize}}</td>
                                <td>{{item.clothescolor}}</td>
                            </tr>
                        </table>
                    </div>
                    <div class="div_content_right_con_div_chlidern_Clothes_Price_box">
                        <span>￥ {{item.clothespriceafter}}</span>
                    </div>
                    <div class="div_content_right_con_div_chlidern_Clothes_num_box">
                        <span>{{item.carclothesnum}} 件</span>
                    </div>
                    <div class="div_content_right_con_div_chlidern_Clothes_Sum_Price_box">
                        <span>￥ {{item.clothespriceafter * item.carclothesnum}}</span>
                    </div>
                </div>
                <div class="div_content_right_con_div_chlidern_bottom_box">
                    <div class="div_content_right_con_div_chlidern_button">
                        <button type="button" class="btn btn-default">查看订单详情</button>
                    </div>
                    <div class="div_content_right_con_div_chlidern_bottom_right_table_box">
                        <table>
                            <tr>
                                <td>总金额</td>
                                <td>（含运费 12 元）:</td>
                                <td>￥{{this.Sum_Value}}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style>
html body
{
    width: 100%;
    height: 100%;
}
td
{
    font-size: 14px;
}
.div_content_box
{
    width: 98%;
    height: 800px;
    margin-left: 1%;
}
.div_content_left_table_box
{
    width: 15%;
    height: 500px;
    float: left;
}
.div_content_left_table_box table
{
    width: 100%;
    height: 100%;
    text-align: left;
}
.div_content_left_table_box td:hover
{
    background-color: dodgerblue;
    border-radius: 10px;
    padding-left: 20px;
    color: white;
}
.active_table_td
{
    color: white !important;
    padding-left: 20px;
    background-color: dodgerblue;
    border-radius: 10px;
}
.div_content_left_table_box td
{
    font-size: 15px;
    font-weight: 600;
    color:#1E90FF;
}
.div_content_right_con_box
{
    width: 85%;
    height: auto;
    float: left;
    white-space:nowrap;
}
.div_content_right_con_div_chlidern
{
    width: 100%;
    height: 350px;
    border:#87CEFA solid 1px;
    border-radius: 5px;
}
.div_content_right_con_div_chlidern_header
{
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color:#ADD8E6;
}
.div_content_right_con_div_chlidern_header table
{
    width: 50%;
    height: 100%;
}
.div_content_right_con_div_chlidern_Clothes_box
{
    width: 95%;
    height: 50px;
    margin: 20px 0 0 2.5%;
    float: left;
    overflow: hidden;
}
.div_content_right_con_div_chlidern_Clothes_box div
{
    border: darkgrey solid 1px;
    float: left;
    height: 50px;
    line-height: 50px;
}
.div_content_right_con_div_chlidern_Clothes_Picture
{
    width: 15%;
    text-align: center;
}
.div_content_right_con_div_chlidern_Clothes_Picture img
{
    max-width: 100%;
    height: 90%;
}
.div_content_right_con_div_chlidern_Clothes_Message
{
    width: 50%;
}
.div_content_right_con_div_chlidern_Clothes_Price_box
{
    width: 15%;
}
.div_content_right_con_div_chlidern_Clothes_num_box
{
    width: 5%;
}
.div_content_right_con_div_chlidern_Clothes_Sum_Price_box
{
    width: 15%;
}
.div_content_right_con_div_chlidern_bottom_box
{
    width: 95%;
    height: 70px;
    float: left;
    margin: 60px 0 0 2.5%;
    border-top: darkgrey solid 1px;
}
.div_content_right_con_div_chlidern_button
{
    width: 120px;
    height: 40px;
    float: left;
    margin: 15px 0 0 20px;
}
.div_content_right_con_div_chlidern_button button
{
    height: 100%;
    width: 100%;
}
.div_content_right_con_div_chlidern_bottom_right_table_box
{
    width: 300px;
    height: 50px;
    float: right;
    margin: 10px 40px 0 0;
    line-height: 50px;
}
.div_content_right_con_div_chlidern_bottom_right_table_box table
{
    width: 100%;
    height: 100%;
}
</style>
<script>
import Axios from 'axios'
export default {
    data() {
        return {
            user_car_content: [
            ],
            Sum_Value: '',
            table_id: 0,
            table_Value: [
                {
                    id: '1',
                    Value: '全部订单'
                },
                {
                    id: '2',
                    Value: '待付款订单'
                },
                {
                    id: '3',
                    Value: '代发货订单'
                },
                {
                    id: '4',
                    Value: '待收货订单'
                },
                {
                    id: '5',
                    Value: '已退款订单'
                },
                {
                    id: '6',
                    Value: '已退货订单'
                },
                {
                    id: '7',
                    Value: '交易成功订单'
                },
                {
                    id: '8',
                    Value: '交易关闭订单'
                }
            ]
        }
    },
    mounted() {
        const _this = this
        let c = 0
        Axios.get('http://localhost:8181/Show/Order').then(function(resq) {
            _this.user_car_content = resq.data
            for (let i = 0; i <= _this.user_car_content.length - 1; i++) {
                c += _this.user_car_content[i].clothespriceafter * _this.user_car_content[i].carclothesnum
            }
            _this.Sum_Value = c
        })
        this.$refs.list[0].classList.add('active_table_td')
    },
    methods: {
        table_style_change(id) {
            this.$refs.list[0].classList.remove('active_table_td')
            this.table_id = id
        }
    }
}
</script>
