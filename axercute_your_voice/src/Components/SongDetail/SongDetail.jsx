//src\Components\SongDetail\SongDetail.jsx

import { useParams, useNavigate  } from "react-router"
import "./SongDetail.css"
import {useEffect} from "react"

const SongDetail =({SongList,handleDelete,handleChange,SongSearchChangeState,SetSongSearchChangeState,handleUpdate}) =>{
    const {songName} = useParams()
    const navigate = useNavigate()
    const renderDetails = SongList.find((element)=>(element.fields.songname===songName));

  useEffect(() => {
    console.log("URL params:",songName)
  }, []);

    useEffect(() => {
    console.log("Whole Song List",SongList)
  }, []);

useEffect(() => {
  if (renderDetails) {
    SetSongSearchChangeState({ songid: renderDetails.id }); //set songid when rendertails is ready
  }
}, [renderDetails]);


    return (<>
    <h3>Picked Song</h3>
    <div>{renderDetails.fields.songname}</div>
    <div>{renderDetails.fields.singername}</div>
    <div style={{ whiteSpace: "pre-wrap" }}>{renderDetails.fields.lyrics}</div>
    
    
    
    <button 
    onClick={()=>{handleDelete(SongSearchChangeState);navigate("/singerLogin")}}>
        Delete This Song</button>
    <form onSubmit={(event)=>{
    event.preventDefault()
    handleUpdate(SongSearchChangeState)
    }}>
        <label htmlFor="videolink">Video Link</label>
        <input 
        type ="text"
        id="videolink"
        name="videolink"
        value={SongSearchChangeState.videolink}
        placeholder="www.youtube.com/videolink"
        onChange={handleChange}
        />  
        <button type="submit">Submit Video</button>
    </form>

    </>)
}
export default SongDetail