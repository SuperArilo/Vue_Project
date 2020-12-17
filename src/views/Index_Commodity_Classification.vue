<template>
<div>
    <div class="content_box">
        <div class="content_box_left_table_box">
            <table class="table table-hover content_box_left_table_style">
                <tr v-for="(item,index) in table_Value" :key="index">
                    <td :class="table_id === item.id ? 'active_table_td' : ''" @click="table_style_change(item.id)" ref="list">{{item.Value}}</td>
                </tr>
            </table>
        </div>
        <div class="content_box_right_show_box">
            <router-view/>
        </div>
    </div>
</div>
</template>
<script>
export default{
    data() {
        return {
            table_id: 0,
            table_Value: [
                {
                    id: '1',
                    Value: '女装'
                },
                {
                    id: '2',
                    Value: '女士内衣'
                },
                {
                    id: '3',
                    Value: '男士内衣'
                },
                {
                    id: '4',
                    Value: '女鞋'
                },
                {
                    id: '5',
                    Value: '男鞋'
                },
                {
                    id: '6',
                    Value: '孕妇装'
                },
                {
                    id: '7',
                    Value: '儿童装'
                },
                {
                    id: '8',
                    Value: '婴幼儿装'
                },
                {
                    id: '9',
                    Value: '箱包'
                },
                {
                    id: '10',
                    Value: '测试项目'
                }
            ]
        }
    },
    methods: {
        Link_to_Index_Commodity_Classification_Right_Content() {
            this.$router.push({path: '/Index_Commodity_Classification/Index_Commodity_Classification_Right_Content'})
        },
        table_style_change(id) {
            this.$refs.list[0].classList.remove('active_table_td')
            this.table_id = id
        }
    },
    mounted() {
        this.$refs.list[0].classList.add('active_table_td')
    }
}
</script>
<style>
.content_box
{
    width: 98%;
    margin-left: 1%;
    height: 721px;
    float: left;
}
.content_box_left_table_box
{
    width: 12%;
    height: 721px;
    float: left;
}
.content_box_left_table_style td
{
    width: 100%;
    height: 60px;
    text-align: center;
    border: lightgray solid 1px;
    font-size: 1.5vh;
}
.content_box_left_table_style table
{
    overflow: hidden;
}
.content_box_left_table_style td:hover
{
    background-color:lightblue;
}
.active_table_td
{
    background-color:lightblue;
}
.content_box_right_show_box
{
    width: 88%;
    height: 721px;
    float: left;
    overflow-x: hidden;
    overflow-y: scroll;
}
</style>
