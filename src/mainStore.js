// var removeCartItemsButton = document.getElementsByClassName('shopt-item')
// console.log(removeCartItemsButton)   
// for(var i = 0; i < removeCartItemsButton.length; i++){
//     var button =  removeCartItemsButton[i]
//     button.addEventListener('click', function(event){
//         var buttonClicked = event.target
//         buttonClicked.parentElement.remove()
//     })
// }

if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{    
    ready()   
}

//Page is loaded by calling the stuff
function ready(){
    var removeButton = document.getElementsByClassName('shopt-item')
    // console.log(removeButton)
    for(var i = 0; i < removeButton.length; i++ ){
        var button = removeButton[i]
        //// This is the function that helps you to remove the buttons
        button.addEventListener('click', removeCartItems)    
        // console.log(button[i])
    }     
     
    var quantityInput = document.getElementsByClassName('quantity-input')
    for(var i = 0; i < quantityInput.length; i++ ){
        var input = quantityInput[i]
        input.addEventListener('change', quantityChanged)  
    }

    var addToCartButtons = document.getElementsByClassName('shopt-item')
    for(var i = 0; i < addToCartButtons.length; i++ ){
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
}

function addToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shopt-item')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    console.log(title, price, imageSrc)
    addItemToCart(title, price, imageSrc)
    console.log(title)
}

function addItemToCart(title, price, imageSrc){
    var cartRow = document.createElement('div') 
}

function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1     
    }
    getUpdate()
}

function removeCartItems(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()   
    getUpdate() 
}
 
 
function getUpdate(){
    var cartItemContainer = document.getElementsByClassName('cart-container')[0]
    var cartShopItems = cartItemContainer.getElementsByClassName('shopt-item')
    var total = 0
    for(var i = 0; i < cartShopItems.length; i++){
        var cartRow = cartShopItems[i]
        var priceElement = cartRow.getElementsByClassName('getPrice')[0]
        var quantityElement = cartRow.getElementsByClassName('quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value                                                  
        total = total + (quantity * price)             
        console.log(total)                   
    }      
    // total = Math.round(total * 100) / 100
    document.getElementsByClassName('whole-price')[0].innerText = '$'+  total            
}
