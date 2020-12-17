<template>
<div>
    <div class="row">
        <div class="col-md-4 col-lg-4 col-sm-4 col-xs-4" style="text-align: center;margin: 20px 0 20px 0;" v-for="(item,index) in Shop_Clothes" :key="index">
            <div class="div_show_shop_border" @click="Link_to_Index_Commodity_Classification_Right_Content_Shop_One(item.idclothe, item.clothesname,item.clothespricebefore,item.clothespriceafter,item.clothespictureaf,item.clothessale,item.clothessize,item.clothescolor,item.clothesfrom,item.clothesmade)">
                <img :src="item.clothespicturebe"/>
                <p>{{item.clothesname}}</p>
                <p>原价￥ {{item.clothespricebefore}}</p>
                <p>现售￥ {{item.clothespriceafter}}</p>
                <p>共销售 {{item.clothessale}}</p>
                <button type="button" class="btn btn-primary">查看详情</button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import Axios from 'axios'
export default{
    data() {
        return {
            Shop_Clothes: [
            ],
            row_num: ''
        }
    },
    methods: {
        Link_to_Index_Commodity_Classification_Right_Content_Shop_One(idclothe, clothesname, clothespricebefore, clothespriceafter, clothespictureaf, clothessale, clothessize, clothescolor, clothesfrom, clothesmade) {
            this.$router.push({path: '/Index_Commodity_Classification/Index_Commodity_Classification_Right_Content/Index_Commodity_Classification_Right_Content_Shop_One', query: {'idclothe': idclothe, 'clothesname': clothesname, 'clothespricebefore': clothespricebefore, 'clothespriceafter': clothespriceafter, 'clothespictureaf': clothespictureaf, 'clothessale': clothessale, 'clothessize': clothessize, 'clothescolor': clothescolor, 'clothesfrom': clothesfrom, 'clothesmade': clothesmade}})
        }
    },
    created() {
        const _this = this
        Axios.get('http://localhost:8181/Shop_Clothes/finAll').then(function (resp) {
            _this.Shop_Clothes = resp.data
        })
        Axios.get('http://localhost:8181/Shop_Clothes/row_num').then(function (resp) {
            _this.row_num = resp.data
        })
    }
}
</script>
<style>
.row_style
{
    width: 98%;
    margin-left: 1%;
    text-align: center;
    margin: 20px 0 20px 0;
}
.div_show_shop_border
{
    width: 90%;
    height: auto;
    margin-left: 5%;
    border: darkgrey solid 1px;
    padding-bottom: 15px;
    border-radius: 5px;
}
.div_show_shop_border img
{
    max-width: 100%;
}
</style>
