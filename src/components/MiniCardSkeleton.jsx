import { useSelector } from "react-redux";

function MiniCardSkeleton() {
  const { theme } = useSelector((state) => state.movieSearch);
  const baseTone = theme ? "bg-slate-700" : "bg-slate-200";
  const raisedTone = theme ? "bg-slate-600" : "bg-slate-300";

  return (
    <div
      className={`relative flex animate-pulse flex-col gap-2 overflow-hidden rounded-2xl border p-2 ${
        theme
          ? "border-slate-700 bg-slate-800"
          : "border-slate-200 bg-white"
      }`}
      role="status"
      aria-label="Loading movie"
    >
      <div className={`relative aspect-[2/3] w-full rounded-2xl ${baseTone}`}>
        <div
          className={`absolute right-2 top-2 h-7 w-15 rounded-2xl ${raisedTone}`}
        />
      </div>

      <div className="flex items-center gap-2">
        <div className={`size-4 rounded ${baseTone}`} />
        <div className={`h-3 w-12 rounded-full ${baseTone}`} />
      </div>

      <div className={`h-6 w-4/5 rounded-md ${baseTone}`} />

      <div className="flex h-8 items-center gap-2">
        <div className={`h-5 w-16 rounded-full ${baseTone}`} />
        <div className={`h-5 w-20 rounded-full ${baseTone}`} />
      </div>

      <div className={`h-7 w-24 rounded-2xl ${baseTone}`} />
      <span className="sr-only">Loading movie details...</span>
    </div>
  );
}

export default MiniCardSkeleton;
