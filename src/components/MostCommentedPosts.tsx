import { data } from "./data";
import { useNavigate } from "react-router-dom";

const mostCommentedPosts = data.flatMap((author) =>
  author.posts.filter(
    (posts) => posts.postComments && posts.postComments.length > 6
  )
);

const MostCommentedPosts = () => {
  const navigate = useNavigate();

  const navigateToPosts = (postName: string) => {
    navigate(`/posts/${postName.replace(/\s/g, "")}`);
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="container mt-5 mb-3">
        <div className="d-flex flex-column">
          {mostCommentedPosts?.map((post) => (
            <div
              key={post.postName}
              className="d-flex justify-content-between px-4 py-2 border border-dark-50 mb-3 flex-wrap"
              style={{ cursor: "pointer" }}
              onClick={() => navigateToPosts(post.postName)}
            >
              <h5 className="text-primary w-50">{post.postName}</h5>
              <h5 className="text-success">{post.postDate}</h5>
              <h5 className="text-danger">
                Comments {post.postComments?.length}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostCommentedPosts;
