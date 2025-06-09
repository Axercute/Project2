import './App.css'
import { useState,useEffect } from 'react'
import {Routes,Route} from "react-router"

import NavBar from './Components/NavBar/NavBar'
import HomePage from './Components/HomePage/HomePage'
import ContactUs from './Components/ContactUs/ContactUs'
import SongSearch from './Components/SongSearch/SongSearch'
import SingerLogin from './Components/SingerLogin/SingerLogin'
import fetchLyricsOVH from './FetchLyricsOVH'
import {showSong,createSong,deleteSong,updateSong} from './SongStorage'
import SongDetail from './Components/SongDetail/SongDetail'

function App() {
//render the songList first

  const fetchData = async () => {
    const updatedList = await showSong();
    SetSongList(updatedList);
  };

useEffect(() => {fetchData()}, []);

const [SongSearchState, SetSongSearchState] = useState({songname:"",singername: "",lyrics: ""});
const [SongList,SetSongList]=useState([])

//manage change
const [SongSearchChangeState,SetSongSearchChangeState]=useState({songname:"",singername:"",lyrics:"",videolink:"",songid:""});
const handleChange=(event)=>{
  SetSongSearchChangeState((prevValue)=>({...prevValue,[event.target.name]:event.target.value}))
  console.log("handleChange",SongSearchChangeState)
}

const handleSubmit= async ()=>{

  const FetchLyrics = await fetchLyricsOVH (SongSearchChangeState)
  SetSongSearchChangeState({songname:"",singername:"",lyrics:""})
  console.log(FetchLyrics)
  SetSongSearchState({
    songname:`${SongSearchChangeState.songname}`,
    singername:`${SongSearchChangeState.singername}`,
    lyrics:`${FetchLyrics}`
  })
  return SongSearchState
}

const handleCreateSong=async (SongSearchState)=>{
  await createSong(SongSearchState) //using the create function
  fetchData() //using the render function
  }

const handleDelete = async (deleteDetails)=>{
  console.log("value passed for deletion",deleteDetails)
  await deleteSong(deleteDetails)
  fetchData() //render function
}

const handleUpdate = async (updateDetails)=>{
  console.log("value passed for update",updateDetails)
  SetSongSearchChangeState({ songid:"",videolink:"" })
  await updateSong (updateDetails)
  fetchData() //render function
}

useEffect(()=>{console.log("handleSubmit",SongSearchState)},[SongSearchState])
useEffect(()=>{fetchLyricsOVH()},[SongSearchState])

useEffect(() => {
console.log("SongList updated:", SongList);
}, [SongList]);

  return (
    <>
    <NavBar></NavBar>
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
      handleCreateSong={handleCreateSong}
      />}
      />

      <Route path ="/singerLogin"
      element={<SingerLogin
      SongList={SongList}
      />}
      />

      <Route path ="/singerLogin/:songName"
      element={<SongDetail
      SongList={SongList}
      handleDelete={handleDelete}
      handleChange = {handleChange}
      SongSearchChangeState={SongSearchChangeState}
      SetSongSearchChangeState={SetSongSearchChangeState}
      handleUpdate={handleUpdate}
      />
      }
      />
      

      <Route path ="/contactUs"
      element={<ContactUs/>}
      />

    </Routes>
    </>
  )
}

export default App

