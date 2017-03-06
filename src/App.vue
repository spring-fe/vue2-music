<template>
	<div id="wrapper">
    <header>
      <router-link to="/my" class="guess_city">
        <span>我的</span>
      </router-link> 
      <router-link to="/center" class="guess_city">
        <span>音乐馆</span>
      </router-link><br><br>
      <div id="search"> 
        <input placeholder="搜索" type='search'>
      </div>
    </header>
    <section id="main">
      <router-view></router-view>
      <footer id="footer">

      </footer>
    </section>
    <footer>
    </footer>
    
  </div>
</template>

<script>
  

  export default {
    
  }

</script>
  

<style lang="sass">
  
  @import './style/common';
  body{
    background: #fff;
  }

  header{
    position: fixed;
    z-index: 200;
    top: 0;
    left: 0;
    width: 100%;
    font-size: 12px;
    padding: 10px 0;
    height: 30px;
    text-align: center;
    span{
      color: #fff;
      font-weight: 800;
    }
    a:first-child{
      margin-right: 6px;
    }
    #search{
      position: absolute;
      top: 28px;
      width: 100%;
      font-size: 12px;
      background: #0bc175;
      padding: 6px 0;
      text-align: center;
      input{
        background: #beecbd;
        width: 90%;
        height: 25px;
        opacity: 0.5;
        border-radius: 4px;
        -webkit-border-raadius: 4px;
      }
    }

    background: #0bc175;
  }
  #main{
    margin-top: 61px;
    padding-bottom: 40px;
    overflow: scroll;
    background: white;
  }
  footer{
    position: fixed;
    height: 34px;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #83c786;
  }
  
</style>
