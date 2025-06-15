import "./HomePage.css";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <header className="hero">
        <h1>🎤 Welcome to Axercute Your Voice</h1>
        <p>Discover, Support & Sing Along with Your Favorite Artists</p>
      </header>

      <section className="features">
        <div className="feature-card">
          <h2>🎶 Find Song Lyrics</h2>
          <p>
            Can’t remember that one lyric? We’ve got you covered. Search for
            song lyrics by title and artist and sing along with ease.
          </p>
          <button
            onClick={() => {
              navigate("/songSearch");
            }}
          >
            Search for my Song
          </button>
        </div>

        <div className="feature-card">
          <h2>🔍 Search Singers</h2>
          <p>
            Explore a growing directory of talented singers and buskers from
            around the world. Whether they’re performing on the street or
            online, you can easily find them by name, genre, or popularity.
          </p>
          <button
            onClick={() => {
              navigate("/singerSearch");
            }}
          >
            Search for my Singer
          </button>
        </div>

        <div className="feature-card">
          <h2>🎙️ Interested to be a Singer?</h2>
          <p>
            Sign in and become a singer yourself! Registration is free for the
            first 100 customers.
          </p>
          <button onClick={() => navigate("/singerLogin")}>
            Become a Singer
          </button>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 StreetStage. Built with ❤️ for music lovers everywhere.</p>
      </footer>
    </div>
  );
};

export default HomePage;
