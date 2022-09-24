import picture from './assets/picture.webp'
import './style.css'
import './App.css'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div className='app'>
      <img src={picture} alt="Profile Photo" className='app--img'/>
      <Main className='main--app'/>
      <Footer />
    </div>
  )
}

export default App
