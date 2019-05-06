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

var guestNameInputSelector = 'input[name$="Name"]'

function resetGuestSection(guestSection) {
  var allRequired = Array.from(guestSection.querySelectorAll('[required]'))

  var checkboxes = Array.from(
    guestSection.querySelectorAll('input[type=checkbox]')
  )

  var textInputs = Array.from(
    guestSection.querySelectorAll('input[type=text], textarea')
  )

  guestSection.classList.remove('active')

  // Remove all required attributes
  allRequired.forEach(function(requiredInput) {
    requiredInput.removeAttribute('required')
  })

  // Uncheck all checkboxes
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = false
  })

  // Remove all text input values
  textInputs.forEach(function(input) {
    input.value = ''
  })
}

if (guestSelect) {
  guestSelect.addEventListener('change', function(event) {
    var guestSections = Array.from(document.querySelectorAll('.guest-fields'))
    var selected = event.currentTarget.selectedIndex

    guestSections.forEach(function(guestSection, index) {
      if (index <= selected) {
        guestSection.classList.add('active')
        guestSection
          .querySelector(guestNameInputSelector)
          .setAttribute('required', 'required')
      } else {
        resetGuestSection(guestSection)
      }
    })
  })
}

if (rsvpForm) {
  rsvpForm.addEventListener('change', function(event) {
    var changedElement = event.target

    if (changedElement.className.includes('dietary-checkbox')) {
      var textField = changedElement.parentElement.getElementsByClassName(
        'dietary-text-field'
      )[0]

      if (changedElement.checked) {
        textField.setAttribute('required', 'required')
      } else {
        textField.removeAttribute('required')
      }
    }
  })
}
