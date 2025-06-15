import { useEffect } from "react";
import { useNavigate } from "react-router";

const SingerLogin = ({ SongList }) => {
  useEffect(() => {
    console.log("SongList updated:", SongList);
  }, [SongList]);
  const navigate = useNavigate();

  return (
    <>
      {SongList.map((element, index) => (
        <div
          key={index}
          className="w-1/4 h-40 mx-auto border-4 rounded-3xl flex flex-col flex-wrap justify-center my-2 bg-amber-300"
        >
          <div className=" font-extrabold text-4xl text-pink-950 font-mono">
            {element.fields.songname}
          </div>
          <div className=" text-fuchsia-700 text-3xl font-serif ">
            {element.fields.singername}
          </div>
          <button
            onClick={() => {
              navigate(`/singerLogin/${element.fields.songname}`);
            }}
            className="bg-gradient-to-br         from-orange-950 to-yellow-700"
          >
            View Whole Song
          </button>
        </div>
      ))}
    </>
  );
};
export default SingerLogin;
