import axios from "axios";
import React, { useState, useEffect } from "react";
import store from "../store";
import { allBlogs } from "../store/blogSlice";

class BlogController {
  static getAllBlogs() {
    return new Promise((resolve, reject) => {
      console.log("Calling..........");
      axios
        .get("https://speecto.herokuapp.com/blog/blog")
        .then((res) => {
          console.log(res, "Response");
          if (res.data.success) {
            store.dispatch(allBlogs(res.data.data));
            resolve(true);
          } else {
            reject(res.data.error.message);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static getBlog(id) {
    return new Promise((resolve, reject) => {
      axios
        .get(`https://speecto.herokuapp.com/blog/blog/${id}`)
        .then((res) => {
          console.log("Res -----> ", res);
          if (res.data.success) {
            // store.dispatch(getBlog(res.data.data));
            resolve(res.data.data);
          } else {
            reject(res.data.error.message);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export const useGetAllBlogs = () => {
  const { blogs } = store.getState().blog;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!blogs.length > 0) {
      setLoading(true);
      setTimeout(() => {
        BlogController.getAllBlogs()
          .then((res) => {
            if (res) {
              setBlogs(res);
            }
          })
          .catch((err) => setLoading(false));
      }, 500);
    } else {
      setLoading(false);
    }
  }, [blogs.length, setLoading]);

  return { loading, blogs };
};

export const useGetSingleBlog = (id) => {
  const [loading, setLoading] = React.useState(false);
  const [blog, setBlog] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    BlogController.getBlog(id)
      .then((res) => {
        if (res) {
          setLoading(false);
          setBlog(res);
        }
      })
      .catch((err) => {
        console.log("Err ...", err);
        setLoading(false);
      });
  }, []);

  return { loading, blog };
};

export default BlogController;
