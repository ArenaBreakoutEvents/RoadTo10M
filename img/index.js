// 页面切换 start
$('.btn_language').click(function (event) {
    $('.language').toggleClass('act');
});
$('.language_list a').click(function (event) {
    $('.language').removeClass('act');
});
$('.s3_tab a').click(function (event) {
    var index = $(this).index();
    $(this).addClass('act').siblings().removeClass('act');
    $('.s3_box').eq(index).addClass('act').siblings().removeClass('act');
});
// 页面切换 end

// 视频弹窗
function onYouTubeIframeAPIReady() {
    pop.youtubeFlag = !0
}!(function() {
    var pop = {};
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var popPlayer = {};
    pop.youtubeFlag = false;

    function onPlayerStateChange(event) {
        if (event.data == 0) {
            pop.hidevideopop();
        }
    }
    pop.pop = function(e) {
        $(e).show();
        $('.b-bg').show();
    }
    pop.hidepop = function() {
        $('.b-bg>div').hide();
        $('.b-bg').hide();
    }
    pop.hidevideopop = function() {
        pop.hidepop()
        $('.pop-loading').removeClass('loaded');
        $('#pop-player').html('');
        if (popPlayer) {
            popPlayer.destroy();
        }
    }
    pop.popVid = function(v) {
        if (v.length < 10) {
            alert('Coming soon!');
            return;
        }
        if (pop.youtubeFlag) {
            popPlayer = new YT.Player('pop-player', {
                height: '100%',
                width: '100%',
                videoId: v,
                playerVars: {
                    rel: 0,
                    playsinline: 1
                },
                events: {
                    'onReady': function(event) {
                        $('.pop-loading').addClass('loaded');
                        event.target.playVideo();
                    },
                    'onStateChange': onPlayerStateChange
                }
            });
            pop.pop(".pop-vid");
        } else {
            alert('loading...');
        }
    }

    window.pop = pop;

    $('.b-bg').on('click', function() {
        pop.hidevideopop();
    })
})();

