// import './style.css'
import './mainStore'


function App() {
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
      </header>
      
      <div className="body-content">
        <h2 className="about"> About:</h2>
        <img className="about-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ColdplayBBC071221_%28cropped%29.jpg/600px-ColdplayBBC071221_%28cropped%29.jpg"/>

        <p>
        Coldplay are a British rock band formed in London in 1997. They consist of vocalist and pianist Chris Martin, guitarist Jonny Buckland, bassist Guy Berryman, drummer Will Champion and manager Phil Harvey.[a] They initially met at University College London, calling themselves Big Fat Noises and changing to Starfish, before settling on the current name. After independently releasing an extended play, Safety (1998), Coldplay signed with Parlophone in 1999. The band's debut album, Parachutes (2000), included their breakthrough single "Yellow" and received a Brit Award for British Album of the Year, a Grammy Award for Best Alternative Music Album and a Mercury Prize nomination. Their second album, A Rush of Blood to the Head (2002), won the same accolades and included the single "Clocks", which won a Grammy Award for Record of the Year. Their third album, X&Y (2005), which completed what the band considered a trilogy, was nominated for the Grammy Award for Best Rock Album. Their fourth album, Viva la Vida or Death and All His Friends (2008), won Best Rock Album. Both albums were the best-selling of their respective years, topping the charts in over 30 countries. Viva la Vida was also nominated for Album of the Year, while its title track became the first single by a British group to simultaneously reach number one in the United Kingdom and United States in the 21st century.
        </p>
        <p><strong>Chris Martin is the GOAT.</strong>
        </p>
      </div>
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
 
export default App;
