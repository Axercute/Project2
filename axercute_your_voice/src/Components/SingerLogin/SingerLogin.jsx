import "./SingerLogin.css"
import { useEffect } from "react";

const SingerLogin =({SongList})=>{

    useEffect(() => {
    console.log("SongList updated:", SongList);
    }, [SongList]);

    
    return (<>
    <h1>Picked songs</h1>
    {SongList.map((element,index)=>(
        <div key={index} className="SingerLogin">
            <div className="song-name">{element.fields.songname}</div>
            <div className="singer-name">{element.fields.singername}</div>
            <button>View Whole Song</button>
        </div>
    ))}
    </>)
}
export default SingerLogin