<template>
	<div id="center">
		<div id="push">
			<ul id="slide" class="clearfix">
				<li class="item1">
					<img src="../../images/push1.jpeg">
				</li>
				<li class="item2">
					<img src="../../images/push2.jpeg">
				</li>
				<li class="item3">
					<img src="../../images/push3.jpeg">
				</li>
				<li class="item4">
					<img src="../../images/push4.jpeg">
				</li>
				<li class="item5">
					<img src="../../images/push5.jpeg">
				</li>
			</ul>

		</div>
		<div id="types">
			<ul>
				<li v-for = "item in types">
					<span>{{item}}</span>
				</li>
			</ul>
		</div>
		<div id="hot-push">
		<div>热门推荐</div>
		<span id='go'> > </span>
		<a v-for = "(item, index) in hotpush">
			<figure>
				<img v-if="index==0" src="../../images/hot1.jpeg">
				<img v-if="index==1" src="../../images/hot2.jpeg">
				<img v-if="index==2" src="../../images/hot3.jpeg">
				<img v-if="index==3" src="../../images/hot4.jpeg">
				<img v-if="index==4" src="../../images/hot5.jpeg">
				<img v-if="index==5" src="../../images/hot6.jpeg">
				<figcaption>《敢》为人先</figcaption>
			</figure>
		</a>
		</div>
		<div id="day30">
			<h4>每日推荐30首</h4>
			<span id="go"> > </span>
			<section id='content'>
				<ul>
					<li v-for = "(item, index) in musiclist">
						<section>
							<img  v-if="index == 0" src="../../images/day1.jpeg">
							<img  v-if="index == 1" src="../../images/day2.jpeg">
							<img  v-if="index == 2" src="../../images/day3.jpeg">
							<img  v-if="index == 3" src="../../images/day4.jpeg">
							<img  v-if="index == 4" src="../../images/day5.jpeg">
							
						</section>
						<section>
							<div>
								<h6>{{item.name}}</h6>
								<p>{{item.desc}}</p>
							</div>
						</section>
					</li>

				</ul>
			</section>
		</div>
	</div>

</template>

<script>

import {daymusic, types, hotpush} from '../../service/getData'
export default{
	data(){
		return{
			musiclist: [],
			types:[],
			hotpush: []
		}
	},
	mounted(){
		daymusic().then(res => {
			this.musiclist = res;
		})
		types().then(res => {
			this.types = res;
		})
		hotpush().then(res => {
			this.hotpush = res;
		})
	}
}

</script>

<style lang="sass">

@-webkit-keyframes slide{
	0%{
		-webkit-transform: translateX(0px);
	}
	12%{
		-webkit-transform: translateX(0px);
	}
	22%{
		-webkit-transform: translateX(-20%);
	}
	34%{
		-webkit-transform: translateX(-20%);
	}
	44%{
		-webkit-transform: translateX(-40%);
	}
	56%{
		-webkit-transform: translateX(-40%);
	}
	66%{
		-webkit-transform: translateX(-60%);
	}
	78%{
		-webkit-transform: translateX(-60%);
	}
	88%{
		-webkit-transform: translateX(-80%);
	}
	100%{
		-webkit-transform: translateX(-80%);
	}
	
	
}
.clearfix:after{
	display: block;
	content: '';
	clear: both;
}

#center{
	#push{
		height: 130px;
		background: #f0d096;
		overflow: hidden;
		position: relative;
		#slide{
			position: absolute;
			top:0;
			right:-400%;
			height: 100%;
			width: 500%;
			-webkit-animation: slide 10s linear alternate infinite;
			li{
				float: left;
				height: 100%;
				width: 20%;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
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
				margin: 3px 0;
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