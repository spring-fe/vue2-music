<template>
	<div id="center">
		<div id="push">
		</div>
		<div id="types">
			<ul>
				<li>
					<span>歌手</span>
				</li>
				<li>
					 <span>排行</span>
				</li>
				<li>
					 <span>电台</span>
				</li>
				<li>
					<span>分类歌单</span>
				</li>
				<li>
					<span>视频MV</span>
				</li>
				<li>
					<span>数字专辑</span>
				</li>
			</ul>
		</div>
		<div id="hot-push">
		<a>
			<figure>
				<img src="../../images/hot1.jpeg">
				<figcaption>《敢》为人先</figcaption>
			</figure>
		</a>
		<a>
			<figure>
				<img src="../../images/hot2.jpeg">
				<figcaption>百首经典音乐</figcaption>
			</figure>
		</a>
		<a>
			<figure>
				<img src="../../images/hot3.jpeg">
				<figcaption>极限运动</figcaption>
			</figure>
		</a>
		<a>
			<figure>
				<img src="../../images/hot4.jpeg">
				<figcaption>孙子涵陪你嗨</figcaption>
			</figure>
		</a>
		<a>
			<figure>
				<img src="../../images/hot5.jpeg">
				<figcaption>欧美范</figcaption>
			</figure>
		</a>
		<a>
			<figure>
				<img src="../../images/hot6.jpeg">
				<figcaption>爱情青春</figcaption>
			</figure>
		</a>
		</div>
		<br><br>
		<router-link to="/detail" class="guess_city">
        	<span>to detail</span>
    	</router-link> 
	</div>

</template>

<script>
</script>

<style lang="sass">

#center{
	#push{
		height: 94px;
		background: #f0d096;
	}
	#types{
		ul{
		    display: flex;
		    flex-flow: row wrap;
		    justify-content: space-between;
			li{
				list-type: none;
				flex: 0 0 33%;
				height: 40px;
				line-height: 40px;
				text-align: center;
				font-size: 12px;
				span{
					cursor: pointer;
				}

			}
		}
	}
	#hot-push{
		display: flex;
		flex-flow: row wrap;
		a{
			width: 33%;
			display: flex;
			justify-content: center;
			figure{
				margin-top: 3px;
				width: 100%;
				img{
					width: 100%;
					margin-bottom: 2px;
				}
				figcaption{
					text-align: center;
					font-size: 12px;
				}
			}
			
		}
	}
}

</style>