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
    console.log("Render Data:",ResponseInJson.records)
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
    console.log("created update:",ResponseInJson.records)
    return ResponseInJson.records
    }
catch(error){
    console.error(error)
    return null
}
}


// Deleting Song
export const deleteSong =async (props)=>{
//Actual input
    try{
    // First, fetch the song info before deleting
    const aboutToDeleteResponse = await fetch(`${URL}/${props}`, {
      headers: {
        Authorization: `Bearer ${PAT}`,
        "Content-Type": "application/json",
      },
    });
    const SongAboutToDelete = await aboutToDeleteResponse.json();
    console.log("About to delete:", SongAboutToDelete);

    const Response = await fetch(`${URL}/${props}`, {
        method:"DELETE",
        headers:{Authorization:`Bearer ${PAT}`,
        "Content-Type": "application/json",}, 
    },
        )
    
    const ResponseInJson = await Response.json()
    console.log("Delete complete")
    return ResponseInJson.records
    }
catch(error){
    console.error(error)
    return null
}
}