import "./SongSearch.css"
import { useState } from "react"

const SongSearch = ({SongSearchChangeState,handleChange,handleSubmit,SongSearchState,handleCreateSong}) => {
  const [ShowButton,SetShowButton] = useState(false)

  return (<>
    <div className="songsearch">
      <form onSubmit={(event)=>{
      handleSubmit(event)
      event.preventDefault();
      SetShowButton(true);
      }
    }>
      <label htmlFor="songname">Song Name</label>
      <input
      id="songname"
      name="songname"
      type="text"
      placeholder="Billie Jean"
      value={SongSearchChangeState.songname}
      onChange={handleChange}
      />

      <label htmlFor="singername">Singer Name</label>
      <input
      id="singername"
      name="singername"
      type="text"
      placeholder="Michael Jackson"
      value={SongSearchChangeState.singername}
      onChange={handleChange}
      />

      <button type="submit">Get my lyrics</button>
      </form>

<div style={{ whiteSpace: "pre-wrap" }} className="lyrics">
  {SongSearchState.lyrics === "null" ||SongSearchState.lyrics === "undefined"? "Song not found"
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
</div>
  

  </>)
}

export default SongSearch
