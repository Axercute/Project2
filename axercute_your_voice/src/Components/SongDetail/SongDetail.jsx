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
    <div className="bg-violet-500 w-full border-2">
    <h3 className="text-center text-6xl text-pink-400 mt-2 font-mono font-extrabold">
      {renderDetails.fields.songname}</h3>
    <div className="text-center text-6xl text-red-200 mt-2 font-mono font-extrabold">{renderDetails.fields.singername}</div>
    </div>
    <div style={{ whiteSpace: "pre-wrap" }}>{renderDetails.fields.lyrics}</div>
    
{renderDetails.fields.videolink ? (
  <div>
    <h4>🎬 Linked Video</h4>
    <iframe
      width="560"
      height="315"
      src={
        renderDetails.fields.videolink.includes("watch?v=")
          ? renderDetails.fields.videolink.replace("watch?v=", "embed/")
          : renderDetails.fields.videolink
      }
      title="Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
) : (
  <p><em>No video linked yet.</em></p>
)}

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