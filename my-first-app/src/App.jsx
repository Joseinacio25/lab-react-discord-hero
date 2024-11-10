import './App.css';
import discordLogo from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';
import backgroundImg from './assets/discord-background.png'

function App() {
  return (
    <div className="App">
  <nav>
        <img className='logo' src={discordLogo} alt='discord logo'/>
        <img className='menu' src={menuIcon} alt='menu'/>
    </nav>
<h1>IMAGINE A PLACE...</h1>
<br />
<p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
   <br />
   <button className='mac' type="button">Download for Mac</button>
   <br />
   <button className='browser' type="button">Open Discord in your browser</button>
   <footer>
   <img className='background' src={backgroundImg} alt='background'/>
   </footer>
   
    </div>
  );
}

export default App;