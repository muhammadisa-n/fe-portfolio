import SkeletonBox from "./SkeletonBox";

const HomeSkeleton = () => {
  return (
    <div className="hero grid md:grid-cols-2 pt-12 items-center xl:gap-0 gap-6 grid-cols-1">
      <div>
        <SkeletonBox className="h-14 w-full mb-6" />
        <SkeletonBox className="h-5 w-full mb-3" />
        <SkeletonBox className="h-5 w-5/6 mb-6" />

        <div className="flex items-center sm:gap-4 gap-2">
          <SkeletonBox className="h-14 w-36 rounded-2xl" />
          <SkeletonBox className="h-14 w-36 rounded-2xl" />
        </div>
      </div>

      <SkeletonBox className="w-[500px] max-w-full h-[420px] md:ml-auto rounded-2xl" />
    </div>
  );
};

export default HomeSkeleton;
