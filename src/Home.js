import './style.css'

 
function Home() {
  return (
    <div className ="whole-page" >
      <title>ColdPlay</title>
      <header className="main-header">
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Profile</li>
          </ul>
          <h1 className="band-name band-name-large">The COLDPLAY</h1>
          <button className='btn-header'>Listen to our latest Album</button>
          <a href='https://www.youtube.com/watch?v=l6_nRqIz_9o' target="_blank">
          <button className="btn-special" >&#9658;</button>
          </a>
        </nav>  
         <hr/>
      </header>
      <section>
        <div>
          {/* Need a backgound image */}
          <div>
              <div className="body-shoping">
                <strong className="tour-item">July 16th</strong>
                <span className="tour-item"> SD theater</span>
                <button className="button">Buy your Ticket</button>
              </div>
              <div className="body-shoping">
                <strong className="tour-item">July 17th LA</strong>
                <span className="tour-item"> LA theater</span>
                <button className="button">Buy your Ticket</button>
              </div>   
              <div className="body-shoping">
                <strong>July 18th Washington</strong>
                <span className="tour-item"> Washington theater</span>
                <button className="button">Buy your Ticket</button>
              </div>
              <div className="body-shoping">
                <strong>July 19th</strong>
                <span className="tour-item" >Massachuset</span>
                <button className="button">Buy your Ticket</button>
              </div>   
              <p> <strong>More information</strong></p>     
              <a href="https://www.coldplay.com/" target="_blank"> Link for google</a>  
          </div>
        </div>
      </section>
      <hr/>
      <div className="footer">
      <strong className="text-footer">Listen to me: </strong>
        <ul>
          <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ54R56WBMymhGb1IIc_f3zwbq-wFhQXNEjyT49Txvt&s" width="50"/></li>
          <a href='https://www.youtube.com/channel/UCDPM_n1atn2ijUwHd0NNRQw' target="_blank">
          <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/YouTube_icon_%282011-2013%29.svg/800px-YouTube_icon_%282011-2013%29.svg.png" width="50"/></li>
          </a>
          <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png" width="50"/></li>
        </ul>
      </div>

    </div>


  );
}

export default Home;
