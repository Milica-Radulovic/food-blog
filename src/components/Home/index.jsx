import HomeFeed from "./HomeFeed";

const Home = ({ posts }) => {
  return (
    <main>
      {posts.length ? <HomeFeed posts={posts} /> : <p>No Recipe to display</p>}
    </main>
  );
};

export default Home;
