// App.tsx

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import "./App.css";
import Authors from "./components/Authors";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthorDetail from "./components/AuthorDetail";
import MostLikedPosts from "./components/MostLikedPosts";
import MostCommentedPosts from "./components/MostCommentedPosts";
import Footer from "./components/Footer";
import Posts from "./components/Posts";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/blog-website" element={<Authors />} />
        <Route
          path="/blog-website/MostLikedPosts"
          element={<MostLikedPosts />}
        />
        <Route
          path="/blog-website/MostCommentedPosts"
          element={<MostCommentedPosts />}
        />
        <Route path="/blog-website/:authorName" element={<AuthorDetail />} />
        <Route path="/blog-website/posts/:postName" element={<Posts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

// Sort the link highlight
