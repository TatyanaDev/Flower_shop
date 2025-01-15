$(document).ready(() => {
  new Swiper('.flowers-slider', {
    loop: true,
    slidesPerView: 6,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      320: {
        slidesPerView: 2
      },
      480: {
        slidesPerView: 3
      },
      992: {
        slidesPerView: 6
      }
    }
  })

  new Swiper('.reviews-slider', {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  })

  $('#alices-review,#yuris-review,#all-flowers').on('click', () => {
    $.fancybox.open(
      [
        {
          src:
            'assets/images/bouquets/bouquet-of-25-red-roses-with-eucalyptus.jpg',
          opts: {
            caption: 'Букет 25 красных роз с эвкалиптом',
            thumb:
              'assets/images/bouquets/bouquet-of-25-red-roses-with-eucalyptus.jpg'
          }
        },
        {
          src:
            'assets/images/bouquets/big-bouquet-of-daisies.jpg',
          opts: {
            caption: 'Большой букет ромашек',
            thumb:
              'assets/images/bouquets/big-bouquet-of-daisies.jpg'
          }
        },
        {
          src:
            'assets/images/bouquets/bouquet-of-purple-hydrangea.jpg',
          opts: {
            caption: 'Букет из фиолетовой гортензии',
            thumb:
              'assets/images/bouquets/bouquet-of-purple-hydrangea.jpg'
          }
        },
        {
          src:
            'assets/images/bouquets/big-bouquet-of-cornflowers.jpg',
          opts: {
            caption: 'Большой букет васильков',
            thumb:
              'assets/images/bouquets/big-bouquet-of-cornflowers.jpg'
          }
        },
        {
          src:
            'assets/images/bouquets/bouquet-of-raspberry-hydrangea.jpg',
          opts: {
            caption: 'Букет из малиновой гортензии',
            thumb:
              'assets/images/bouquets/bouquet-of-raspberry-hydrangea.jpg'
          }
        },
        {
          src:
            'assets/images/bouquets/bouquet-of-orange-lilies.jpg',
          opts: {
            caption: 'Букет оранжевых лилий',
            thumb:
              'assets/images/bouquets/bouquet-of-orange-lilies.jpg'
          }
        },
        {
          src:
            'assets/images/bouquets/lush-bouquet-of-23-peonies.jpg',
          opts: {
            caption: 'Пышный букет из 23 пионов',
            thumb:
              'assets/images/bouquets/lush-bouquet-of-23-peonies.jpg'
          }
        },
        {
          src:
            'assets/images/bouquets/mono-bouquet-of-painted-tulips.jpg',
          opts: {
            caption: 'Моно букет из крашенных тюльпанов',
            thumb:
              'assets/images/bouquets/mono-bouquet-of-painted-tulips.jpg'
          }
        },
        {
          src:
            'assets/images/bouquets/bouquet-of-columbus-tulips.jpg',
          opts: {
            caption: 'Букет тюльпанов Коламбус',
            thumb:
              'assets/images/bouquets/bouquet-of-columbus-tulips.jpg'
          }
        },
        {
          src:
            'assets/images/bouquets/bouquet-of-hydrangea-3-colors.jpg',
          opts: {
            caption: 'Букет гортензий 3 цвета',
            thumb:
              'assets/images/bouquets/bouquet-of-hydrangea-3-colors.jpg'
          }
        }
      ],
      {
        loop: true,
        thumbs: {
          autoStart: true
        }
      }
    )
  })
})
