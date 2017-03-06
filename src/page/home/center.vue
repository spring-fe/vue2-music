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
		<div>热门推荐</div>
		<span id='go'> > </span>
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
		<div id="day30">
			<h4>每日推荐30首</h4>
			<span id="go"> > </span>
			<section id='content'>
				<ul>
					<li>
						<section>
							<img src="../../images/day1.jpeg">
						</section>
						<section>
							<div>
								<h6>I Can't Change</h6>
								<p>Sophie Zeimani ; A Decade of Dream...</p>
							</div>
						</section>
					</li>
					<li>
						<section>
							<img src="../../images/day2.jpeg">
						</section>
						<section>
							<h6>鸽子吧</h6>
							<p>尧十三 麻油叶？不叫事儿!</p>
						</section>
					</li>
					<li>
						<section>
							<img src="../../images/day3.jpeg">
						</section>
						<section>
							<div>
								<h6>Dance Magic</h6>
								<p>Rebecca Shiochet/Ashleigh Bail/Shan...</p>
							</div>
						</section>
					</li>
					<li>
						<section>
							<img src="../../images/day4.jpeg">
						</section>
						<section>
							<h6>不说出的温柔</h6>
							<p>范逸臣 不说出的温柔</p>
						</section>
					</li>
					<li>
						<section>
							<img src="../../images/day5.jpeg">
						</section>
						<section>
							<div>
								<h6>我们的明天</h6>
								<p>鹿晗 重返20岁 电影原声带 《重返20...</p>
							</div>
						</section>
					</li>

				</ul>
			</section>
		</div>
		
		<br><br>
		<router-link to="/detail" class="guess_city">
        	<span>go</span>
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
	#go{
			position: absolute;
			top: 16px;
			right: 10px;
			font-size: 12px;
			display: block;
			width: 15px;
			height: 15px;
			line-height: 16px;
			border-radius: 50%;
			border: 1px solid grey;
			text-align: center;

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
	#day30{
		position: relative;
		h4{
			text-align: center;
			margin-top: 28px;
			font-weight: normal;
		}
		#go{
			top: 2px;

		}
		#content{
			ul{
				li{
					display: -webkit-box;
					display: -webkit-flex;
					display: -ms-flexbox;
					display:  flex;
					padding: 1px 0;
					img{
						width: 56px;
						height: 56px;
						margin-right: 10px;
					}
					section:last-child{
						-webkit-box-flex: 1;
						-webkit-flex: auto;
						-ms-flex: auto;
						flex: auto;
						display: flex;
						flex-direction: column;
						justify-content: center;
						p{
							margin-top: 4px;
							font-size: 12px;
						}
					}
				}
			}
		}
	}
	#hot-push{
		display: flex;
		flex-flow: row wrap;
		position: relative;
		div{
			width: 100%;
			height: 30px;
			line-height: 30px;
			text-align: center;
			font-size: 14px;
			margin-top: 8px;
		}
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