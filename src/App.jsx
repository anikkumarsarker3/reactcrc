import './App.css'
import Navbar from './Component/Navbar'
import DynamicContent from './Component/DynamicContent'
import Cover from './Component/Cover'
import Banner from './Component/Banner'
import Contract from './Component/Contract'
import Footer from './Component/Footer'

function App() {

  return (
    <>
      <Navbar className="fixed"></Navbar>
      <DynamicContent></DynamicContent>
      <Banner></Banner>
      <Cover></Cover>
      <Contract></Contract>
      <Footer></Footer>

      {/* <p className='text-7xl'>Vite + React</p> */}
    </>
  )
}

export default App
