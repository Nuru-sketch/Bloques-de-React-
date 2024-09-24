import './App.css'
import BlueGreen from './components/bluegreen'
import BlueSky from './components/skyblue'
import Yellow from './components/yellow'

function App() {
  return (
    <><div id='maincontainer'>
      <Yellow/>
      <div id='content'>
      <BlueGreen/>
      <BlueSky/>
      </div>
    </div>
    </>
  )
}

export default App
