import './App.css'
import { useState,useEffect } from 'react'
import {Routes,Route} from "react-router"

import NavBar from './Components/NavBar/NavBar'
import HomePage from './Components/HomePage/HomePage'
import ContactUs from './Components/ContactUs/ContactUs'
import SongSearch from './Components/SongSearch/SongSearch'
import SingerLogin from './Components/SingerLogin/SingerLogin'
import FetchSong from './FetchSong'
import {showSong,createSong} from './SongStorage'

function App() {
//render the showSong first
useEffect(() => {
  const fetchData = async () => {
    const updatedList = await showSong();
    SetSongList(updatedList);
  };
  fetchData();
}, []);

const [SongSearchState, SetSongSearchState] = useState({songname:"",singername: "",lyrics: ""});
const [SongList,SetSongList]=useState([])

//manage change
const [SongSearchChangeState,SetSongSearchChangeState]=useState({songname:"",singername:"",lyrics:""});
const handleChange=(event)=>{
  SetSongSearchChangeState((prevValue)=>({...prevValue,[event.target.name]:event.target.value}))
  console.log(SongSearchChangeState)
}

const handleSubmit= async (event)=>{
  event.preventDefault();
  const FetchLyrics = await FetchSong(SongSearchChangeState)
  SetSongSearchChangeState({songname:"",singername:"",lyrics:""})
  console.log(FetchLyrics)
  SetSongSearchState({
    songname:`${SongSearchChangeState.songname}`,
    singername:`${SongSearchChangeState.singername}`,
    lyrics:`${FetchLyrics}`
  })
  return SongSearchState
}

const handleSubmit2=async (SongSearchState)=>{
  await createSong(SongSearchState) //using the create function
  const updatedList = await showSong(); //using the showSong function
  SetSongList(updatedList); //render
  }

useEffect(()=>{console.log("handleSubmit",SongSearchState)},[SongSearchState])
useEffect(()=>{FetchSong()},[SongSearchState])

useEffect(() => {
console.log("SongList updated:", SongList);
}, [SongList]);

  return (
    <>
    <NavBar></NavBar>
    <main className="app-content">
    <Routes>

      <Route path ="/"
      element={<HomePage/>}
      />
      
      <Route path ="/songSearch"
      element={<SongSearch
      SongSearchChangeState={SongSearchChangeState}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      SongSearchState={SongSearchState}
      handleSubmit2={handleSubmit2}
      />}
      />

      <Route path ="/singerLogin"
      element={<SingerLogin
      SongList={SongList}
      />}
      />

      <Route path ="/contactUs"
      element={<ContactUs/>}
      />

    </Routes>
    </main>
    </>
  )
}

export default App
