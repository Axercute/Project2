import { useParams } from "react-router"
import "./SongDetail.css"
import { useNavigate } from "react-router"

const SongDetail =({SongList,handleDelete}) =>{
    const {songName} = useParams()
    console.log("URL params:",songName)
    console.log("first song name",SongList)
    const navigate = useNavigate()
    const renderDetails = SongList.find((element)=>(element.fields.songname===songName));
    return (<>
    <h3>Picked Song</h3>
    <div>{renderDetails.fields.songname}</div>
    <div>{renderDetails.fields.singername}</div>
    <div style={{ whiteSpace: "pre-wrap" }}>{renderDetails.fields.lyrics}</div>
    <button 
    onClick={()=>{handleDelete(`${renderDetails.id}`);navigate("/singerLogin")}}>
        Delete This Song</button>
    </>)
}
export default SongDetail