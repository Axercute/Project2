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
        <div>
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
      <div className="bg-violet-500 w-1/3 border-2 mx-auto rounded-2xl my-1">
        <h3 className="text-center text-2xl text-pink-400 font-mono font-extrabold">
          {renderDetails.fields.songname}
        </h3>
        <div className="text-2xl text-red-200 font-semibold">
          {renderDetails.fields.singername}
        </div>
      </div>

      {/* Lyrics */}
      <div className=" bg-green-500 w-1/3 border-2 mx-auto rounded-4xl mb-10 overflow-scroll h-[40svh]">
        <div
          className="text-center text-1xl text-grey-200 font-medium"
          style={{ whiteSpace: "pre-wrap" }}
        >
          {renderDetails.fields.lyrics}
        </div>
      </div>

      {/* Song Link Update */}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleUpdate(SongSearchChangeState);
        }}
        className="bg-amber-300 w-2/5 h-15 mx-auto border-2 rounded-3xl flex flex-row flex-wrap justify-center items-center"
      >
        <label htmlFor="videolink" className="mr-1">
          Video Link:
        </label>
        <input
          type="text"
          id="videolink"
          name="videolink"
          value={SongSearchChangeState.videolink}
          placeholder="www.youtube.com/videolink"
          onChange={handleChange}
          className="bg-amber-50 rounded flex w-100"
        />
        <button type="submit">Submit Video</button>
      </form>

      <button
        onClick={() => {
          handleDelete(SongSearchChangeState);
          navigate("/singerLogin");
        }}
      >
        Delete This Song
      </button>
    </>
  );
};
export default SongDetail;
