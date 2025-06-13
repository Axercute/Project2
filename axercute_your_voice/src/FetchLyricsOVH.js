
const fetchLyricsOVH = async (props)=>{
    try {
    const songFetch = await fetch (`https://api.lyrics.ovh/v1/${props.singername}/${props.songname}`)
    console.log(songFetch)
    const songJson = await songFetch.json();
    console.log(songJson.lyrics);
    return songJson.lyrics
    }
    catch (error){
        console.error("caught error:",error)
        return null
    }
        
}
export default fetchLyricsOVH