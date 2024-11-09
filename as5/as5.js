import $ from "https://esm.sh/jquery";
$(function() {
	const video1 = $('#video1').get(0);
	const video2 = $('#video2').get(0);

	function handleVideoPlayback(videoElement, videoSection) {
		$(window).on('scroll', function() {
			const sectionTop = $(videoSection).offset().top;
			const sectionBottom = sectionTop + $(videoSection).height();
			const scrollTop = $(window).scrollTop();
			const windowHeight = $(window).height();

			// 確認影片區塊進入視窗範圍
			if (scrollTop + windowHeight > sectionTop && scrollTop < sectionBottom) {
				// 播放影片並顯示
				videoElement.play();
				$(videoElement).show();
			} else {
				// 暫停影片並隱藏
				videoElement.pause();
				$(videoElement).hide();
			}
		});
	}

	handleVideoPlayback(video1, '#video-section-1');
	handleVideoPlayback(video2, '#video-section-2');
});
