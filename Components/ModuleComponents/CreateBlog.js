import React, { useRef, useState } from "react";
import EditorJs from "@natterstefan/react-editor-js";
import { EDITOR_JS_TOOLS } from "../../utillities/editor-constants";
import { v4 as uid } from "uuid";
import alertController from "../../Controllers/alertController";
import { getAuth } from "../../Controllers/authController";
import BlogController from "../../Controllers/blogController";

let editordata = null;

export const CreateBlog = ({ setBlogs, blogs }) => {
  const editorRef = useRef();

  const user = getAuth();

  const [title, setTitle] = useState("");

  const save = async () => {
    try {
      const content = await editordata.save();
      if (content) {
        console.log("Content.....\n", content);
        return content;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editordata === null || title === "" || file === null) {
      alertController.show("All field are require!", "info");
      return;
    }
    if (title.length < 10) {
      alertController.show("Title must be 30 words long.", "danger");
      return;
    }
    let cont = await save();
    const data = new FormData();
    if (cont) {
      console.log("running........");
      const newBlog = {
        creator: user?._id,
        title,
        followers: [],
        content: {
          time: cont?.time.toString(),
          version: cont?.version,
          blocks: cont?.blocks,
        },
      };
      data.append("data", newBlog);

      // setBlogs([...blogs, newBlog]);
      console.log("New Blog ===> ", data);
      BlogController.createBlog(newBlog, file)
        .then((res) => {
          console.log("Res____", res);
          if (res === true) {
            alertController.show("Blog Created Successfully", "success");
          }
        })
        .catch((err) => {
          // alertController.show(err, "danger");
          console.log(err, "Error");
        });
      setTitle("");
      editordata.clear();
    } else {
      console.log("not runngin ...........");
    }
  };

  const [coverPic, setCoverPic] = useState(null);
  const [file, setFile] = useState(null);

  const handleCoverPic = (e) => {
    const url = URL.createObjectURL(e);
    setFile(e);
    setCoverPic(url);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col items-start justify-start w-full h-auto gap-4 py-20">
        <div className="w-full">
          <textarea
            placeholder="Blog title"
            value={title}
            onChange={handleChange}
            className=" w-full min-h-[100px]  resize-none border-none first-letter:uppercase   -mb-4 text-gray-800 capitalize  rounded-[5px] px-5  outline-none text-[20px] md:text-[34px] font-[900] placeholder:md:text-[34px] placeholder:text-[20px] placeholder:font-[900] placeholder:text-gray-800 font-main placeholder:capitalize "
          />
          <div className="flex items-center w-[270px] sm:w-[350px] justify-center space-x-4 ml-2">
            <div className="shrink-0">
              <img
                className="object-cover w-12 h-12 rounded-full"
                src={
                  coverPic !== null
                    ? coverPic
                    : "https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
                alt="profile"
              />
            </div>
            <label className="block">
              <span className="sr-only">Choose cover photo</span>
              <input
                type="file"
                onChange={(e) => handleCoverPic(e.target.files[0])}
                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 font-main file:rounded-full file:border-0 file:font-semibold file:bg-gray-50 file:text-gray-900 file:text-xs hover:file:bg-violet-100 "
              />
            </label>
          </div>
        </div>
        <div className="self-start max-w-5xl -ml-2 mt-[50px]" ref={editorRef}>
          <EditorJs
            placeholder="Start Write Your Blog"
            tools={EDITOR_JS_TOOLS}
            editorInstance={(instance) => {
              editordata = instance;
            }}
            className=""
          />
        </div>
        <div className="flex items-start justify-start w-full gap-6">
          <button
            className="px-5 py-2 ml-3 bg-gray-800 tracking-wider text-white font-main rounded-[5px]"
            onClick={handleSubmit}
          >
            Submit Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;

// code
