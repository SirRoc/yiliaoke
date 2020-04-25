<template>
    <div class="voice-tip">
        <div class="content">
            <i class="icon-voice"></i>
            <div class="voice-time">
                <ol class="process">
                    <li class="process1 "></li>
                    <li class="process2"></li>
                    <li class="process3"></li>
                    <li class="process4 active"></li>
                    <li class="process5 active"></li>
                </ol>
                <div class="count-time">{{count}}/60s</div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		data() {
			return {
                count: 0
			}
		},
        created () {
            let timer = setInterval(() => {
                this.count++;
                if (this.count===60) {
                    this.count = 0;
                    this.$emit('done', true);
                    clearInterval(timer);
                }
            }, 1000);
        },
        beforeDestroy () {
            this.$emit('done', true);
        },
		methods: {
			
		}
	}
</script>

<style lang="stylus" scoped>
.voice-tip {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
   
    .content {
        display: flex;
        justify-content center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        background: rgba(0,0,0,.8);
        border-radius: 10px;
        padding: 40px 0;
        .icon-voice {
            width: 70px;
	        height: 110px; 
            background: url('../assets/img/voice2.png') center center no-repeat;
            background-size: 100%;
        }
        .voice-time {
            display: flex;
            flex-direction column;
            justify-content space-between;
            text-align left;
            margin-left: 20px;
            font-size: .4rem;
            color: white;
        }
        ol {
            margin-top: 20px;
            li {
                margin-bottom: .1rem;
                height: 0.13rem;
                background-color: #ffffff;
                border-radius: 4px;
            }
            li.active {
                background-color: #fd6e71;
            }
           
        }
        .process {

             .process1{
                width: 1.57rem;
            }
            .process2{
                width: 1.38rem;
            }
            .process3{
                width: 1.15rem;
            }
            .process4{
                width: .96rem;
            }
            .process5{
                width: .76rem;
            }
            .count-time {
                margin-top: 10px;
            }
        }
    }
        
}
</style>
