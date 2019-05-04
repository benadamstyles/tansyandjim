var scrollButton = document.getElementById('scroll')
var guestSelect = document.getElementById('guests-number')

window.addEventListener('scroll', function() {
  var scrollTop = window.scrollY

  if (scrollTop > 200) {
    scrollButton.classList.add('visible')
  } else {
    scrollButton.classList.remove('visible')
  }
})

scrollButton.addEventListener('click', scrollToTop)

function scrollToTop() {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  })
}

if (guestSelect != null) {
  guestSelect.addEventListener('change', function(event) {
    var guestFields = Array.from(document.querySelectorAll('.guest-fields'))
    var selected = event.currentTarget.selectedIndex

    guestFields.forEach(function(guestField, index) {
      if (index <= selected) {
        guestField.classList.add('active')
      } else {
        guestField.classList.remove('active')
      }
    })
  })
}
