// AuthorDetail.tsx
import { useParams } from "react-router-dom";
import { data } from "./data";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthorDetail = () => {
  const params = useParams();
  const navigate = useNavigate();

  const newData = data.find(
    (author) => author.name.replace(/\s+/g, "") === params.authorName
  );

  const [posts, setPosts] = useState(newData?.posts);

  const postLikes = posts?.map((post) => post.postLikes);
  const totalLikes = postLikes?.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  const sortByAscendingDate = () => {
    if (!posts) return;
    const postDatesAsTimeStamps = posts.map((post) => {
      return new Date(post.postDate).getTime();
    });

    const sortedPosts = [...posts].sort((a, b) => {
      const timeStampA = postDatesAsTimeStamps[posts.indexOf(a)];
      const timeStampB = postDatesAsTimeStamps[posts.indexOf(b)];
      return timeStampA - timeStampB;
    });

    setPosts(sortedPosts);
  };

  const sortByDescendingDate = () => {
    if (!posts) return;
    const postDatesAsTimeStamps = posts.map((post) => {
      return new Date(post.postDate).getTime();
    });

    const sortedPosts = [...posts].sort((a, b) => {
      const timeStampA = postDatesAsTimeStamps[posts.indexOf(a)];
      const timeStampB = postDatesAsTimeStamps[posts.indexOf(b)];
      return timeStampB - timeStampA;
    });

    setPosts(sortedPosts);
  };

  const sortByAscendingLikes = () => {
    if (!posts) return;
    const sorted = [...posts].sort((a, b) => a.postLikes - b.postLikes);
    setPosts(sorted);
  };

  const sortByDescendingLikes = () => {
    if (!posts) return;
    const sorted = [...posts].sort((a, b) => b.postLikes - a.postLikes);
    setPosts(sorted);
  };

  const navigateToPosts = (postName: string) => {
    navigate(`/blog-website/posts/${postName.replace(/\s/g, "")}`);
  };

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center mt-5">
          <div
            className="card text-center bg-dark text-white mt-5 mx-2"
            style={{ borderStyle: "none" }}
          >
            <img
              className="card-img-top mt-3"
              src={newData?.img}
              alt="author"
              style={{ width: "30%", margin: "0 auto" }}
            />
            <div className="card-body">
              <h1 className="card-title">{newData?.name}</h1>
              <p className="card-text text-white-50">
                mobile : {newData?.mobile}
              </p>
              <h5 className="text-uppercase">
                posts : {newData?.posts.length}
              </h5>
              <h5 className="text-uppercase">likes : {totalLikes}</h5>
            </div>
          </div>
        </div>
        <h2 className="my-4">Posts</h2>
        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-center flex-wrap">
              <div
                className="btn btn-primary mb-1 sort-buttons"
                onClick={sortByAscendingDate}
              >
                Ascending by Date
              </div>
              <div
                className="btn btn-primary mb-1 sort-buttons"
                onClick={sortByDescendingDate}
              >
                Descending by Date
              </div>
              <div
                className="btn btn-primary mb-1 sort-buttons"
                onClick={sortByAscendingLikes}
              >
                Ascending by Like
              </div>
              <div
                className="btn btn-primary mb-1 sort-buttons"
                onClick={sortByDescendingLikes}
              >
                Descending by Like
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <div className="d-flex flex-column">
            {posts?.map((post) => (
              <div
                key={post.postName}
                className="d-flex justify-content-between px-4 py-2 border border-dark-50 mb-3 flex-wrap"
                style={{ cursor: "pointer" }}
                onClick={() => navigateToPosts(post.postName)}
              >
                <h5 className="text-primary w-50">{post.postName}</h5>
                <h5 className="text-success">{post.postDate}</h5>
                <h5 className="text-danger">Likes {post.postLikes}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthorDetail;
