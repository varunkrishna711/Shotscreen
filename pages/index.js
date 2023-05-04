import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getScreenshot = async () => {
    try {
      setLoading(true);
      const res = await axios.get("api/screenshot/", {
        params: { url },
      });
      const { data } = res;
      setLoading(false);
      setResponse(data.screenshotUrl);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  return (
    <div className="flex flex-col md:px-12 px-0 relative bg-background font-raleway items-center min-h-screen">
      <h1 className="text-6xl text-primary font-bold mt-12">
        Welcome to <span className="text-active">SHOTSCREEN</span>
      </h1>
      <h2 className="text-active text-2xl mt-6">
        Screenshots in a giffy!!!
      </h2>
      <form
        className="sm:mx-auto mt-12 md:max-w-4xl justify-center flex flex-col sm:w-full sm:flex"
        onSubmit={(e) => {
          getScreenshot();
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <input
          type="text"
          className="flex w-full rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
          placeholder="Enter a url eg: https://www.google.com"
          onChange={(e) => {
            setUrl(e.target.value);
            setResponse(null);
          }}
        />

        <button
          className="mt-5 w-full rounded-lg px-5 py-3 bg-active text-base text-background font-bold hover:text-active hover:bg-primary transition-colors duration-300 sm:px-10"
          type="submit"
        >
          {loading ? <>Loading..</> : <>Submit</>}
        </button>
      </form>

      {/* <div>
        {loading ? (
        <div className="loading-animation flex flex-col justify-center align-center h-40">
          <div className="loader border-16 border-solid border-gray-300 border-t-16 border-blue-500 rounded-full w-120 h-120 animate-spin">
            <img src="https://w7.pngwing.com/pngs/893/180/png-transparent-throbber-computer-icons-data-buffer-buffer-solution-white-text-rectangle.png"/>
          </div>
        </div>
      ): null}
      </div> */}

      {error && (
        <span className="text-active text-xl mt-6">
          Error: Failed to get the screenshot. Please try again.
        </span>
      )}

      {response && (
        <div className="mt-10 ">
          <h2 className="text-xl font-bold text-active">Screenshot</h2>
          <img src={response} className="mt-3 w-full h-full rounded-lg" />
        </div>
      )}

      <div className="mt-20 mb-10 text-center">
        <p className="text-primary text-xs">
         Built by Varun Krishna -{" "}
          <a
            className="hover:text-active"
            href="https://github.com/varunkrishna711"
          >
            See my Github Profile
          </a>
        </p>
      </div>
    </div>
  );
}
