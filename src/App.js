import Navbar from './components/navigation/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Feed from './components/feed/Feed'
import Rightbar from './components/rightbar/Rightbar'

import './App.css';
function App() {
  return (
    <>
      <Navbar/>
      <section className='home__container' id ="home">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </section>
    </>
  );
}

export default App;
