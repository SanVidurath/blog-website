// Authors.tsx
import { data } from "./data";
import { useNavigate } from "react-router-dom";

interface Authors {
  id: number;
  name: string;
  img: string;
}

const Authors = () => {
  const navigate = useNavigate();

  const handleAuthor = (authorName: string) => {
    navigate(`/${authorName}`);
  };

  return (
    <div className="card m-4" style={{ borderStyle: "none" }}>
      <div className="container mt-5">
        <div className="row">
          {data.map((author) => {
            return (
              <div
                key={author.id}
                className="col-md-4 col-sm-6 col-xs-12 text-center"
              >
                <img
                  className="card-img-top"
                  src={author.img}
                  alt="author"
                  style={{ marginTop: "20px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{author.name}</h5>
                  <button
                    className="btn btn-primary"
                    style={{ marginTop: "5px" }}
                    onClick={() =>
                      handleAuthor(author.name.replace(/\s+/g, ""))
                    }
                  >
                    View Profile
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Authors;
