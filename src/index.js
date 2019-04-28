window.addEventListener('scroll', function() {
  var scrollTop = window.scrollY
  var scrollButton = document.getElementById('scroll')

  if (scrollTop > 200) {
    scrollButton.classList.add('visible')
  } else {
    scrollButton.classList.remove('visible')
  }
})
