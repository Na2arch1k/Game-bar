function checkEmail() {
  let email = document.querySelector('#emailField').value
  if (!email.includes('@')) alert('Немає символа @')
  else if (!email.includes('.')) alert('Немає символа .')
  else alert('all good')
}

// Показати кнопку, коли сторінка прокручена на 200px
window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  let backToTopBtn = document.getElementById('backToTopBtn')
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backToTopBtn.style.display = 'block'
  } else {
    backToTopBtn.style.display = 'none'
  }
}

// Коли користувач натискає на кнопку, повернутися на початок сторінки
function topFunction() {
  document.body.scrollTop = 0 // Для Safari
  document.documentElement.scrollTop = 0 // Для Chrome, Firefox, IE та Opera
}
