import SkeletonBox from "./SkeletonBox";

const ToolsSkeleton = () => {
  return (
    <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="flex items-center gap-2 p-3 border dark:border-zinc-600 border-zinc-300 rounded-md"
        >
          <SkeletonBox className="w-14 h-14 rounded" />

          <div className="flex-1">
            <SkeletonBox className="h-5 w-3/4 mb-2" />
            <SkeletonBox className="h-4 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToolsSkeleton;
