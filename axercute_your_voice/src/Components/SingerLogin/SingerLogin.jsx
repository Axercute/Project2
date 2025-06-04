import "./SingerLogin.css"
import { useEffect } from "react";

const SingerLogin =({SongList})=>{

    useEffect(() => {
    console.log("SongList updated:", SongList);
    }, [SongList]);

    return (<>
    {SongList.map((element,index)=>(
        <div key={index} className="SingerLogin">
            <div className="song-name">{element.songname}</div>
            <div className="singer-name">{element.singername}</div>
            <button>View Whole Song</button>
        </div>
    ))}
    </>)
}
export default SingerLogin