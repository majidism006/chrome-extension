document.addEventListener('DOMContentLoaded', function() {
  const checkbox = document.getElementById('panic-done');
  const img = document.getElementById('panic-img');
  const sound = document.getElementById('panic-sound');
  const gifSrc = 'cute.gif';
  const staticSrc = 'plant.png';

  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      img.src = staticSrc;
    } else {
      img.src = gifSrc;
    }
    sound.currentTime = 0;
    sound.play();
  });
}); 