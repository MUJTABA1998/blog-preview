import { useEffect, useState } from "react";
import { useGetAllBlogs } from "../Controllers/blogController";
import SkeletonLoader from "../Components/CoreComponents/Skeleton";
import Link from "next/link";

const Index = () => {
  const { loading, blogs } = useGetAllBlogs();
  // const [loader, setLoader] = useState(true);

  console.log("Blogs ---->", blogs, loading);

  // useEffect(() => {
  //   if (!blogs.length > 0) {
  //     setLoader(true);
  //   } else {
  //     setLoader(false);
  //   }
  // }, [blogs.length]);

  const getParaGraphs = (index) => {
    const block = blogs[index].content.blocks;
    const paras = block.filter((bl) => {
      if (bl.type === "paragraph") return bl;
      return null;
    });
    return paras.length > 0
      ? paras[0].data.text.replace("<br>", "")
      : "Lorem Ipsum is simply dummy text of the printing and typesetting induss";
  };

  return (
    <div className=" px-6 py-6 mb-6 flex flex-col justify-center  gap-6 m-auto w-full h-full">
      <h1 className="text-center">Famous Articles</h1>
      <div className="flex flex-row mt-10 flex-wrap items-center w-full justify-center gap-8">
        <>
          {loading ? (
            <SkeletonLoader />
          ) : (
            <>
              {blogs?.map((blog, index) => (
                <Link href={`/blog/${blog?._id}`}>
                  <a>
                    <div
                      className="max-w-[300px] flex flex-col justify-start items-start gap-[10px] w-full h-[300px] "
                      key={index}
                    >
                      <div className="w-full max-h-[150px] h-full overflow-hidden">
                        <img
                          src={blog?.picture ? blog.picture.image.url : ""}
                          alt="Blog cover Picture"
                          className="object-cover  h-[150px] rounded-[10px] w-[300px]"
                        />
                      </div>
                      <h3 className="px-1 text-[18px]">{blog?.title}</h3>
                      <p className="text-[13px]  px-1 text-gray-400 font-light">
                        {getParaGraphs(index).slice(0, 100) + `....`}{" "}
                        <span className="text-blue-400">Read more</span>
                      </p>
                      <div className="flex flex-row gap-3 items-center">
                        <p className="text-[10px] px-1 text-gray-600 font-light">
                          Posted on{" "}
                          {blog?.createdAt.slice(0, 10).replaceAll("-", "/")}
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default Index;
