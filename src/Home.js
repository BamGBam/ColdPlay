import './style.css'


function Home() {
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
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ColdplayBBC071221_%28cropped%29.jpg/600px-ColdplayBBC071221_%28cropped%29.jpg"/>
        <button>Listen to our latest Album</button>
        <button>&#9658;</button>
        <h2>Coming Tours</h2>
        <div className="tours">
            <div>
              <strong>July 16th SD</strong>
              &lt;&gt;
              SD theater 
              &lt;&gt;
              <button type="button">Buy your Ticket</button>
              <hr/>
            </div>
            <div>
              <strong>July 17th LA</strong>
              &lt;&gt;
              LA theater
              &lt;&gt;
              <button type="button">Buy your Ticket</button>
              &lt;&gt;
              <hr/>
            </div>   
            <div>
              <strong>July 18th Washington</strong>
              &lt;&gt;
              Washington theater
              &lt;&gt;
              <button type="button">Buy your Ticket</button>
              &lt;&gt;
              <hr/>
            </div>
            <div>
              <strong>July 19th Massachuset</strong>
              &lt;&gt;
              Massachuset theater
              &lt;&gt;
              <button type="button">Buy your Ticket</button>
              &lt;&gt;
            </div>   
            <p> <strong>More information</strong></p>     
            <a href="https://www.coldplay.com/"> Link for google</a>  
        </div>
      </div>
      <hr/>
      <div className="footer">
        <h2>Listen to me</h2>
        <ul>
          <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ54R56WBMymhGb1IIc_f3zwbq-wFhQXNEjyT49Txvt&s" width="100"/></li>
          <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/YouTube_icon_%282011-2013%29.svg/800px-YouTube_icon_%282011-2013%29.svg.png" width = "100"/></li>
          <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ54R56WBMymhGb1IIc_f3zwbq-wFhQXNEjyT49Txvt&s"/></li>
        </ul>
        {/* <a target= "_self"> https://www.coldplay.com/ </a>                          */}

      </div>

    </div>


  );
}

export default Home;
