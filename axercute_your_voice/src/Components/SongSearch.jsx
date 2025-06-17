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
        className="flex-center mx-auto w-1/3 flex-col flex-wrap rounded-3xl border-2
         bg-gradient-to-br from-fuchsia-950 to-amber-700 mt-3"
      >
        <div className="flex flex-row my-2">
          <label htmlFor="songname" className="text-outline w-28">
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
          <label htmlFor="singername" className="text-outline w-28">
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
          className={`h-120 w-10/12 overflow-y-auto rounded-3xl border-2 bg-gradient-to-br from-green-400 to-fuchsia-800 font-semibold whitespace-pre-wrap ${Loading && `flex-center`}`}
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
