module.exports={
  css: {
    loaderOptions: {
      scss: {
        // prependData: `@import "./src/scss/variable.scss";`
        prependData: `@import "@/scss/variable.scss";`//@是src
      },
    }
  }
}