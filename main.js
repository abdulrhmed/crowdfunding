// book making
document.getElementById("bookm").addEventListener("click", function () {
  if (this.innerHTML === "Bookmark") {
    this.innerHTML = `Bookmarked`;
    this.style.color = "hsl(176, 72%, 28%)";
    // Save state to localStorage
    localStorage.setItem("bookmarkState", "Bookmarked");
  } else {
    this.innerHTML = `Bookmark`;
    this.style.color = "hsl(0, 0%, 48%)";
    // Save state to localStorage
    localStorage.setItem("bookmarkState", "Bookmark");
  }
});

window.onload = function () {
  var state = localStorage.getItem("bookmarkState");
  var bookmarkButton = document.getElementById("bookm");
  if (state === "Bookmarked") {
    bookmarkButton.innerHTML = `Bookmarked`;
    bookmarkButton.style.color = "hsl(176, 72%, 28%)";
  } else {
    bookmarkButton.innerHTML = `Bookmark`;
    bookmarkButton.style.color = "hsl(0, 0%, 48%)";
  }
};

// open a back

document.getElementById("taha").addEventListener("click", function () {
  var back = document.querySelector(".back");
  back.style.display = "block";
  scroll({
    top: 0,
    behavior: "smooth",
  });
  var overlay2 = document.querySelector(".overlay2");
  overlay2.style.display = "block";
});
document.getElementById("taha1").addEventListener("click", function () {
  var back = document.querySelector(".back");
  back.style.display = "block";
  scroll({
    top: 0,
    behavior: "smooth",
  });
  var overlay2 = document.querySelector(".overlay2");
  overlay2.style.display = "block";
});

// close a back
document.getElementById("rowan").addEventListener("click", function () {
  var back = document.querySelector(".back");
  var mohamed0 = document.getElementById("mohamed0");
  var mohamed = document.getElementById("mohamed");
  var mohamed1 = document.getElementById("mohamed1");
  mohamed.checked = false;
  mohamed1.checked = false;
  mohamed0.checked = false;
  back.style.display = "none";
  document.getElementById("oppo1").style.display = "none";
  document.getElementById("oppo2").style.display = "none";
  document.getElementById("oppo3").style.display = "none";
  document.getElementById("oppo4").style.display = "none";
  document.getElementById("oppo5").style.display = "none";
  document.getElementById("oppo6").style.display = "none";
  var overlay2 = document.querySelector(".overlay2");
  overlay2.style.display = "none";
});

//0000000
document.getElementById("mohamed0").addEventListener("click", function () {
  document.getElementById("oppo5").style.display = "block";
  document.getElementById("oppo6").style.display = "flex";
});
document.getElementById("mohamed").addEventListener("click", function () {
  document.getElementById("oppo1").style.display = "block";
  document.getElementById("oppo2").style.display = "flex";
});
document.getElementById("mohamed1").addEventListener("click", function () {
  document.getElementById("oppo3").style.display = "block";
  document.getElementById("oppo4").style.display = "flex";
});

//0000000

let button0 = document.getElementById("bnt0");
let input0 = document.getElementById("number");

// إضافة مستمع الأحداث
button0.addEventListener("click", function () {
  // طباعة القيمة في الكونسول
  console.log(input0.value);
  // تفريغ الإدخال
  input0.value = "";

  var thanks = document.querySelector(".thanks");
  thanks.style.display = "block";
  var back = document.querySelector(".back");
  back.style.display = "none";
  var overlay = document.querySelector(".overlay");
  overlay.style.transform = "translatey(0)";

  scroll({
    top: 0,
    behavior: "smooth",
  });
});

let button1 = document.getElementById("bnt1");
let input1 = document.querySelector(".number1");

// إضافة مستمع الأحداث
button1.addEventListener("click", function () {
  // طباعة القيمة في الكونسول
  console.log(input1.value);
  // تفريغ الإدخال
  input1.value = "";

  var thanks = document.querySelector(".thanks");
  thanks.style.display = "block";
  var back = document.querySelector(".back");
  back.style.display = "none";
  var overlay = document.querySelector(".overlay");
  overlay.style.transform = "translatey(0)";
  var body = document.querySelector("body");
  body.style.overflowY = "hidden";
  scroll({
    top: 0,
    behavior: "smooth",
  });
});

let button2 = document.getElementById("bnt2");
let input2 = document.querySelector(".number2");

// إضافة مستمع الأحداث
button2.addEventListener("click", function () {
  // طباعة القيمة في الكونسول
  console.log(input0.value);
  // تفريغ الإدخال
  input2.value = "";

  var thanks = document.querySelector(".thanks");
  thanks.style.display = "block";
  var back = document.querySelector(".back");
  back.style.display = "none";
  var overlay = document.querySelector(".overlay");
  overlay.style.transform = "translatey(0)";
  var body = document.querySelector("body");
  body.style.overflowY = "hidden";
  scroll({
    top: 0,
    behavior: "smooth",
  });
});

// open maun , close maun
document.querySelector(".got").addEventListener("click", function () {
  var thanks = document.querySelector(".thanks");
  thanks.style.display = "none";
  var overlay = document.querySelector(".overlay");
  overlay.style.transform = "translatey(-100%)";
  var body = document.querySelector("body");
  body.style.overflowY = "visible";

  var overlay2 = document.querySelector(".overlay2");
  overlay2.style.display = "none";
});

let icon = document.querySelector(".icon");
let close = document.querySelector(".close");
let saidbar = document.querySelector(".saidbar");
let body = document.querySelector("body");

function ic() {
  saidbar.style.transform = " translateX(0)";
  body.style.overflowY = "hidden";
}
function clo() {
  saidbar.style.transform = "translateX(100%)";
  body.style.overflowY = "visible";
}







///--------------
var menuOpen = false;
var originalSrc = 'img/icon-hamburger.png';
var closeSrc = 'img/icon-close-menu.png';
var said =document.querySelector('.header-ba ul')
document.getElementById('hamburger').addEventListener('click', function() {
    if (!menuOpen) {
        this.src = closeSrc;
        menuOpen = true;
        said.style.display='flex'
        var overlay3 = document.querySelector(".overlay3");
        overlay3.style.display = "block";
    } else {
        this.src = originalSrc;
        menuOpen = false;
        said.style.display='none'
        var overlay3 = document.querySelector(".overlay3");
        overlay3.style.display = "none";
    }
});










function inputHandler(e) {
  if (e.target.value.charAt(0) !== '$') {
      e.target.value = '$' + e.target.value;
  }
}
