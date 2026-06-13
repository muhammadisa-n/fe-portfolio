import SkeletonBox from "./SkeletonBox";

const ProjectsSkeleton = () => {
  return (
    <div className="projects mt-32 py-10" id="projects">
      <SkeletonBox className="h-10 w-64 mx-auto mb-4" />
      <SkeletonBox className="h-5 w-80 max-w-full mx-auto mb-14" />

      <div className="projects-box m-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-md"
          >
            <SkeletonBox className="h-56 w-full rounded-md mb-4" />
            <SkeletonBox className="h-8 w-3/4 mb-4" />
            <SkeletonBox className="h-5 w-full mb-2" />
            <SkeletonBox className="h-5 w-5/6 mb-4" />

            <div className="flex flex-wrap gap-2 mt-2">
              <SkeletonBox className="h-8 w-20 rounded-md" />
              <SkeletonBox className="h-8 w-24 rounded-md" />
              <SkeletonBox className="h-8 w-16 rounded-md" />
            </div>

            <SkeletonBox className="h-12 w-full rounded-lg mt-8" />
            <SkeletonBox className="h-12 w-full rounded-lg mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSkeleton;
