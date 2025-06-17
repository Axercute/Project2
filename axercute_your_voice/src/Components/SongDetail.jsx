//src\Components\SongDetail\SongDetail.jsx

import { useParams, useNavigate } from "react-router";
import { useEffect } from "react";

const SongDetail = ({
  SongList,
  handleDelete,
  handleChange,
  SongSearchChangeState,
  SetSongSearchChangeState,
  handleUpdate,
}) => {
  const { songName } = useParams();
  const navigate = useNavigate();
  const renderDetails = SongList.find(
    (element) => element.fields.songname === songName,
  );

  useEffect(() => {
    console.log("URL params:", songName);
  }, []);

  useEffect(() => {
    console.log("Whole Song List", SongList);
  }, []);

  useEffect(() => {
    if (renderDetails) {
      SetSongSearchChangeState({ songid: renderDetails.id }); //set songid when rendertails is ready
    }
  }, [renderDetails]);

  return (
    <>
      {/* Chat GBTed */}
      {renderDetails.fields.videolink ? (
        <div className="flex-center">
          <iframe
            className="h-70 w-1/3"
            src={
              renderDetails.fields.videolink.includes("watch?v=")
                ? `https://www.youtube.com/embed/${renderDetails.fields.videolink.split("v=")[1].split("&")[0]}`
                : renderDetails.fields.videolink
            }
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <p>
          <em>No video linked yet.Add Video at the bottom</em>
        </p>
      )}

      {/* Song Title and Artist */}
      <div className="mx-auto w-1/3 rounded-2xl border-2 
      bg-gradient-to-r from-amber-500 to-red-500 my-1 pb-2 capitalize">
        <div className="text-4xl font-extrabold text-pink-400 text-outline capitalize">
          {renderDetails.fields.songname}
        </div>
        <div className="text-2xl font-semibold text-orange-50 text-outline">
          by {renderDetails.fields.singername}
        </div>
      </div>

      {/* Lyrics */}
      <div className="mx-auto h-75 w-1/3 overflow-y-auto rounded-4xl border-2 bg-gradient-to-br from-green-400 to-fuchsia-800">
        <div className="text-2sm text-neutral-900 font-mono whitespace-pre-wrap">
          {renderDetails.fields.lyrics}
        </div>
      </div>

      {/* Song Link Update */}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleUpdate(SongSearchChangeState);
        }}
        className="mx-auto flex-center h-15 w-1/2 flex-row rounded-3xl border-2 mt-1
         bg-gradient-to-r from-amber-500 to-red-500"
      >
        <label htmlFor="videolink" className="mr-1 text-black">
          Video Link:
        </label>
        <input
          type="text"
          id="videolink"
          name="videolink"
          value={SongSearchChangeState.videolink}
          placeholder="www.youtube.com/videolink"
          onChange={handleChange}
          className="w-1/2 focus:bg-emerald-400"
        />
        <button type="submit">Submit Video</button>

        <button
        onClick={() => {
          handleDelete(SongSearchChangeState);
          navigate("/singerLogin");
        }}
        className="flex-col bg-gradient-to-r from-white to-amber-300"
      >
        Delete This Song
      </button>

      </form>
    </>
  );
};
export default SongDetail;
