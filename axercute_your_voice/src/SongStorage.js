//src\SongStorage.js

const URL = import.meta.env.VITE_URL;
const PAT = import.meta.env.VITE_PAT;

//Showing Song
export const showSong = async()=>{
try{
    const Response = await fetch(URL, {
        method:"GET",
        headers:{Authorization:`Bearer ${PAT}`},
    },
        )

    const ResponseInJson = await Response.json()
    console.log(ResponseInJson.records)
    return ResponseInJson.records
    }
catch(error){
    console.error(error)
    return null
}
}

// Creating Song
export const createSong =async (props)=>{
//Declare variables
    const SongInput = {records: [
    {
      fields: {
        songname: props.songname,
        singername: props.singername,
        lyrics:props.lyrics
      }
    }
    ]
}
//Actual input
    try{
    const Response = await fetch(URL, {
        method:"POST",
        headers:{Authorization:`Bearer ${PAT}`,
        "Content-Type": "application/json",}, 
        body:JSON.stringify(SongInput)
    },
        )
    const ResponseInJson = await Response.json()
    console.log(ResponseInJson.records)
    return ResponseInJson.records
    }
catch(error){
    console.error(error)
    return null
}

}