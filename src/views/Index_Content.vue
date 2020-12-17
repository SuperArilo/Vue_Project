<template>
<div>
    <div class="container-fluid" style="margin: 0;padding: 0;">
        <div class="div_top_lunbo_box">
            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner carousel-inner_img_style" role="listbox">
                    <div class="item active">
                        <img src="static/Picture/Picture_1.jpg"/>
                    </div>
                    <div class="item">
                        <img src="static/Picture/Picture_2.jpg"/>
                    </div>
                    <div class="item">
                        <img src="static/Picture/Picture_3.jpg"/>
                    </div>
                </div>
                <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
        <div class="div_Commodity_classification">
            <div class="div_Commodity_classification_left_span_div">
                <span>商品分类</span>
            </div>
            <div class="div_Commodity_classification_left_span_check_more_div">
                <span>查看更多  ></span>
            </div>
        </div>
        <div class="div_Commodity_classification_show_div">
            <div class="row">
                <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3">
                    <img src="static\cate\1.png" @mouseover="img_over($event)" @mouseleave="img_leave($event)"/>
                </div>
                <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3">
                    <img src="static\cate\2.png" @mouseover="img_over($event)" @mouseleave="img_leave($event)"/>
                </div>
                <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3">
                    <img src="static\cate\3.png" @mouseover="img_over($event)" @mouseleave="img_leave($event)"/>
                </div>
                <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3">
                    <img src="static\cate\4.png" @mouseover="img_over($event)" @mouseleave="img_leave($event)"/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3">
                    <span>女装</span>
                </div>
                <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3">
                    <span>男装</span>
                </div>
                <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3">
                    <span>女士内衣</span>
                </div>
                <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3">
                    <span>男士内衣</span>
                </div>
            </div>
             <div class="row">
                <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3">
                    <img src="static\cate\5.png" @mouseover="img_over($event)" @mouseleave="img_leave($event)"/>
                </div>
                <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3">
                    <img src="static\cate\6.png" @mouseover="img_over($event)" @mouseleave="img_leave($event)"/>
                </div>
                <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3">
                    <img src="static\cate\7.png" @mouseover="img_over($event)" @mouseleave="img_leave($event)"/>
                </div>
                <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3">
                    <img src="static\cate\8.png" @mouseover="img_over($event)" @mouseleave="img_leave($event)"/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3">
                    <span>女鞋</span>
                </div>
                <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3">
                    <span>男鞋</span>
                </div>
                <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3">
                    <span>孕妇装</span>
                </div>
                <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3">
                    <span>儿童装</span>
                </div>
            </div>
        </div>
        <div class="div_New_arrival_box">
            <div class="div_New_arrival_box_left_span_div">
                <span>新到商品</span>
            </div>
            <div class="div_New_arrival_box_left_span_check_more_div">
                <span>查看更多  ></span>
            </div>
        </div>
        <div class="div_four_lunbo_box">
        <div id="carousel-example-generic_four" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carousel-example-generic_four" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-example-generic_four" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic_four" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <div class="row">
                        <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3 div_four_lunbo_box_border">
                            <img src="static\cate\1.png"/>
                        </div>
                        <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3 div_four_lunbo_box_border">
                            <img src="static\cate\2.png"/>
                        </div>
                        <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3 div_four_lunbo_box_border">
                            <img src="static\cate\3.png"/>
                        </div>
                        <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3 div_four_lunbo_box_border">
                            <img src="static\cate\4.png"/>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="row">
                        <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3 div_four_lunbo_box_border">
                            <img src="static\cate\1.png"/>
                        </div>
                        <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3 div_four_lunbo_box_border">
                            <img src="static\cate\2.png"/>
                        </div>
                        <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3 div_four_lunbo_box_border">
                            <img src="static\cate\3.png"/>
                        </div>
                        <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3 div_four_lunbo_box_border">
                            <img src="static\cate\4.png"/>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="row">
                        <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3 div_four_lunbo_box_border">
                            <img src="static\cate\1.png"/>
                        </div>
                        <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3 div_four_lunbo_box_border">
                            <img src="static\cate\2.png"/>
                        </div>
                        <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3 div_four_lunbo_box_border">
                            <img src="static\cate\3.png"/>
                        </div>
                        <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3 div_four_lunbo_box_border">
                            <img src="static\cate\4.png"/>
                        </div>
                    </div>
                </div>
            </div>
            <a class="left carousel-control" href="#carousel-example-generic_four" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#carousel-example-generic_four" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
    </div>
