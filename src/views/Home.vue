<template>
  <div>
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>

</template>

<script>
import Footer from "./footer"
import Header from "./header"
import {es6Func} from "../utils/es6"
export default {
  name: 'home',
  created(){
    es6Func()
  },
  components:{Header,Footer},
  methods:{
    
 
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
