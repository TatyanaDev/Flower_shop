const firstCardColors = document.querySelectorAll('.first-card-label')
const secondCardColors = document.querySelectorAll('.second-card-label')
const thirdCardColors = document.querySelectorAll('.third-card-label')
const fourthCardColors = document.querySelectorAll('.fourth-card-label')
const fifthCardColors = document.querySelectorAll('.fifth-card-label')
const sixthCardColors = document.querySelectorAll('.sixth-card-label')
const seventhCardColors = document.querySelectorAll('.seventh-card-label')
const eighthCardColors = document.querySelectorAll('.eighth-card-label')
const buttonsMinus = document.querySelectorAll('.counter-minus')
const buttonsPlus = document.querySelectorAll('.counter-plus')
const counters = document.querySelectorAll('.counter-input')

const setActiveColor = cardColors => {
  cardColors.forEach(label => {
    label.addEventListener('click', () => {
      cardColors.forEach((labelItem, index) => {
        if (labelItem === label) {
          cardColors[index].classList.toggle('selected-color')
        } else {
          cardColors[index].classList.remove('selected-color')
        }
      })
    })
  })
}

const minusOne = index => {
  if (counters[index].value >= 1) {
    --counters[index].value
  }
}

const plusOne = index => {
  if (counters[index].value <= 150) {
    ++counters[index].value
  }
}

setActiveColor(firstCardColors)
setActiveColor(secondCardColors)
setActiveColor(thirdCardColors)
setActiveColor(fourthCardColors)
setActiveColor(fifthCardColors)
setActiveColor(sixthCardColors)
setActiveColor(seventhCardColors)
setActiveColor(eighthCardColors)

buttonsMinus.forEach((button, index) =>
  button.addEventListener('click', () => minusOne(index))
)

buttonsPlus.forEach((button, index) =>
  button.addEventListener('click', () => plusOne(index))
)
