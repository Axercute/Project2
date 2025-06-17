# Axercute Your Voice

#### Are you a street performer looking to take your music to the next level? **Axercute Your Voice** is designed with you in mind — a powerful yet simple app that helps buskers rehearse, perform, and grow their audience on the go. Whether you're fine-tuning your vocals, managing your setlist, or tracking earnings, we’ve got the tools to support your hustle.

Before we dive into how the code works, make sure to view the presentation slides beforehand. Just [click here][link] to see the presentation slide

[link]: https://docs.google.com/presentation/d/12e53FcmHqKgRTRwG9EllZB6guX7C-W0Fr6ONzLlqi5s/edit?usp=sharing

## Navigation

- Currently there are 3 Navigation that will bring you from the homepage

#### 1. Home page

This is the home page for introduction. There are navigation bar to go into the other tabs

#### 2. Song Search Page

This is Song Search Page where user needs to enter the exact song name and singer to display the lyrics
They are able to add song lyrics directly into their profile provided if the backend works (Lyrics.OVH could be down occassionally)

#### 3. Singer Login Page

This is the singer saved song page that you can view your song and make edits to change or delete songs

#### 4. Singer Search Page (On Beta)

This is the page where users can search for their favorite singer

## How it works? From here on, it will all be coding explanation so sit tight for a bumpy ride

#### 👉Song Search

- There are 5 object variables, songname, singername, lyrics, videolink and songid
  It can be found in setStateVariable

```javascript
//manage change
const [SongSearchChangeState, SetSongSearchChangeState] = useState({
  songname: "",
  singername: "",
  lyrics: "",
  videolink: "",
  songid: "",
});
```

- Using Lyrics.ovh, you have to enter the singer name and song name together, both has to match exactly
  Spaces is tolerated however, caps is totally taken care of. File is located in FetchLyricsOVH.js
  https://api.lyrics.ovh/v1/*singername*/*songname*

- Typing is captured with the useState handleChange
  handleChange is in App.jsx, which is passed in as a prop to SongSearch.jsx
  > handleChange

```javascript
const [SongSearchChangeState, SetSongSearchChangeState] = useState({
  songname: "",
  singername: "",
  lyrics: "",
  videolink: "",
  songid: "",
});
const handleChange = (event) => {
  SetSongSearchChangeState((prevValue) => ({
    ...prevValue,
    [event.target.name]: event.target.value,
  }));
  console.log("handleChange", SongSearchChangeState);
};
```

- This is the input

```javascript
  <label htmlFor="songname" className="w-28 flex">Song Name:</label>
  <input
  id="songname"
  name="songname"
  type="text"
  placeholder="Billie Jean"
  value={SongSearchChangeState.songname}
  onChange={handleChange}
  />
```

> So label + id + name are all the same, type is text, placeholder is set on string

> label states clearly htmlFor = What, the What is the id, songname

The important stuff are value and onChange.

1. Value is SongSearchChangeState.songname as we are using the object to store data
2. onChange is handled with the function handleChange which is located in App.jsx
   handleChange is coped with

```javascript
SetSongSearchChangeState((prevValue) => ({
  ...prevValue,
  [event.target.name]: event.target.value,
}));
```

> prevValue is fixed on event passing ((event)=>(...event,added stuff))

> In added stuff, hardcoded [event.target.name] is placed so the event.target is labelling to the name which is songname, event.target.value is what is typed in value which is current {SongSearchChangeState.songname}

> The explanation is exactly the same for singername

- Submitting is captured with the useState handleSubmit, same format, passed in from App.jsx

> Logic is the same, event is what is passed in

> handleSubmit is passed with the event.

```javascript
  <form onSubmit={(event)=>{
  handleSubmit(event)
  event.preventDefault();
  SetShowButton(true);
  }
  }
  >
```

> event.preventDefault() preventing the page to overload

> event is passed into handleSubmit, which is equivalent to what is displayed below

```javascript
const handleSubmit = async () => {
  console.log(SongSearchChangeState);
  const FetchLyrics = await fetchLyricsOVH(SongSearchChangeState); //Turn it from json to const object
  SetSongSearchChangeState({
    songname: "",
    singername: "",
    lyrics: "",
    videolink: "",
  });
  console.log(FetchLyrics);
  SetSongSearchState({
    songname: `${SongSearchChangeState.songname}`,
    singername: `${SongSearchChangeState.singername}`,
    lyrics: `${FetchLyrics}`,
  });
  return SongSearchState;
};
```

> So what handleSubmit captured is the object of SongSearchChangeState.

> > console.logging is to show what is captured exactly.

> > > FetchLyrics came from what is initially introduced in FetchLyricsOVH.js

```javascript
const fetchLyricsOVH = async (props) => {
  try {
    const songFetch = await fetch(
      `https://api.lyrics.ovh/v1/${props.singername}/${props.songname}`,
    );
    console.log(songFetch);
    const songJson = await songFetch.json();
    console.log(songJson.lyrics);
    return songJson.lyrics;
  } catch (error) {
    console.error("caught error:", error);
    return null;
  }
};
export default fetchLyricsOVH;
```

> props is SongSearchChangeState and props.element is what is exactly in that object

> > Once song is fetched, it gives a lyrics with songJson.lyrics

> > If error is found, it will show the error by "caught error:"

> > Let's say it is successful, songJson.lyrics will return

```javascript
const FetchLyrics = await fetchLyricsOVH(SongSearchChangeState); //Turn it from json to const object
```

> It will be stored as FetchLyrics, then it will be saved in SongSearchState

```javascript
SetSongSearchState({
  songname: `${SongSearchChangeState.songname}`,
  singername: `${SongSearchChangeState.singername}`,
  lyrics: `${FetchLyrics}`,
});
return SongSearchState;
```

> It will be captured! towards SongSearchState

## Render! Let's come to the part on rendering for SongSearchState

> Just take note react renders through jsx, so it is not CSS default.

#### Lyrics rendering

```javascript
{
  /* lyrics */
}
<div
  style={{ whiteSpace: "pre-wrap" }}
  className="mx-auto my-2 h-110 w-1/3 overflow-scroll rounded-3xl border-2 bg-blue-400"
>
  {SongSearchState.lyrics === "null" || SongSearchState.lyrics === "undefined"
    ? "Song not found"
    : SongSearchState.lyrics}
</div>;
```

- style whitespace prewrap helps to convert all html spaces /n etc into actual render, classNames is done by Tailwindcss.

- If Song is failed to fetch, it will not show the lyrics but "Song not found"

#### Song adding to airtable

```javascript
{
  ShowButton &&
    SongSearchState.lyrics !== "null" &&
    SongSearchState.lyrics !== "undefined" &&
    SongSearchState.lyrics !== "" && (
      <button
        style={{ marginTop: "10px" }}
        onClick={() => {
          handleCreateSong(SongSearchState);
          SetShowButton(false);
          window.alert("Song Submitted, please add a new song");
        }}
      >
        Give me this song
      </button>
    );
}
```

> > So the add button is only shown if the SongSearchState.lyrics is met, no hiccups basically. Once all consensus is matched, you can save the song.

> > The song will be saved under handleCreateSong after clicking

> > Alert will be shown as well to instruct them it is saved successfully
