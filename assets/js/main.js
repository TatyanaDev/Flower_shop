$(document).ready(function () {
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

  $('#review-1,#review-2,#all-flowers').on('click', function () {
    $.fancybox.open(
      [
        {
          src:
            'https://elflora.ru/upload/iblock/253/25389ad2e3b6cb6efc93165865725d83.jpg',
          opts: {
            caption: 'Букет 25 красных роз с эвкалиптом',
            thumb:
              'https://elflora.ru/upload/iblock/253/25389ad2e3b6cb6efc93165865725d83.jpg'
          }
        },
        {
          src:
            'https://beru-buket.ru/images/stories/virtuemart/product/romashka-romashka.jpg',
          opts: {
            caption: 'Большой букет ромашек',
            thumb:
              'https://beru-buket.ru/images/stories/virtuemart/product/romashka-romashka.jpg'
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
          src: 'https://million-buketov.ru/d/buket-iz-vasilkov-s-upakovkoy.jpg',
          opts: {
            caption: 'Большой букет васильков',
            thumb:
              'https://million-buketov.ru/d/buket-iz-vasilkov-s-upakovkoy.jpg'
          }
        },
        {
          src:
            'https://static-sl.insales.ru/images/products/1/3456/242945408/514-1.jpg',
          opts: {
            caption: 'Букет из малиновой гортензии',
            thumb:
              'https://static-sl.insales.ru/images/products/1/3456/242945408/514-1.jpg'
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
            'https://flor52.ru/images/stories/virtuemart/product/WA0Z_FFp29M.jpg',
          opts: {
            caption: 'Пышный букет из 23 пионов',
            thumb:
              'https://flor52.ru/images/stories/virtuemart/product/WA0Z_FFp29M.jpg'
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
            'https://dostavka-cvetov64.ru/upload/iblock/236/23643b06b753862f3148085e497a5072.jpg',
          opts: {
            caption: 'Букет тюльпанов Коламбус',
            thumb:
              'https://dostavka-cvetov64.ru/upload/iblock/236/23643b06b753862f3148085e497a5072.jpg'
          }
        },
        {
          src:
            'http://elfflowers.ru/images/stories/virtuemart/product/yaAUuw7LuYo.jpg',
          opts: {
            caption: 'Букет гортензий 3 цвета',
            thumb:
              'http://elfflowers.ru/images/stories/virtuemart/product/yaAUuw7LuYo.jpg'
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

document.getElementById('countMinus1').onclick = function () {
  let countMinus = count1.value
  if (countMinus >= 1) {
    count1.value--
    countMinus = count1.value
  }
}

document.getElementById('countPlus1').onclick = function () {
  let countPlus = count1.value
  if (countPlus <= 150) {
    count1.value++
    countPlus = count1.value
  }
}

document.getElementById('countMinus2').onclick = function () {
  let countMinus = count2.value
  if (countMinus >= 1) {
    count2.value--
    countMinus = count2.value
  }
}

document.getElementById('countPlus2').onclick = function () {
  let countPlus = count2.value
  if (countPlus <= 150) {
    count2.value++
    countPlus = count2.value
  }
}

document.getElementById('countMinus3').onclick = function () {
  let countMinus = count3.value
  if (countMinus >= 1) {
    count3.value--
    countMinus = count3.value
  }
}

document.getElementById('countPlus3').onclick = function () {
  let countPlus = count3.value
  if (countPlus <= 150) {
    count3.value++
    countPlus = count3.value
  }
}

document.getElementById('countMinus4').onclick = function () {
  let countMinus = count4.value
  if (countMinus >= 1) {
    count4.value--
    countMinus = count4.value
  }
}

document.getElementById('countPlus4').onclick = function () {
  let countPlus = count4.value
  if (countPlus <= 150) {
    count4.value++
    countPlus = count4.value
  }
}

document.getElementById('countMinus5').onclick = function () {
  let countMinus = count5.value
  if (countMinus >= 1) {
    count5.value--
    countMinus = count5.value
  }
}

document.getElementById('countPlus5').onclick = function () {
  let countPlus = count5.value
  if (countPlus <= 150) {
    count5.value++
    countPlus = count5.value
  }
}

document.getElementById('countMinus6').onclick = function () {
  let countMinus = count6.value
  if (countMinus >= 1) {
    count6.value--
    countMinus = count6.value
  }
}

document.getElementById('countPlus6').onclick = function () {
  let countPlus = count6.value
  if (countPlus <= 150) {
    count6.value++
    countPlus = count6.value
  }
}

document.getElementById('countMinus7').onclick = function () {
  let countMinus = count7.value
  if (countMinus >= 1) {
    count7.value--
    countMinus = count7.value
  }
}

document.getElementById('countPlus7').onclick = function () {
  let countPlus = count7.value
  if (countPlus <= 150) {
    count7.value++
    countPlus = count7.value
  }
}

document.getElementById('countMinus8').onclick = function () {
  let countMinus = count8.value
  if (countMinus >= 1) {
    count8.value--
    countMinus = count8.value
  }
}

document.getElementById('countPlus8').onclick = function () {
  let countPlus = count8.value
  if (countPlus <= 150) {
    count8.value++
    countPlus = count8.value
  }
}