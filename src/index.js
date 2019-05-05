var scrollButton = document.getElementById('scroll')
var guestSelect = document.getElementById('guests-number')
var rsvpForm = document.getElementById('rsvp')

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

if (guestSelect) {
  guestSelect.addEventListener('change', function(event) {
    var guestFields = Array.from(document.querySelectorAll('.guest-fields'))
    var selected = event.currentTarget.selectedIndex
    var guestNameSelector = 'input[name$="Guest Name"]'

    guestFields.forEach(function(guestField, index) {
      if (index <= selected) {
        guestField.classList.add('active')
        guestField
          .querySelector(guestNameSelector)
          .setAttribute('required', 'required')
      } else {
        guestField.classList.remove('active')
        guestField.querySelector(guestNameSelector).removeAttribute('required')
      }
    })
  })
}

rsvpForm.addEventListener('change', function(event) {
  var dietaryRequirementSelected = event.target

  if (dietaryRequirementSelected.className.includes('dietary-checkbox')) {
    var textField = dietaryRequirementSelected.parentElement.getElementsByClassName(
      'dietary-text-field'
    )[0]

    if (dietaryRequirementSelected.checked) {
      textField.setAttribute('required', 'required')
    } else {
      textField.removeAttribute('required')
    }
  }
})
