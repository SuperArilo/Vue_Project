import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'
import Index_Commodity_Classification from '../views/Index_Commodity_Classification'
import Index_Content from '../views/Index_Content'
import Index_Commodity_Classification_Right_Content from '../views/Index_Commodity_Classification/Index_Commodity_Classification_Right_Content'
import Index_Commodity_Classification_Right_Content_Shop_One from '../views/Index_Commodity_Classification/Index_Commodity_Classification_Right_Content_Shop/Index_Commodity_Classification_Right_Content_Shop_One'
import test from '../views/test.vue'
import Index_My_Order from '../views/Index_My_Order'
Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/Index_Content',
      children: [
        {
          path: 'Index_Content',
          name: 'Index_Content',
          component: Index_Content
        },
        {
          path: '/Index_Commodity_Classification',
          name: 'Index_Commodity_Classification',
          component: Index_Commodity_Classification,
          redirect: '/Index_Commodity_Classification/Index_Commodity_Classification_Right_Content',
          children: [
            {
              path: 'Index_Commodity_Classification_Right_Content',
              name: 'Index_Commodity_Classification_Right_Content',
              component: Index_Commodity_Classification_Right_Content
            },
            {
              path: '/Index_Commodity_Classification/Index_Commodity_Classification_Right_Content/Index_Commodity_Classification_Right_Content_Shop_One',
              name: 'Index_Commodity_Classification_Right_Content_Shop_One',
              component: Index_Commodity_Classification_Right_Content_Shop_One
            }
          ]
        },
        {
          path: '/Index_My_Order',
          name: 'Index_My_Order',
          component: Index_My_Order
        }
      ]
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
