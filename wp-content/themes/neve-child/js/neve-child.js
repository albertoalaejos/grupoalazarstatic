document.addEventListener('DOMContentLoaded', function () {
  // Get all video elements with the class 'elementor-video'
  const videos = document.querySelectorAll('.elementor-video');

  // Add an event listener for each video
  videos.forEach(video => {
      video.addEventListener('play', function () {
          // Pause all other videos
          videos.forEach(otherVideo => {
              if (otherVideo !== video) {
                  otherVideo.pause();
              }
          });
      });
  });
});