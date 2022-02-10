$(document).ready(function () {

    // stack track (moblies)

    var sliderWidth = $(".stack .out_track").width();
    var autoPlay

    var container = $(".stack .out_track")
    var track = $(".stack .out_track .skillname")
    var element = $(".stack .out_track .skillname li")


    // function setSlider() {
    //         sliderWidth = $(container).width();
    //     var sliderLen = $(element).length;
    //     var trackWidth = sliderWidth * sliderLen;

    //     $(track).width(trackWidth);
    //     $(element).width(sliderWidth);
        // $(track).css("marginLeft", -sliderWidth);
    //     console.log("s")
    // }

    function a() {
        var boundary = $(container).width();
        var itemCount = $(element).length;
        var itemMarg = parseInt($(element).css("marginLeft")) + parseInt($(element).css("marginRight")); 
        var itemPad = parseInt($(element).css("paddingLeft")) + parseInt($(element).css("paddingRight")); 
        var itemBorder = parseInt($(element).css("borderLeftWidth")) + parseInt($(element).css("borderRightWidth")); 
        var itemSpacing = itemMarg + itemPad + itemBorder;
        var winWidth = $(window).width();
        var itemWidth;

        if(winWidth <= 960) {
            itemWidth = boundary / 1 - itemSpacing;
        } else if(winWidth <= 1261) {
            itemWidth = boundary / 2 - itemSpacing;
        } else if(winWidth <= 1435) {
            itemWidth = boundary / 3 - itemSpacing;
        } else {
            itemWidth = boundary / 4 - itemSpacing;
        }

        $(track).width((itemWidth + itemSpacing) * itemCount);
        $(element).width(itemWidth)
        console.log(itemWidth)
    }

    // $(window).resize(setSlider);
    // setSlider();
    $(window).resize(a);
    a()
    $(".stack .out_track .skillname li:last-child").prependTo(track);

    // next button
    
    $(".stack .button_box .next").on("click", function(){
        $(track).stop().animate({
            "left" : -sliderWidth
        }, 1500, function(){
            $(track).css("left",0);
            $(".stack .out_track .skillname li:first-child").appendTo(track)
        })
    })
    
    // prev button

    $(".stack .button_box .prev").on("click", function(){
        $(track).stop().animate({
            "left" : sliderWidth
        }, 1500, function(){
            $(track).css("left",0);
            $(".stack .out_track .skillname li:last-child").prependTo(track)
        })
    })

    // autoPlay 관련

    autoPlay = setInterval(function(){
            $(track).stop().animate({
                "left" : -sliderWidth
            }, 1500 , function(){
                $(track).css("left",0);
                $(".stack .out_track .skillname li:first-child").appendTo(track);
            });
    }, 3000);

    // autoPlay 와 button 중복 방지
    
    $(".stack .button_box button").on("click", function(){
        clearInterval(autoPlay, 4000);
        var isAnim = $(track).is(":animated");
        if(!isAnim){
            autoPlay = setInterval(function(){
            
                $(track).stop().animate({
                    "left" : -sliderWidth
                }, 1500 , function(){
                    $(track).css("left",0);
                    $(".stack .out_track .skillname li:first-child").appendTo(track);
                });
            }, 3000);
        }
    })

    //  window width에 따른 stack 갯수 변화

    // function WidthBySetSlider(n){
    //     var sliderGap = $(element).css("marginRight");
    //         sliderGap = parseInt(sliderGap);
    //     var sliderReWidth = $(".wrap_track").width() / n - sliderGap / 2;
    //     var trackReWidth = (sliderLen * sliderReWidth) + (sliderGap * (sliderLen - 1));

    //     $(element).width(sliderReWidth);
    //     $(track).width(trackReWidth);
    // }

    // function fitSlider() {
    //     var winWidth = $(window).width();
    //     if (winWidth >= 1261){
    //         WidthBySetSlider(2);
    //     } else {
    //         WidthBySetSlider(1);
    //     }
    // }

    // console.log(fitSlider);

    // $(window).on("resize", function () {
    //     fitSlider()
    // })
    // fitSlider();

});