import './style.css'


function Store() {
  return (
    <div className ="whole-page" >
      <title>ColdPlay</title>
      <header>
        <nav>
          <ul>
            <li><a href='App.js'>Home</a></li>
            <li><a href='index.html'>About</a></li>
            <li><a href='Home.js'>Profile</a></li>
          </ul>
        </nav>  
         <hr/>
      </header>
      <div className="body">
          {/* Need a backgound image */}
        <h1>The COLDPLAY</h1>
        <section className='Album 1'>
        <h1> Music</h1>
        <div>
          <div>
            <strong>Viva Lavida</strong>
          </div>
          <img src=" https://i.ytimg.com/vi/zOQ4ld6NsXE/maxresdefault.jpg" width="200"/>
          <div>
            <span>11.99$ </span>
            <button>Add to Cart</button>
          </div>
        </div>
        </section>
        <section className='Album 2'>
          <br/>
        <div>
          <div>
            <strong>Music of Sphere</strong>
          </div>
          <img src="https://s3.amazonaws.com/media.thecrimson.com/photos/2021/10/18/202032_1352127.jpeg" width="200"/>
          <div>
            <span>11.99$ </span>
            <button>Add to Cart</button>
          </div>
        </div>
        </section>
        <section className='Cart'>
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
        </section>
        <div>
          <button role="button">PURCHASE</button>
        </div>
      </div>

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
