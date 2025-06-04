//src\SongStorage.js

const URL = import.meta.env.VITE_URL;
const PAT = import.meta.env.VITE_PAT


const SongStorage = async()=>{
try{
    const Response = await fetch(URL,{
        method:"GET",
        headers:{Authorization:`Bearer ${PAT}`
        }
    }
        )
    const ResponseInJson = await Response.json()
    console.log(ResponseInJson)
    return ResponseInJson
    }

catch(error){
    console.error(error)
    return null
}
}
export default SongStorage