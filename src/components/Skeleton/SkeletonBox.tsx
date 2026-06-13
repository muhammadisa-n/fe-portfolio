type SkeletonBoxProps = {
  className?: string;
};

const SkeletonBox = ({ className = "" }: SkeletonBoxProps) => {
  return (
    <div
      className={`animate-pulse rounded-md bg-zinc-300 dark:bg-zinc-700 ${className}`}
    />
  );
};

export default SkeletonBox;
