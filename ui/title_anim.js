var svg_dir = '../assets/title_anim/';
var current_frame = 0;
var playing = false;

function playAnimation() {
  if (playing) {
    if (current_frame == 43) {
      current_frame = 1;
      setTimeout(playAnimation, 2000);
      return;
    } else if (current_frame == 13) {
      current_frame += 2;
    } else {
      current_frame++;
    }
    console.log(svg_dir + current_frame + '.svg');
    changeImage(svg_dir + current_frame + '.svg');
    setTimeout(playAnimation, 40);
  }
}

function changeImage(new_src) {
  document.getElementById("title_anim").src = new_src;
}

function startPlaying() {
  if (!playing) {
    playing = true;
    playAnimation();
  }
}