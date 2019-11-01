import * as types from "./mutation_type.js"

export default {
    [types.SET_PRODUCTLIST] (state, productList) {
            state.productList = productList
            console.log('mutation 中的setProduct执行了',productList)
      
    },
    [types.SET_PRODUCTLISTACTION] (state, productList) {
        if(productList== undefined){
            productList =[]
        }
        productList.push("1029")
       state.productList = productList
        console.log('mutation 中的SET_PRODUCTLISTACTION执行了',productList)
  
}
    
}