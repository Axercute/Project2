const fetchLyricsOVH = async (props,SetLoading)=>{
    SetLoading(true)

    const controller = new AbortController();

    const TimeoutFunction = setTimeout(() => {
    console.warn("It's over 3 seconds, stop fetching")
    controller.abort()
    }, 3000); //abort if it's over 3 seconds

    if (!props.singername?.trim() || !props.songname?.trim()) { //return null if they submit empty string
    console.warn("Empty singer or song name. Fetch aborted.");
    SetLoading(false)
    return null;
  }

    try {
    const songFetch = await fetch (`https://api.lyrics.ovh/v1/${props.singername}/${props.songname}`,{signal:controller.signal})
    clearTimeout(TimeoutFunction) //clears if successful fetch
    console.log(songFetch)
    const songJson = await songFetch.json();
    console.log(songJson.lyrics);
    SetLoading(false)
    return songJson.lyrics
    }
    catch (error){
        clearTimeout(TimeoutFunction) //clears if failed fetch
        console.error("caught error:",error)
        SetLoading(false)
        return null
    }
        
}
export default fetchLyricsOVH