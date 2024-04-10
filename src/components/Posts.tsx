// Posts.tsx
import { Link, useParams } from "react-router-dom";
import { data } from "./data";

const Posts = () => {
  const params = useParams();
  const { postName } = params;
  const allPosts = data.flatMap((author) => author.posts);
  const originalPost = allPosts.find(
    (post) => post.postName.replace(/\s/g, "") === postName
  );

  const authorDetails = data.find((author) =>
    author.posts.find((post) => post.postName.replace(/\s/g, "") === postName)
  );

  return (
    <div style={{ margin: "6rem 0 1.85rem" }}>
      <div className="d-flex flex-column justify-content-center align-items-center bg-dark text-white">
        <h1 className="mt-2 mb-5 text-center">{originalPost?.postName}</h1>
        <p className="text-center mb-5" style={{ width: "80vw" }}>
          {originalPost?.postContent}
        </p>
        <h5 className="text-white-50 mt-4">Date : {originalPost?.postDate}</h5>
        <h6 className="my-3 text-center">Author : {authorDetails?.name}</h6>
        <h6 className="text-uppercase text-center mt-2 mb-3">
          Likes : {originalPost?.postLikes}
        </h6>
      </div>
      <h2 className="text-center my-4">Comments</h2>
      <div className="d-flex flex-column justify-content-center p-2 m-2 flex-wrap">
        {originalPost &&
        originalPost.postComments &&
        originalPost.postComments.length > 0 ? (
          originalPost.postComments.map((comments) => (
            <div className="align-self-start comments" key={comments.comment}>
              <p className="h5" style={{ cursor: "pointer" }}>
                <Link
                  to={`/blog-website/${comments.commentedBy.replace(
                    /\s+/g,
                    ""
                  )}`}
                >
                  {comments.commentedBy}
                </Link>
              </p>
              <p className="h5 fst-italic fw-bold mb-4">
                Comment:{" "}
                <span className="fw-normal fst-normal">{comments.comment}</span>
              </p>
            </div>
          ))
        ) : (
          <div className="h4 text-center">No Comments</div>
        )}
      </div>
    </div>
  );
};

export default Posts;
