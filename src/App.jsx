import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Others/Footer";
import Missing from "./components/Others/Missing";
import Home from "./components/Home/index";
import Blog from "./components/Blog/index";
import NewPost from "./components/Blog/NewPost";
import PostPage from "./components/Blog/PostPage";
import Contact from "./components/Others/Contact";

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      mealtype: ["dinner", "lunch"],
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      mealtype: ["dinner", "lunch"],
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      mealtype: ["dinner", "lunch"],
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
  ]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postImage, setPostImage] = useState(null);
  const [postMealtype, setPostMealtype] = useState([]);
  const [postKeywords, setPostKeywords] = useState([]);

  const [formValues, setFormValues] = useState({
    title: "",
    author: "",
    description: "",
    body: "",
  });

  const navigate = useNavigate();

  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = {
      id,
      title: formValues.title,
      author: formValues.author,
      datetime,
      mealtype: postMealtype,
      description: formValues.description,
      body: formValues.body,
    };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setFormValues("");
    navigate("/");
  };

  const handleDelete = (id) => {
    const postsList = posts.filter((post) => post.id !== id);
    setPosts(postsList);
    navigate("/");
  };

  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home posts={searchResults} />} />
        <Route path="blog" element={<Blog posts={searchResults} />} />
        <Route
          path="post"
          element={
            <NewPost
              handleSubmit={handleSubmit}
              inputChange={inputChange}
              formValues={formValues}
              setFormValues={setFormValues}
              postImage={setPostImage}
              setPostImage={setPostImage}
              postMealtype={postMealtype}
              setPostMealtype={setPostMealtype}
              postKeywords={postKeywords}
              setPostKeywords={setPostKeywords}
            />
          }
        />
        <Route
          path="post/:id"
          element={<PostPage posts={posts} handleDelete={handleDelete} />}
        />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Missing />} />
        <Route />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
