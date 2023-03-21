import React from 'react'
import { Routes , Route} from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../Feed';
import Fevorites from '../Fevorites';
import Library from '../Library';
import Player from '../Player';
import Trending from '../Trending';
import './home.css'


const Home = () => {
  return (
    
    <div className='main-body bg-slate-600'>
      <Sidebar/>
    <Routes>
       <Route path='/' element={<Library/>}/>
       <Route path='/feed' element={<Feed/>}/>
       <Route path='/trending' element={<Trending/>}/>
       <Route path='/player' element={<Player/>}/>
       <Route path='/fevorites' element={<Fevorites/>}/>
    </Routes>
        
    </div>
  )
}

export default Home
