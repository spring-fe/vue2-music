<template>
	<div id = 'my'>
		<img src="../../images/avatar.jpeg"><br>
		{{username}}
	</div>
</template>

<script>

import {mapState, mapMutations} from 'vuex'

export default {
	data(){
		return {
			username:''
		}
	},
	mounted(){
		this.username = this.$store.state.username;
	},
	computed: {
       
    }
	
}

</script>

<style lang = 'sass'>
	#my{
		text-align: center;
		font-size: 12px;
		padding-top: 50px;
		img{
			-webkit-border-radius: 50%;
			border-radius: 50%;
			width: 80px;
			height: 80px;
			margin-bottom: 4px;
		}

	}
</style>