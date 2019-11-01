<template>
  <div class="hello">
    <div class="left">
      <button @click="changeProductList">改变productList</button>
    </div>
    <div  class="right">
      <span v-for="item in productList" :key="item">{{item}}</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'home',
  computed: mapState(['productList']),
  // computed:{
  //   ...mapState(['productList'])
  // } 
  methods:{
    ...mapMutations({
      setProductList:"SET_PRODUCTLIST"
    }),
    ...mapActions(['setProductListAction']),
    changeProductList(){
      let product =[10,11,12,13]
      if(typeof  this.productList == "object"){
        product=this.productList.concat(product)
      }

      this.setProductListAction()

      // this.setProductList(product)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div{
  box-sizing: border-box ;//width = padding+content +border
}
.hello{
  width: 1140px;
  display: flex;
  align-items: center;
  justify-content: center;
  .left{
    width: 250px;
    height: 360px;
    border: 1px solid green 
  }
  .right{
    width: 890px;
    height: 360px;
    border: 1px solid red 
  }

}
</style>
