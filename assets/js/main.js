const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

lenis.stop();

const introTl = gsap.timeline({
  // defaults: {
  //   delay: 0.5,
  //   duration: 0.8,
  // },
  onComplete: function () {
    // alert();
    lenis.start();
  },
});

gsap.set(".sc-visual .text-area .text1", { xPercent: -50 });
gsap.set(".sc-visual .text-area .text2", { xPercent: 70 });

introTl.to(".sc-visual .bg-wrapper", {
  // delay: 0.2,
  clipPath: `circle(24.9% at 50% 50%)`,
});
introTl.addLabel("a");
introTl.to(".sc-visual .text-area .text1", 0.8, { xPercent: 0 }, "a");
introTl.to(".sc-visual .text-area .text2", 0.8, { xPercent: -87 }, "a");
introTl.to(".sc-visual .text-area .text3", 0.8, { xPercent: 75 }, "a");
// if (window.innerWidth <= 1025) {
//   introTl.to(".sc-visual .text-area .text1", 0.8, { xPercent: -10 }, "a");
//   introTl.to(".sc-visual .text-area .text2", 0.8, { xPercent: -160 }, "a"); // 조정된 값
//   introTl.to(".sc-visual .text-area .text3", 0.8, { xPercent: 70 }, "a"); // 조정된 값
// }

introTl.to(".sc-visual .bg-wrapper", {
  // delay: 0.5,
  clipPath: `circle(70.7% at 50% 50%)`,
});

gsap.to(".landmark .head-line", {
  scrollTrigger: {
    trigger: ".landmark .head-line",
    markers: false,
    start: "0% 70%",
    end: "0% 0%",
  },
  opacity: 1,
  yPercent: -10,
  stagger: 1,
});

gsap.to(".innovative .head-line", {
  scrollTrigger: {
    trigger: ".innovative .head-line",
    markers: false,
    start: "0% 70%",
    end: "0% 0%",
  },
  opacity: 1,
  yPercent: -10,
  stagger: 1,
});

gsap.to(".comprehensive .head-line", {
  scrollTrigger: {
    trigger: ".comprehensive .head-line",
    markers: false,
    start: "0% 70%",
    end: "0% 0%",
  },
  opacity: 1,
  yPercent: -10,
  stagger: 1,
});

gsap.to(".available .head-line", {
  scrollTrigger: {
    trigger: ".available .head-line",
    markers: false,
    start: "0% 70%",
    end: "0% 0%",
  },
  opacity: 1,
  yPercent: -10,
  stagger: 1,
});

gsap.to(".connecting .head-line", {
  scrollTrigger: {
    trigger: ".connecting .head-line",
    markers: false,
    start: "0% 70%",
    end: "0% 0%",
  },
  opacity: 1,
  yPercent: -10,
  stagger: 1,
});
gsap.to(".become .head-line", {
  scrollTrigger: {
    trigger: ".become .head-line",
    markers: false,
    start: "0% 70%",
    end: "0% 0%",
  },
  opacity: 1,
  yPercent: -10,
  stagger: 1,
});

gsap.set("[data-toggle]", { opacity: 0, y: 50 });

const menuMotion = gsap.to("[data-toggle]", {
  opacity: 1,
  y: 0,
  stagger: 0.1,
  paused: true,
});

$("[data-scroll]").each(function (i, el) {
  console.log();

  gsap.to($(this).find("img"), {
    scrollTrigger: {
      trigger: el,
      start: "0% 100%", //트리기시작기준 //윈도우기준
      end: "100% 0%",
      markers: false,
      scrub: 1,
    },
    yPercent: -10,
    ease: "none",
  });
});

gsap.from(".innovative .list-item", {
  scrollTrigger: {
    trigger: ".innovative .inner .content-list",
    start: "0% 70%", //트리기시작기준 //윈도우기준
    end: "100% 0%",
    markers: false,
  },

  opacity: 0,
  stagger: 0.1,
  yPercent: 10,
});

$(window).scroll(function () {
  var scrollPosition = $(this).scrollTop();
  if (scrollPosition >= 100) {
    $(".gnb").addClass("on");
  } else {
    $(".gnb").removeClass("on");
  }
});

