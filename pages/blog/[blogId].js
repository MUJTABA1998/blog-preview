import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Quote from "../../Components/ModuleComponents/Quote";
import Paragraph from "../../Components/ModuleComponents/Paragraph";
import Heading from "../../Components/ModuleComponents/Heading";
import Code from "../../Components/ModuleComponents/Code";
import Image from "../../Components/ModuleComponents/Image";
import List from "../../Components/ModuleComponents/List";
import LinkTag from "../../Components/ModuleComponents/Link";
import { ImTwitter, ImFacebook2, ImLinkedin, ImLink } from "react-icons/im";
import Link from "next/link";
import { useGetSingleBlog } from "../../Controllers/blogController";
import { useRouter } from "next/router";
// import BlogLoader from "./BlogSkeleton";

const profile =
  "https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=600";

export default function Home() {
  const router = useRouter();
  const id = router.query.blogId;
  console.log("ID ---->", id);
  // const { id } = useParams();
  const { loading, blog } = useGetSingleBlog(id);

  function sortContentByType(content) {
    switch (content.type) {
      case "paragraph":
        return <Paragraph content={content.data.text} />;
      case "header":
        return (
          <Heading content={content.data.text} level={content.data.level} />
        );
      case "quote":
        return <Quote content={content} />;
      case "code":
        let code = content.data.html.split("\n");
        return (
          <div className="max-w-2xl h-auto pb-7  pt-7 px-5 mb-4 bg-gray-600 rounded-[4px] text-xs text-white  ">
            {code.map((c, index) => (
              <Code key={index} content={c} />
            ))}
          </div>
        );
      case "image":
        return <Image content={content} />;
      case "Link":
        return <LinkTag link={content.data.link} />;
      case "list":
        return (
          <ul
            className={`ml-10 ${
              content.data.style === "unordered" ? "list-disc" : "list-decimal"
            }`}
          >
            {content.data.items.map((item, index) => (
              <List item={item} key={index} />
            ))}
          </ul>
        );
      default:
        break;
    }
  }
  return (
    <div className="w-full px-4 py-10 mx-auto max-w-7xl">
      <>
        {loading ? (
          <div className="flex items-center justify-center w-full h-screen">
            <h1>Loading....</h1>
          </div>
        ) : (
          <div className="w-full max-w-4xl py-20 mx-auto ">
            {blog !== null ? (
              <div className="flex flex-col items-start justify-start gap-1">
                <div className="flex flex-wrap items-center justify-between w-full gap-6 px-2">
                  <div className="flex items-start justify-start gap-3">
                    <div className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] drop-shadow-sm">
                      <img
                        src={blog.profile ? blog.profile : profile}
                        alt="profile"
                        className="object-cover w-full h-full rounded-full"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-0 md:gap-2">
                      <h4 className="self-start text-gray-700 text-[14px] md:text-[16px] capitalize mt-2 font-[700]">
                        {blog.writtenBy ? blog.writtenBy : "Written By Jhon"}
                      </h4>
                      <div className="flex items-start justify-start gap-3">
                        <h5 className="text-[10px] sm:text-sm text-gray-400">
                          {blog.postedOn}
                        </h5>
                        <h5 className="text-[10px] sm:text-sm text-indigo-500">
                          {blog.follower} followers
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-start gap-4 ml-16 sm:ml-0">
                    <Link href="/" className="text-xs text-gray-700 sm:text-sm">
                      <ImTwitter />
                    </Link>
                    <Link href="/" className="text-xs text-gray-700 sm:text-sm">
                      <ImFacebook2 />
                    </Link>
                    <Link href="/" className="text-xs text-gray-700 sm:text-sm">
                      <ImLinkedin />
                    </Link>
                    <Link href="/" className="text-xs text-gray-700 sm:text-sm">
                      <ImLink />
                    </Link>
                  </div>
                </div>
                <div className="self-start">
                  <h1 className="text-[20px] md:text-[34px] mb-8 text-gray-800 capitalize ml-2 font-[900] mt-5">
                    {blog.title}
                  </h1>
                </div>
                <div className="flex flex-col items-start justify-start gap-2 mt-3 mb-5">
                  {blog.content.blocks.map((bl, index) => (
                    <div key={index} className="w-full h-auto">
                      {sortContentByType(bl)}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        )}
      </>
    </div>
  );
}
