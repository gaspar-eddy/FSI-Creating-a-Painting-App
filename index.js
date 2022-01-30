let selectedColor = 'blue'
const painting = document.querySelector('.painting')
const palette = document.querySelector('.palette')
const blue = document.querySelector('#blue')
const red = document.querySelector('#red')
const yellow = document.querySelector('#yellow')
const green = document.querySelector('#green')
const purple = document.querySelector('#purple')

painting.addEventListener('click', function(e){

    e.target.style.backgroundColor = selectedColor

})

blue.addEventListener('click', function(e){
    
    selectedColor = 'blue'

})

red.addEventListener('click', function(e){
    
    selectedColor = 'red'

})

yellow.addEventListener('click', function(e){
    
    selectedColor = 'yellow'

})

green.addEventListener('click', function(e){
    
    selectedColor = 'green'

})

purple.addEventListener('click', function(e){
    
    selectedColor = 'purple'

})

painting.addEventListener('dblclick', function(e){

    e.target.style.backgroundColor = 'white'

})