$(window).on("load",function () {

    WaterFall();
    window.onscroll=function () {
        if(checkScrollside()){
            alert("到底了");
        }
    }
});
function WaterFall() {
    var boxs = $('.box');
    /*获取.box的带有border、padding的宽*/
    var boxW = boxs.outerWidth();
    /*求总共能放下多少列*/
    var columens = Math.floor($(window).width()/boxW);
    /*设置大盒子的宽 居中*/
    $('.main').css({
        'width':columens*boxW,
        'margin':'0 auto'
    });
    /*用来存放box的高度*/
    var boxH = [];
    /*遍历所有box  将第七个及以后的图片放到前六个中高度最小的图片之下  更新高度*/
    boxs.each(function (index,value) {
        var boxHeight = $(value).outerHeight();
        if(index<columens){
            boxH.push(boxHeight);
        }else{
            var minH = Math.min.apply(null,boxH);
            var minIndex = $.inArray(minH,boxH);
            $(value).css({
                'position':'absolute',
                'left':boxs.eq(minIndex).position().left,
                'top':minH
            });
            boxH[minIndex] += boxHeight;
        }

    })
};
function checkScrollside() {
    /*获取第一页最后一个元素的top值*/
    var boxs = $('.box');
    var lastBoxTop = boxs.last().offset().top + boxs.last().outerHeight();
    var scorllTop = $(window).scrollTop();
    return(lastBoxTop < (scorllTop+$(window).height()) ? true : false);
}