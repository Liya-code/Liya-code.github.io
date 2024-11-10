$(function() {
	const video1 = $('#video1').get(0);
	const video2 = $('#video2').get(0);

	function handleVideoPlayback(videoElement, videoSection, startOffset, endOffset) {
		$(window).on('scroll', function() {
			const sectionTop = $(videoSection).offset().top;
			const sectionBottom = sectionTop + $(videoSection).height();
			const scrollTop = $(window).scrollTop();
			const windowHeight = $(window).height();

			// 確認影片區塊進入視窗範圍
			if (scrollTop + windowHeight > sectionTop && scrollTop < sectionBottom) {
				const relativeScroll = scrollTop + windowHeight - sectionTop;
				const scrollRange = sectionBottom - sectionTop;
				const playbackProgress = Math.min(1, relativeScroll / scrollRange);

				// 設定影片播放進度
				videoElement.currentTime = videoElement.duration * playbackProgress;

				// 播放影片並顯示
				if (videoElement.paused) videoElement.play();
				$(videoElement).show();
			} else {
				// 暫停影片並隱藏
				videoElement.pause();
				$(videoElement).hide();
			}
		});
	}

	// 設定第一個和第二個影片區塊
	handleVideoPlayback(video1, '#video-section-1');
	handleVideoPlayback(video2, '#video-section-2');
});
