import { useEffect, useState } from "react";

const SongSearch = ({
  SongSearchChangeState,
  handleChange,
  handleSubmit,
  SongSearchState,
  handleCreateSong,
  Loading,
}) => {
  const [ShowButton, SetShowButton] = useState(false);
  const [ShowAlert, SetShowAlert] = useState(false);

  //Renderino
  return (
    <>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
          event.preventDefault();
          SetShowButton(true);
        }}
        className="bg-gradient-to-br from-fuchsia-950 to-amber-700 w-1/3 mx-auto border-2 rounded-3xl flex-wrap flex-center flex-col"
      >
        <div className="flex flex-row">
          <label htmlFor="songname" className="w-28 text-outline">
            Song Name:
          </label>
          <input
            id="songname"
            name="songname"
            type="text"
            placeholder="Billie Jean"
            value={SongSearchChangeState.songname}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-row">
          <label htmlFor="singername" className="w-28 text-outline">
            Singer Name:
          </label>
          <input
            id="singername"
            name="singername"
            type="text"
            placeholder="Michael Jackson"
            value={SongSearchChangeState.singername}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="flex">
          Get my lyrics
        </button>

        {/* lyrics */}
        <div
          className={`bg-gradient-to-br from-green-400 to-fuchsia-800 w-10/12 border-2 h-125 rounded-3xl 
overflow-y-auto font-semibold whitespace-pre-wrap ${Loading && `flex-center`}`}
        >
          {Loading ? (
            <div class="lds-dual-ring"></div>
          ) : SongSearchState.lyrics === "null" ||
            SongSearchState.lyrics === `undefined` ? (
            "Song not found"
          ) : (
            SongSearchState.lyrics
          )}
        </div>

        {ShowButton &&
          SongSearchState.lyrics !== "null" &&
          SongSearchState.lyrics !== "undefined" &&
          SongSearchState.lyrics !== "" &&
          !Loading && (
            <button
              onClick={() => {
                handleCreateSong(SongSearchState);
                SetShowButton(false);
                SetShowAlert(true);
              }}
              className="w-1/2"
            >
              Give me this song
            </button>
          )}
      </form>

      {ShowAlert && (
        <div className="alert-button">
          Song Submitted, please pick a new song
          <button
            onClick={() => {
              SetShowAlert(false);
            }}
          >
            Understood
          </button>
        </div>
      )}
    </>
  );
};

export default SongSearch;
