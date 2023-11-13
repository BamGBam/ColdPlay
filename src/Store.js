import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './style.css'
import Home from './Home';
import App from './App';
import './mainStore'

// let d = new Date();
// document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"

function Store() {
  return (
    <Router>
    <div className ="whole-page" >
      <div className="main-header">
        <div>
          <ul className="header">
            <li>Home</li>
            {/* <li><Link to="/Home">About</Link></li>             */}
            {/* <li><Link to="/Home.js">About</Link></li> */}

            <li>About</li>
            <li>Profile</li>
          </ul>
        </div>  
        <h1 className="band-name band-name-large">The COLDPLAY</h1>
        {/* <script>
      let d = new Date();
      document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"
      document.body.innerHTML
  </script> */}


        <button className= "btn btn-header">Listen to our Latest Album</button>
      </div>
      {/* <section className="body-container"> */}
        <div className='store-body'>
          <h1> Music</h1>
          <div className='music-container'>
            <div className='shopt-item'>
              <div>
                <span>Viva Lavida</span>
              </div>
              <img className='shot-item-image' src=" https://i.ytimg.com/vi/zOQ4ld6NsXE/maxresdefault.jpg"/>
              <div>
                <span>11.99$ </span>
                <button className = "btn">Add to Cart</button>
              </div>
            </div >
            <div className='shopt-item'>
              <div>
                <span>Music of Sphere</span>
              </div>
              <img className='shot-item-image' src="https://s3.amazonaws.com/media.thecrimson.com/photos/2021/10/18/202032_1352127.jpeg"/>
              <div>
                <span>11.99$ </span>
                <button className = "btn">Add to Cart</button>
              </div>
            </div>
          </div>
          {/* Cart container */}
            <h1> Cart</h1>
            <div className='cart-details'>
                <span> ITEM</span>
                <span> PRICE</span>
                <span> QUANTITY</span>
            </div>
            <div className='cart-container'>
              <div className='shopt-item'>
                <div>
                <span> Album 1</span>
                </div>
                <div>
                <img  className='shot-item-image' src="https://i.ytimg.com/vi/zOQ4ld6NsXE/maxresdefault.jpg"/>
                </div>
                  <span className='getPrice'>12.99$</span>
                <input className='quantity-input' type="number" value="2"/>
                <button role="button"> Remove</button>
              </div>

              <div className='shopt-item'>
                <div>
                <span> Album 1</span>
                </div>
                <div>
                <img  className='shot-item-image' src="https://i.ytimg.com/vi/zOQ4ld6NsXE/maxresdefault.jpg"/>
                </div>
                <span>12.99$</span>
                <input className='quantity-input' type="number" value="2"/>
                <button role="button"> Remove</button>
              </div>
          </div>
          
          <div>
          <div className='shopt-item'> 
              <strong> Total</strong>
              <span className='whole-price'>16.98$</span>
          </div>
          <div className='shopt-item'>
            <button role="button">PURCHASE</button>
          </div>
          </div>
        </div>

        
      {/* </Foooooooter from here> */}
      <div className="footer">
        <h2>Listen to me</h2>
        <ul>
          <li>
            <a href='https://www.youtube.com/channel/UCDPM_n1atn2ijUwHd0NNRQw' target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/YouTube_icon_%282011-2013%29.svg/800px-YouTube_icon_%282011-2013%29.svg.png" width="50"/>            </a>
          </li>
          <li>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/YouTube_icon_%282011-2013%29.svg/800px-YouTube_icon_%282011-2013%29.svg.png" width="50"/></li>
          <li>
            <a href='https://www.youtube.com/channel/UCDPM_n1atn2ijUwHd0NNRQw' target="_blank">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ54R56WBMymhGb1IIc_f3zwbq-wFhQXNEjyT49Txvt&s" width="50"/>
            </a>
          </li>        
        </ul>
        {/* <a target= "_self"> https://www.coldplay.com/ </a>                          */}
      </div>
    </div>
    </Router>
  );
}

export default Store;
