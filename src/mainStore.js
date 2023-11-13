// var removeCartItemsButton = document.getElementsByClassName('shopt-item')
// console.log(removeCartItemsButton)   
// for(var i = 0; i < removeCartItemsButton.length; i++){
//     var button =  removeCartItemsButton[i]
//     button.addEventListener('click', function(event){
//         var buttonClicked = event.target
//         buttonClicked.parentElement.remove()
//     })
// }
 
var removeButton = document.getElementsByClassName('shopt-item')
// console.log(removeButton)
for(var i = 0; i < removeButton.length; i++ ){
    var button = removeButton[i]
    //// This is the function that helps you to remove the buttons
    button.addEventListener('click', function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.remove()   
        getUpdate() 
    }) 
    // console.log(button[i])
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
    document.getElementsByClassName('whole-price')[0].innerText = total            
}
