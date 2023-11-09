import './style.css'


function Store() {
  return (
    <div className ="whole-page" >
      <title>ColdPlay</title>
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Profile</li>
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
          <div className='cart'>
            <strong> ITEM</strong>
            &lt;&gt;
            <strong> PRICE</strong>
            &lt;&gt;
            <strong> QUANTITY</strong>
            &lt;&gt;
          </div>
          <div>
            <span> Album 1</span>
            &lt;&gt;
            <span>12.99$</span>
            <input type="number"/>

          </div>
        </section>
      </div>

      <hr/>
      <div className="footer">
        <h2>Listen to me</h2>
        <ul>
          <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ54R56WBMymhGb1IIc_f3zwbq-wFhQXNEjyT49Txvt&s" width="50"/></li>
          <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/YouTube_icon_%282011-2013%29.svg/800px-YouTube_icon_%282011-2013%29.svg.png" width="50"/></li>
          <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ54R56WBMymhGb1IIc_f3zwbq-wFhQXNEjyT49Txvt&s" width="50"/></li>
        </ul>
        {/* <a target= "_self"> https://www.coldplay.com/ </a>                          */}
      </div>
    </div>


  );
}

export default Store;
