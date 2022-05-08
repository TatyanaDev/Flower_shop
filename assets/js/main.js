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
            '/assets/images/photo-gallery/bouquet-of-25-red-roses-with-eucalyptus.jpg',
          opts: {
            caption: 'Букет 25 красных роз с эвкалиптом',
            thumb:
              '/assets/images/photo-gallery/bouquet-of-25-red-roses-with-eucalyptus.jpg'
          }
        },
        {
          src: '/assets/images/photo-gallery/big-bouquet-of-daisies.jpg',
          opts: {
            caption: 'Большой букет ромашек',
            thumb: '/assets/images/photo-gallery/big-bouquet-of-daisies.jpg'
          }
        },
        {
          src: '/assets/images/photo-gallery/purple-hydrangea-bouquet.jpeg',
          opts: {
            caption: 'Букет из фиолетовой гортензии',
            thumb: '/assets/images/photo-gallery/purple-hydrangea-bouquet.jpeg'
          }
        },
        {
          src:
            '/assets/images/photo-gallery/a-large-bouquet-of-cornflowers.webp',
          opts: {
            caption: 'Большой букет васильков',
            thumb:
              '/assets/images/photo-gallery/a-large-bouquet-of-cornflowers.webp'
          }
        },
        {
          src:
            '/assets/images/photo-gallery/bouquet-of-raspberry-hydrangea.jpg',
          opts: {
            caption: 'Букет из малиновой гортензии',
            thumb:
              '/assets/images/photo-gallery/bouquet-of-raspberry-hydrangea.jpg'
          }
        },
        {
          src: '/assets/images/photo-gallery/bouquet-of-orange-lilies.png',
          opts: {
            caption: 'Букет оранжевых лилий',
            thumb: '/assets/images/photo-gallery/bouquet-of-orange-lilies.png'
          }
        },
        {
          src: '/assets/images/photo-gallery/lush-bouquet-of-23-peonies.jpg',
          opts: {
            caption: 'Пышный букет из 23 пионов',
            thumb: '/assets/images/photo-gallery/lush-bouquet-of-23-peonies.jpg'
          }
        },
        {
          src:
            '/assets/images/photo-gallery/mono-bouquet-of-colored-tulips.jpg',
          opts: {
            caption: 'Моно букет из крашенных тюльпанов',
            thumb:
              '/assets/images/photo-gallery/mono-bouquet-of-colored-tulips.jpg'
          }
        },
        {
          src: '/assets/images/photo-gallery/bouquet-of-tulips-сolumbus.jpg',
          opts: {
            caption: 'Букет тюльпанов Коламбус',
            thumb: '/assets/images/photo-gallery/bouquet-of-tulips-сolumbus.jpg'
          }
        },
        {
          src:
            '/assets/images/photo-gallery/bouquet-of-hydrangeas-3-colors.jpg',
          opts: {
            caption: 'Букет гортензий 3 цвета',
            thumb:
              '/assets/images/photo-gallery/bouquet-of-hydrangeas-3-colors.jpg'
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
