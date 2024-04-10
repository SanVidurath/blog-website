import { data } from "./data";
import { useNavigate } from "react-router-dom";

const allPosts = data.flatMap((author) => author.posts);
const sortedPosts = allPosts.sort((a, b) => b.postLikes - a.postLikes);
const firstTenSortedPosts = sortedPosts.slice(0, 10);

const MostLikedPosts = () => {
  const navigate = useNavigate();

  const navigateToPosts = (postName: string) => {
    navigate(`/blog-website/posts/${postName.replace(/\s/g, "")}`);
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="container mt-5 mb-3">
        <div className="d-flex flex-column">
          {firstTenSortedPosts?.map((post) => (
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
  );
};

export default MostLikedPosts;
