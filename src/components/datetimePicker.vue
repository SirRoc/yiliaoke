<template>
    <div class="datatime-picker-wrap">
        <input style="" class="" type="text" style="display: none;">
		<div class="sp-date">
			选择时间
		</div> 
    </div>
</template>


<style scoped>
    input{
        line-height: .26rem;
        border-radius: 5px;
        padding: .03rem .05rem;
    }
</style>
<script>

    import '../assets/js/jq.js'
    import '../assets/js/jquery.selector-px.js'

    export default {
        data () {
            return {

            }
        },
        props: {
            height: {
                type: String,
                default: '.26rem',
            },
            width: {
                type: String,
                default: '100',
            },
            time: {
                type: Boolean,
                default: false,
            },
        },
        watch:{

        },
        methods: {
            time2str(t){
                return t>9?t:'0'+t;
            },
            initCss(){
                $(".sp-date").css({"height":this.height,"width":this.width+'%'});
            }
        },
        mounted(){

            let year = new Date().getFullYear();
            let month = this.time2str(new Date().getMonth()+1);
            let date = this.time2str(new Date().getDate());
            let hours = this.time2str(new Date().getHours());
            let mins = this.time2str(new Date().getMinutes());

            this.initCss();
            $('.sp-date').val(year + '-' + month + '-' + date );

            // 年月日 时分
            $.dateSelector({
                evEle: '.sp-date',
                title:'日期和时间',
                year: year,
                month: month,
                day: date,
                hour: hours,
                minute: mins,
                startYear: year,
                endYear: year+20,
                timeBoo: this.time,  //是否显示时分
                afterAction:  (d1, d2, d3, d4, d5)=>{
                    $('.sp-date').val(d1 + '-' + d2 + '-' + d3 );
                    this.$emit('getTimestamp',d1 + '-' + d2 + '-' + d3  );
                }
            });
        },
        activated () {

        },

    }
</script>