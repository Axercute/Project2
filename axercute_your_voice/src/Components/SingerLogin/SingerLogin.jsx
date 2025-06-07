import "./SingerLogin.css"
import { useEffect } from "react";
import { useNavigate } from "react-router";

const SingerLogin =({SongList})=>{

    useEffect(() => {
    console.log("SongList updated:", SongList);
    }, [SongList]);
const navigate = useNavigate();
    
    return (<>
    <h1>Picked songs</h1>
    {SongList.map((element,index)=>(
        <div key={index} className="SingerLogin">
            <div className="song-name">{element.fields.songname}</div>
            <div className="singer-name">{element.fields.singername}</div>
            <button onClick={()=>{navigate(`/singerLogin/${element.fields.songname}`)}}>View Whole Song</button>
        </div>
    ))}
    </>)
}
export default SingerLogin