
jQuery(document).ready(function($) {
	/**
	 * 图片滚动控制
	 */
	$('#carouFredsel-1').carouFredSel({
        next : "#carousel-next-1",
        prev : "#carousel-prev-1",
        auto: false,
        scroll: {items : 1}
    });

    $(window).resize(function() {
        $('#carouFredsel-1').carouFredSel({
            next : "#carousel-next-1",
            prev : "#carousel-prev-1",
            auto: false,
            scroll: {items : 1}
        });
    })
	
	$('#carouFredsel-2').carouFredSel({
        next : "#carousel-next-2",
        prev : "#carousel-prev-2",
        auto: false,
        scroll: {items : 1}
    });

    $(window).resize(function() {
        $('#carouFredsel-2').carouFredSel({
            next : "#carousel-next-2",
            prev : "#carousel-prev-2",
            auto: false,
            scroll: {items : 1}
        });
    })
	
	$('#carouFredsel-3').carouFredSel({
        next : "#carousel-next-3",
        prev : "#carousel-prev-3",
        auto: false,
        scroll: {items : 1}
    });

    $(window).resize(function() {
        $('#carouFredsel-3').carouFredSel({
            next : "#carousel-next-3",
            prev : "#carousel-prev-3",
            auto: false,
            scroll: {items : 1}
        });
    })
	
	$('#carouFredsel-4').carouFredSel({
        next : "#carousel-next-4",
        prev : "#carousel-prev-4",
        auto: false,
        scroll: {items : 1}
    });

    $(window).resize(function() {
        $('#carouFredsel-4').carouFredSel({
            next : "#carousel-next-4",
            prev : "#carousel-prev-4",
            auto: false,
            scroll: {items : 1}
        });
    })
	
    $('#carouFredsel-5').carouFredSel({
        next : "#carousel-next-5",
        prev : "#carousel-prev-5",
        auto: false,
        scroll: {items : 1}
    });

    $(window).resize(function() {
        $('#carouFredsel-5').carouFredSel({
            next : "#carousel-next-5",
            prev : "#carousel-prev-5",
            auto: false,
            scroll: {items : 1}
        });
    });
    
    $('#carouFredsel-6').carouFredSel({
        next : "#carousel-next-6",
        prev : "#carousel-prev-6",
        auto: false,
        scroll: {items : 1}
    });

    $(window).resize(function() {
        $('#carouFredsel-6').carouFredSel({
            next : "#carousel-next-6",
            prev : "#carousel-prev-6",
            auto: false,
            scroll: {items : 1}
        });
    });
    
    $('#carouFredsel-7').carouFredSel({
        next : "#carousel-next-7",
        prev : "#carousel-prev-7",
        auto: false,
        scroll: {items : 1}
    });

    $(window).resize(function() {
        $('#carouFredsel-7').carouFredSel({
            next : "#carousel-next-7",
            prev : "#carousel-prev-7",
            auto: false,
            scroll: {items : 1}
        });
    });
    
    $('#carouFredsel-8').carouFredSel({
        next : "#carousel-next-8",
        prev : "#carousel-prev-8",
        auto: false,
        scroll: {items : 1}
    });

    $(window).resize(function() {
        $('#carouFredsel-8').carouFredSel({
            next : "#carousel-next-8",
            prev : "#carousel-prev-8",
            auto: false,
            scroll: {items : 1}
        });
    });
    
    $('#carouFredsel-9').carouFredSel({
        next : "#carousel-next-9",
        prev : "#carousel-prev-9",
        auto: false,
        scroll: {items : 1}
    });

    $(window).resize(function() {
        $('#carouFredsel-9').carouFredSel({
            next : "#carousel-next-9",
            prev : "#carousel-prev-9",
            auto: false,
            scroll: {items : 1}
        });
    });
    
    $('#carouFredsel-10').carouFredSel({
        next : "#carousel-next-10",
        prev : "#carousel-prev-10",
        auto: false,
        scroll: {items : 1}
    });

    $(window).resize(function() {
        $('#carouFredsel-10').carouFredSel({
            next : "#carousel-next-10",
            prev : "#carousel-prev-10",
            auto: false,
            scroll: {items : 1}
        });
    });
    
    $('#carouFredsel-11').carouFredSel({
        next : "#carousel-next-11",
        prev : "#carousel-prev-11",
        auto: false,
        scroll: {items : 1}
    });

    $(window).resize(function() {
        $('#carouFredsel-11').carouFredSel({
            next : "#carousel-next-11",
            prev : "#carousel-prev-11",
            auto: false,
            scroll: {items : 1}
        });
    });
    
    $('#carouFredsel-12').carouFredSel({
        next : "#carousel-next-12",
        prev : "#carousel-prev-12",
        auto: false,
        scroll: {items : 1}
    });

    $(window).resize(function() {
        $('#carouFredsel-12').carouFredSel({
            next : "#carousel-next-12",
            prev : "#carousel-prev-12",
            auto: false,
            scroll: {items : 1}
        });
    });
    
    $('#carouFredsel-13').carouFredSel({
        next : "#carousel-next-13",
        prev : "#carousel-prev-13",
        auto: false,
        scroll: {items : 1}
    });

    $(window).resize(function() {
        $('#carouFredsel-13').carouFredSel({
            next : "#carousel-next-13",
            prev : "#carousel-prev-13",
            auto: false,
            scroll: {items : 1}
        });
    });
    
    $('#carouFredsel-14').carouFredSel({
        next : "#carousel-next-14",
        prev : "#carousel-prev-14",
        auto: false,
        scroll: {items : 1}
    });

    $(window).resize(function() {
        $('#carouFredsel-14').carouFredSel({
            next : "#carousel-next-14",
            prev : "#carousel-prev-14",
            auto: false,
            scroll: {items : 1}
        });
    });
});

/**
 * chart图片详情 创建图表按钮点击事件
 * @param me
 */
function clickImageToDrawChart(me){
	var type = me.dataset.type;
	$.prettyPhoto.close();
	window.location.href='#/drawCharts?c="effectScatter-map"&type='+type;
}