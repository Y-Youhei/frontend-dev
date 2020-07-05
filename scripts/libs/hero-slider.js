class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initialSwiper();
  }

  _initialSwiper() {
    return new Swiper(this.el, {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      // hoverしたときにグラブになる
      grabCursor: true,
      effect: "coverflow",
      // スライダーが中央揃えにする
      centeredSlides: true,
      // 画面上に何枚のスライドを表示するか
      slidesPerView: 1,
      // 切り替わる速度が1000ms
      speed: 1000,
      // ブレイクポイントの設定
      breakpoints: {
        1024: {
          slidesPerView: 2,
        },
      }
      //オートプレイができる→start()メソッドに移植した
      // autoplay: {
      //   delay: 2700,
      //   // マウスで操作した後もauto playが継続できる
      //   disableOnInteraction: false,
      // },
    });
  }

  start(options = {}) {
    options = Object.assign({
        delay: 4000,
        disableOnInteraction: false
      }, options);
    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }

  stop() {
    this.swiper.autoplay.stop();
  }
}
