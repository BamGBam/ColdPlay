import './style.css'

 
function Store() {
  return (
    <div className ="whole-page" >
      <header className="main-header">
        <nav>
          <ul className="header">
            <li>Home</li>
            <li>About</li>
            <li>Profile</li>
          </ul>
        </nav>  
        <h1 className="band-name band-name-large">The COLDPLAY</h1>
        <button className= "btn btn-header">Listen to our Latest Album</button>
      </header>
      <section className="body-container">
        <div>
          {/* Need a backgound image */}
          <h1> Music</h1>
          <div>
            <div className='Album 1'>
              <strong>Viva Lavida</strong>
            </div>
            <img src=" https://i.ytimg.com/vi/zOQ4ld6NsXE/maxresdefault.jpg" width="200"/>
            <div>
              <span>11.99$ </span>
              <button className = "btn">Add to Cart</button>
            </div>
          </div>
            <br/>
          <div className='Album 2'>
            <div>
              <strong>Music of Sphere</strong>
            </div>
            <img src="https://s3.amazonaws.com/media.thecrimson.com/photos/2021/10/18/202032_1352127.jpeg" width="200"/>
            <div>
              <span>11.99$ </span>
              <button className = "btn">Add to Cart</button>
            </div>
          </div>
            <h1> Cart</h1>
            <div className='cart-details'>
              <strong> ITEM</strong>
              &lt;&gt;
              <strong> PRICE</strong>
              &lt;&gt;
              <strong> QUANTITY</strong>
              &lt;&gt;
            </div>
            <div className='cart1'>
              <span> Album 1</span>
              <img src="https://i.ytimg.com/vi/zOQ4ld6NsXE/maxresdefault.jpg" width="200"/>
              &lt;&gt;
              <span>12.99$</span>
              <input type="number" value="1"/>
              <button role="button"> Remove</button>

            </div>

            <div className='cart2'>
              <span> Album 2</span>
              <img src="https://i.ytimg.com/vi/zOQ4ld6NsXE/maxresdefault.jpg" width="200"/>
              &lt;&gt;
              <span>12.99$</span>
              <input type="number" value="2"/>
              <button role="button"> Remove</button>
            </div>
            <hr/>
            <div> 
              <strong> Total</strong>
              <span>16.98$</span>
            </div>
          <div>
            <button role="button">PURCHASE</button>
          </div>
        </div>
      </section>
 
      <hr/>
      <div className="footer">
        <h2>Listen to me</h2>
        <ul>
          <li>
            <a href='https://www.youtube.com/channel/UCDPM_n1atn2ijUwHd0NNRQw' target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/YouTube_icon_%282011-2013%29.svg/800px-YouTube_icon_%282011-2013%29.svg.png" width="50"/>            </a>
          </li>
          <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/YouTube_icon_%282011-2013%29.svg/800px-YouTube_icon_%282011-2013%29.svg.png" width="50"/></li>
          <li>
            <a href='https://www.youtube.com/channel/UCDPM_n1atn2ijUwHd0NNRQw'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ54R56WBMymhGb1IIc_f3zwbq-wFhQXNEjyT49Txvt&s" width="50"/>
            </a>
          </li>        </ul>
        {/* <a target= "_self"> https://www.coldplay.com/ </a>                          */}
      </div>
    </div>


  );
}

export default Store;
