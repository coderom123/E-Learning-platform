
function viewCourse(url) {
  window.location.href = url;
}


function viewCourse(url) {
  window.location.href = url;
}

function enrollNow() {
  alert("You have enrolled successfully! Check your email for confirmation.");
}


function viewCourse(url) {
  window.location.href = url;
}

function enrollNow() {
  alert("You have enrolled successfully! Check your email for confirmation.");
}

let progress = 0;
function increaseProgress() {
  if (progress < 100) {
    progress += 20;
    document.getElementById('progressBar').style.width = progress + '%';
  } else {
    alert("You've completed all the lessons!");
  }
}