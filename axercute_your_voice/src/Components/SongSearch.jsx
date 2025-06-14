import { useState } from "react"

const SongSearch = ({SongSearchChangeState,handleChange,handleSubmit,SongSearchState,handleCreateSong}) => {
  const [ShowButton,SetShowButton] = useState(false)

  //Renderino
  return (<>
  <form onSubmit={(event)=>{
  handleSubmit(event)
  event.preventDefault();
  SetShowButton(true);
  }
  }
  className="bg-amber-300 w-1/4 h-30 mx-auto border-2 rounded-3xl flex flex-row flex-wrap justify-center"
  >

  <label htmlFor="songname" className="w-28 flex">Song Name:</label>
  <input
  id="songname"
  name="songname"
  type="text"
  placeholder="Billie Jean"
  value={SongSearchChangeState.songname}
  onChange={handleChange}
  className="bg-amber-50 rounded flex mb-2"
  />


  <label htmlFor="singername" className="w-28 flex">Singer Name:</label>
  <input
  id="singername"
  name="singername"
  type="text"
  placeholder="Michael Jackson"
  value={SongSearchChangeState.singername}
  onChange={handleChange}
  className="bg-amber-50 rounded flex"
  />


  <button type="submit">Get my lyrics</button>
  </form>

{/* lyrics */}
<div style={{ whiteSpace: "pre-wrap" }} className="bg-blue-400 w-1/3 mx-auto border-2 my-2 h-110 rounded-3xl overflow-scroll">
  {SongSearchState.lyrics === "null" || SongSearchState.lyrics === "undefined"? "Song not found"
    : SongSearchState.lyrics
    }
</div>

{ShowButton && SongSearchState.lyrics !== "null" && SongSearchState.lyrics !== "undefined" && SongSearchState.lyrics !=="" &&
  (
  <button style={{ marginTop: "10px" }} onClick={
    ()=>{handleCreateSong(SongSearchState);
      SetShowButton(false);
      window.alert("Song Submitted, please add a new song")
    }
    }>Give me this song</button>
  )
  }
  

  </>)
}

export default SongSearch
