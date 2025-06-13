import { useEffect } from "react";
import { useNavigate } from "react-router";

const SingerLogin =({SongList})=>{

    useEffect(() => {
    console.log("SongList updated:", SongList);
    }, [SongList]);
const navigate = useNavigate();
    
    return (<>
    {SongList.map((element,index)=>(
        <div key={index} className="bg-purple-500 w-1/4 h-40 mx-auto border-2 rounded-3xl flex flex-col flex-wrap justify-center my-2">
            <div className="font-mono font-extrabold text-4xl text-red-500">{element.fields.songname}</div>
            <div className="font-serif text-3xl text-fuchsia-700">{element.fields.singername}</div>
            <button onClick={()=>{navigate(`/singerLogin/${element.fields.songname}`)}} className="bg-gradient-to-b via-blue-700 to-green-500">View Whole Song</button>
        </div>
    ))}
    </>)
}
export default SingerLogin