</div>
</template>
<script>
export default {
    methods: {
        img_over(e) {
            e.currentTarget.classList.add('animated')
            e.currentTarget.classList.add('animate__heartBeat')
        },
        img_leave(e) {
            e.currentTarget.classList.remove('animated')
            e.currentTarget.classList.remove('animate__heartBeat')
        }
    }
}
</script>
<style>
        .item
        {
            text-align: center;
        }
        .carousel-inner_img_style
        {
            max-width: 100%;
            height: 100%;
            width: 100%;
        }
        .div_top_lunbo_box
        {
            width: 98%;
            height: auto;
            float: left;
            margin-left: 1%;
            border-radius: 5px;
            overflow: hidden;
        }
        .div_Commodity_classification
        {
            width: 98%;
            height: 70px;
            margin-top: 50px;
            float: left;
            margin-left: 1%;
            background-color:#B0C4DE;
            border-radius: 5px;
        }
        .div_Commodity_classification_left_span_div
        {
            width: auto;
            height: 35px;
            float: left;
            margin: 17.5px 0 0 50px;
            line-height: 35px;
            text-align: center;
        }
        .div_Commodity_classification_left_span_div span
        {
            font-size: 1.5vh;
            font-weight: 600;
        }
        .div_Commodity_classification_left_span_check_more_div
        {
            width: auto;
            height: 35px;
            float: left;
            margin: 17.5px 0 0 10px;
            line-height: 40px;
            text-align: center;
        }
        .div_Commodity_classification_left_span_check_more_div span
        {
            font-size: 1vh;
        }
        .div_Commodity_classification_show_div
        {
            width: 98%;
            height: auto;
            float: left;
            margin: 20px 0 0 1%;
            text-align: center;
        }
        .div_Commodity_classification_show_div img
        {
            max-width: 100%;
            box-shadow: 0 0 1vh #999999;
            border-radius: 10px;
            margin-top: 40px;
        }
        .div_Commodity_classification_show_div span
        {
            height: 50px;
            font-size: 1.5vh;
            line-height: 50px;
        }
        .div_New_arrival_box
        {
            width: 98%;
            height: 70px;
            margin-top: 50px;
            float: left;
            margin-left: 1%;
            background-color:#90EE90;
            border-radius: 5px;
        }
        .div_New_arrival_box_left_span_div
        {
            width: auto;
            height: 35px;
            float: left;
            margin: 17.5px 0 0 50px;
            line-height: 35px;
            text-align: center;
        }
        .div_New_arrival_box_left_span_div span
        {
            font-size: 1.5vh;
            font-weight: 600;
        }
        .div_New_arrival_box_left_span_check_more_div
        {
            width: auto;
            height: 35px;
            float: left;
            margin: 17.5px 0 0 10px;
            line-height: 40px;
            text-align: center;
        }
        .div_New_arrival_box_left_span_check_more_div span
        {
            font-size: 1vh;
        }
        .div_four_lunbo_box
        {
            width: 98%;
            height: auto;
            float: left;
            margin: 10px 0 0 1%;
            border-radius: 5px;
            overflow: hidden;
        }
        .div_four_lunbo_box_border
        {
            border: #cccbcb solid 1px;
            max-width: 100%;
        }
        .div_four_lunbo_box_border img
        {
            max-width: 100%;
        }
</style>