$(".detail-menu, .btn-box").click(function () {
  menuMotion.restart();
  $(".menu-box").addClass("on");
  $(".dimmed").addClass("on");
});

$(".close").click(function () {
  $(".menu-box").removeClass("on");
  $(".dimmed").removeClass("on");
});

$(".peaturebanner .title-box .title").hover(function () {
  idx = $(this).index();

  $(this).addClass("active").siblings().removeClass("active");

  $(".peaturebanner .img")
    .eq(idx)
    .addClass("active")
    .siblings()
    .removeClass("active");
});

$(".getBtn-wrapper").hover(
  function () {
    $(this).addClass("active");
  },
  function () {
    $(this).removeClass("active");
  }
);

$(".getBtn-wrapper").click(function () {
  $(".dimmed").toggleClass("on");
  $(".fix-alarm").toggleClass("active");
});

$("footer .header-box .join-box ").click(function (e) {
  e.preventDefault();
  $(".dimmed").toggleClass("on");
  $(".fix-alarm").toggleClass("active");
});

$(".close2").click(function () {
  $(".fix-alarm").toggleClass("active");
  $(".dimmed").removeClass("on");
});

$(".line").hover(
  function () {
    $(this).addClass("active");
  },
  function () {
    $(this).removeClass("active");
  }
);

$(".available .content-box .img-content").hover(
  function () {
    $(this).addClass("active");
  },
  function () {
    $(this).removeClass("active");
  }
);

$("[data-menu]").click(function () {
  var dataMenu = $(this).data("menu"); // 데이터 속성 값 가져오기
  $("#" + dataMenu).toggleClass("active"); // 연결된 side-nav를 토글
});

$("[data-scroll]").click(function () {});

$(".connecting .content-box").hover(function () {
  $(this).addClass("active").siblings().removeClass("active");
  $(".connecting .desc").addClass("on");

  $(this).find(".desc").removeClass("on");
});

if (matchMedia("screen and (max-width: 1230px)").matches) {
  //화면 크기가 1230px이하일때
  const active = $(".connecting .content-box").hover(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  console.log(active);
}
$("footer .img-wrapper .img-box").hover(function () {
  $("footer .img-wrapper .img-box").removeClass("active siblings");

  $(this).addClass("active");
  $(this).prev().addClass("siblings");
  $(this).next().addClass("siblings");
});

$("footer .img-wrapper").mouseleave(function () {
  $("footer .img-wrapper .img-box").removeClass("active siblings");
});

$(document).mousemove(function (e) {
  x = e.clientX;
  y = e.clientY;

  gsap.to("footer .text", {
    x: x,
    y: y,
  });
});

imgTextArr = [
  "Home",
  "Building",
  "Story",
  "Location",
  "Availability",
  "Contact",
];
$("footer .img-wrapper .img-box").hover(
  function () {
    idx = $(this).index();

    $("footer .text").addClass("show").text(imgTextArr[idx]);
  },
  function () {
    $("footer .text").removeClass("show");
  }
);

new Swiper("footer .swiper", {
  slidesPerView: 6,
  spaceBetween: "20",
});

$(".mobile-peaturebanner .list li").click(function () {
  // 클릭한 li 요소의 "on" 클래스를 토글합니다.
  $(this).toggleClass("on");

  // 클릭한 li 요소 내부의 .sub-item을 토글하여 보이거나 숨깁니다.
  $(this).find(".sub-item").stop().slideToggle();

  // 클릭한 li 요소 내부의 svg 아이콘의 "on" 클래스를 토글하여 상태를 변경합니다.
  $(this).find("svg").toggleClass("on");

  // 다른 li 요소의 .sub-item을 닫고 "on" 클래스를 제거합니다.
  $(".mobile-peaturebanner .list li")
    .not(this)
    .removeClass("on")
    .find(".sub-item")
    .stop()
    .slideUp();

  // 다른 li 요소의 svg 아이콘의 "on" 클래스를 제거합니다.
  $(".mobile-peaturebanner .list li").not(this).find("svg").removeClass("on");
});
