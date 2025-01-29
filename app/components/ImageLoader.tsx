import { Skeleton } from "@/components/ui/skeleton";

const ImageLoader = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="aspect-square w-full rounded-xl" />
    </div>
  );
};

export default ImageLoader;
