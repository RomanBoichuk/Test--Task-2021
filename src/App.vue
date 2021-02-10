<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  height: 100%
}
body {
  min-height: 100%;
  background: rgb(2,0,36);
  background-image: url("../public/img/icons/logo_circle.png"),
    url("../public/img/icons/logo_circle new.png"),
    linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 37%,
      rgba(0,212,255,1) 100%);;
  background-position: center;
  background-repeat: space, no-repeat;
  background-attachment: fixed;
}
/* body:hover:before {
  content: "";
  width: 100%;
  height: 10px;
  background-color: red;
  display: inline-block;
  transform: translateY(370px)
} */

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
