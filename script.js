// Add Event Listener to buttons 
document.getElementById('change-image').addEventListener('click', image)
document.getElementById('change-text').addEventListener('click', text)
document.getElementById('hide').addEventListener('click', hide)
document.getElementById('show').addEventListener('click', show)
document.getElementById('bg').addEventListener('click', background)

// This function changes images
function image () {
  document.getElementById('picture').src = './images/Ronaldo.jpg'
}

// This function changes the text
function text () {
  document.getElementById('text').innerHTML = 'Lionel Messi and Cristiano Ronaldo'
}

// This function hides the text
function hide () {
  document.getElementById('text').style.display = 'none'
}

// This function reveals the text
function show () {
  document.getElementById('text').style.display = 'block'
}

// This function changes the background color
function background () {
  document.body.style.backgroundColor = 'aqua'
}
