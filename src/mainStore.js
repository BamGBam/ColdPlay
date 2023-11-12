var removeCartItemsButton = document.getElementsByClassName('shopt-item')
console.log(removeCartItemsButton)
for(var i = 0; i < removeCartItemsButton.length; i++){
    var button =  removeCartItemsButton[i]
    button.addEventListener('click', function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.remove()
    })
}