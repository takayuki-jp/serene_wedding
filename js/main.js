document.addEventListener("DOMContentLoaded", function() {
  // sp-menu
  const header = document.querySelector(".header");
  const menuBtn = document.querySelector(".header__spMenuBtn");
  const body = document.body;

  menuBtn.addEventListener("click", () => {
    header.classList.toggle('panelActive');
    body.classList.toggle('noScroll');
  });


  //splide
  new Splide(".splide", {
    autoplay: false,
    interval: 3000,
    speed: 400,
    rewind: true,
    perPage: 3,
    clones: 3,
    gap: 40,
    padding: 35,
    focus: "center",
    arrows: false,
    // pagination: false,
    // trimSpace: false,
    classes: {
      pagination: "splide__pagination pickup__splidePagination",
      page: "splide__pagination__page pickup__splidePage",
    },
    breakpoints: {
      800: {
        perPage: 2,
      },
      600: {
        perPage: 1,
      }
    },
  }).mount();


  //plan
  const tabItems = document.querySelectorAll(".plan__tabItem");
  const planBlocks = document.querySelectorAll(".plan__block");

  tabItems.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();

      //全てのタブとブロックをリセット（非表示）にする
      tabItems.forEach(item => item.classList.remove('is-active'));
      planBlocks.forEach(block => block.classList.remove('is-active'));

      //クリックされたタブをアクティブにし、対応するブロックを表示
      tab.classList.add("is-active");
      planBlocks[index].classList.add("is-active");
    });
  });

  //初期状態では最初のブロックを表示
  tabItems[0].classList.add('is-active');
  planBlocks[0].style.display = 'block';


});