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
            'https://www.roza4u.ru/image/cache/catalog/25-krasnyh-roz-s-jevkaliptom/25-krasnyh-roz-s-jevkaliptom-1400x1400.jpg',
          opts: {
            caption: 'Букет 25 красных роз с эвкалиптом',
            thumb:
              'https://www.roza4u.ru/image/cache/catalog/25-krasnyh-roz-s-jevkaliptom/25-krasnyh-roz-s-jevkaliptom-1400x1400.jpg'
          }
        },
        {
          src:
            'https://kartinkin.net/uploads/posts/2022-02/1645775353_11-kartinkin-net-p-romashki-buket-kartinki-12.jpg',
          opts: {
            caption: 'Большой букет ромашек',
            thumb:
              'https://kartinkin.net/uploads/posts/2022-02/1645775353_11-kartinkin-net-p-romashki-buket-kartinki-12.jpg'
          }
        },
        {
          src:
            'https://zarum.ru/uploads/posts/2020-07/1596194854_c256ae5f-29b8-458a-b35e-5fc05aff4320.jpeg',
          opts: {
            caption: 'Букет из фиолетовой гортензии',
            thumb:
              'https://zarum.ru/uploads/posts/2020-07/1596194854_c256ae5f-29b8-458a-b35e-5fc05aff4320.jpeg'
          }
        },
        {
          src:
            'https://million-buketov.ru/thumb/2/AceEMTzmKQ9O0OXz_HoRaw/r/d/buket-iz-vasilkov-s-upakovkoy.jpg',
          opts: {
            caption: 'Большой букет васильков',
            thumb:
              'https://million-buketov.ru/thumb/2/AceEMTzmKQ9O0OXz_HoRaw/r/d/buket-iz-vasilkov-s-upakovkoy.jpg'
          }
        },
        {
          src:
            'https://static.insalescdn.com/images/products/1/3456/242945408/514-1.jpg',
          opts: {
            caption: 'Букет из малиновой гортензии',
            thumb:
              'https://static.insalescdn.com/images/products/1/3456/242945408/514-1.jpg'
          }
        },
        {
          src:
            'https://lh4.googleusercontent.com/-LK7MMd-SvbyI-wezk3n_gADj6U0kgAIJQ1neZv1KtxJk5fsmH24x6VrXg5ZC6GYKW-B0XLN5n33S7ZHDq7D-2-DUKvV3BtlODc5a1kQODlDYCd976-_GZo577LvcRrzsgPNAlo6',
          opts: {
            caption: 'Букет оранжевых лилий',
            thumb:
              'https://lh4.googleusercontent.com/-LK7MMd-SvbyI-wezk3n_gADj6U0kgAIJQ1neZv1KtxJk5fsmH24x6VrXg5ZC6GYKW-B0XLN5n33S7ZHDq7D-2-DUKvV3BtlODc5a1kQODlDYCd976-_GZo577LvcRrzsgPNAlo6'
          }
        },
        {
          src:
            'https://flostyle.ru/images/stories/virtuemart/product/eMLfVALh7S0.jpg',
          opts: {
            caption: 'Пышный букет из 23 пионов',
            thumb:
              'https://flostyle.ru/images/stories/virtuemart/product/eMLfVALh7S0.jpg'
          }
        },
        {
          src:
            'https://kiwiflowershop.com.ua/image/cache/catalog/photo_2020-10-11_18-00-40-601x800.jpg',
          opts: {
            caption: 'Моно букет из крашенных тюльпанов',
            thumb:
              'https://kiwiflowershop.com.ua/image/cache/catalog/photo_2020-10-11_18-00-40-601x800.jpg'
          }
        },
        {
          src:
            'https://www.roza4u.ru/image/cache/catalog/buket-tulips-columbus/kolumbus2-1400x1400.jpg',
          opts: {
            caption: 'Букет тюльпанов Коламбус',
            thumb:
              'https://www.roza4u.ru/image/cache/catalog/buket-tulips-columbus/kolumbus2-1400x1400.jpg'
          }
        },
        {
          src:
            'https://beru-buket.ru/images/stories/virtuemart/product/yaAUuw7LuYo.jpg',
          opts: {
            caption: 'Букет гортензий 3 цвета',
            thumb:
              'https://beru-buket.ru/images/stories/virtuemart/product/yaAUuw7LuYo.jpg'
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
