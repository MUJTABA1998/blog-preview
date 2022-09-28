import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BlogSkeleton = () => {
  return (
    <div className="grid  w-full max-w-[700px] grid-cols-2 gap-3">
      <div className="w-[100%] lg:w-[140%]">
        <Skeleton height={30} width={250} />
        <Skeleton height={30} width={160} />
        <Skeleton height={15} width={250} className="mt-5" />
        <Skeleton height={15} width={250} />
      </div>
      <div className="w-[60%] ml-10">
        <Skeleton height={125} width={180} />
      </div>
    </div>
  );
};

export default BlogSkeleton;
