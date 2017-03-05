<template>
	<div id="wrapper">
    <header id="center">
      <router-link to="/my" class="guess_city">
        <span>我的</span>
      </router-link> 
      <router-link to="/center" class="guess_city">
        <span>音乐馆</span>
      </router-link><br><br>   
      <input placeholder="搜索" type='search'>
    </header>
		
		<br><br> <br>
    	<router-view></router-view>
    <footer id="footer">

    </footer>
    </div>
</template>

<script>
  

  export default {
    
  }

</script>
  

<style lang="sass">
  
  @import './style/common';

  html,body{
    height: 100%;
    width: 100%;
  }
  body{
    background: #bbbfb9;
  }

  header[id='center']{
    font-size: 12px;
    padding: 10px 0;
    height: 100px;
    text-align: center;
    input{
      width: 90%;
      height: 27px;
      opacity: 0.5;
      border-radius: 4px;
      -webkit-border-raadius: 4px;
    }
    span{
      color: #fff;
      font-weight: 800;
    }
    a:first-child{
      margin-right: 6px;
    }

    background: #0bc175;
  }
  
</style>
