// components/blog/BlogSkeleton.tsx
export default function BlogSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto animate-pulse">
      {Array.from({ length: 6 }).map((_, idx) => (
        <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-slate-100 flex flex-col h-full min-h-[420px]">
          {/* Simulated Image Box */}
          <div className="aspect-[16/8] bg-slate-200 w-full" />
          
          {/* Simulated Content Block */}
          <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              {/* Simulated Metadata */}
              <div className="h-3 bg-slate-200 rounded w-1/3" />
              {/* Simulated Title lines */}
              <div className="h-5 bg-slate-200 rounded w-3/4" />
              <div className="h-5 bg-slate-200 rounded w-1/2" />
              {/* Simulated Excerpt lines */}
              <div className="space-y-2 pt-2">
                <div className="h-3 bg-slate-200 rounded w-full" />
                <div className="h-3 bg-slate-200 rounded w-5/6" />
              </div>
            </div>
            {/* Simulated Action Button */}
            <div className="h-4 bg-slate-200 rounded w-1/4 mt-4" />
          </div>
        </div>
      ))}
    </div>
  );
}