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
          className="mx-auto my-2 flex h-40 w-1/4 flex-col flex-wrap justify-center rounded-3xl border-4 bg-amber-300"
        >
          <div className="font-mono text-4xl font-extrabold text-indigo-600 text-outline capitalize">
            {element.fields.songname}
          </div>
          <div className="font-bold text-2xl text-emerald-500 text-outline capitalize"> 
            {element.fields.singername}
          </div>
          <button
            onClick={() => {
              navigate(`/singerLogin/${element.fields.songname}`);
            }}
            className="bg-amber-800 hover:bg-amber-950 text-white"
          >
            View Whole Song
          </button>
        </div>
      ))}
    </>
  );
};
export default SingerLogin;
