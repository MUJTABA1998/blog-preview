import axios from "axios";
import React from "react";

class BlogController {
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
