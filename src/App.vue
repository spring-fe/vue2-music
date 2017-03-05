<template>
	<div>
		<router-link to="/my" class="guess_city">
        <span>我的</span>
     	</router-link> 
     	<router-link to="/center" class="guess_city">
        <span>音乐馆</span>
        </router-link><br><br>   
		<input type='text'>
		<br><br> <br>
    	<router-view></router-view>
    </div>
</template>

<script>

  	export default {
    
  	}

</script>
  

<style>
  body{
    background: #b7b9b7
  }
</style>
