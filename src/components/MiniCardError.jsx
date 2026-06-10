import { useSelector } from "react-redux";

function MiniCardError({ error }) {
  const { theme } = useSelector((state) => state.movieSearch);
  const message = "Something went wrong while loading movies." ;

  return (
    <div
      className={`flex min-h-60 w-full flex-col items-center justify-center  gap-4 rounded-2xl border p-6 text-center ${
        theme
          ? "border-red-900/60 bg-slate-800 text-slate-100"
          : "border-red-200 bg-red-100 text-slate-900"
      }`}
      role="alert"
    >
      <div
        className={`flex size-12 items-center justify-center rounded-full text-xl font-semibold ${
          theme
            ? "bg-red-950 text-red-300"
            : "bg-red-200 text-red-600"
        }`}
        aria-hidden="true"
      >
        !
      </div>

      <div className="max-w-sm">
        <h2 className="text-lg font-semibold">Unable to load movies</h2>
        <p
          className={`mt-1 text-sm ${
            theme ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {message}
        </p>
      </div>

      <p className={theme ? "text-xs text-slate-500" : "text-xs text-slate-400"}>
        Please check your connection and try again.
      </p>
    </div>
  );
}

export default MiniCardError;
