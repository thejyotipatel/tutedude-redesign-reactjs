import './App.css'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import ReferAndEarn from './page/ReferAndEarn'
import FriendReferred from './page/FriendReferred'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <div className='dashboard'>
              <Header />
              <Outlet />
              <h3 className='container footer'>Tearms & conditions</h3>
            </div>
          }
        >
          <Route index element={<ReferAndEarn />}></Route>
          <Route path='/friend-referred' element={<FriendReferred />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
