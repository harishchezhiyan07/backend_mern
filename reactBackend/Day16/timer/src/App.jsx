
import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setData((p) => p + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-purple-950 to-indigo-950 p-6">
      <div className="w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-10 text-center shadow-2xl shadow-purple-500/20 backdrop-blur-xl">

        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/40">
          <span className="text-4xl">⏱️</span>
        </div>

        <h1 className="mb-2 text-3xl font-extrabold tracking-wide text-white">
          React Timer
        </h1>

        <p className="mb-8 text-sm text-purple-200">
          Time keeps moving. Keep building!
        </p>

        <div className="rounded-2xl border border-white/10 bg-black/20 px-6 py-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">
            Seconds elapsed
          </p>

          <h2 className="animate-pulse text-7xl font-black tabular-nums text-transparent bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text">
            {data}
          </h2>

          <p className="mt-4 text-sm text-gray-300">
            {data === 1 ? "1 second passed" : `${data} seconds passed`}
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          <span className="h-2.5 w-2.5 animate-ping rounded-full bg-green-400"></span>
          <span className="text-sm font-medium text-green-300">
            Timer Running
          </span>
        </div>

        <p className="mt-8 text-xs text-white/40">
          Built with React + Tailwind CSS
        </p>
      </div>
    </div>
  );
};

export default App;
