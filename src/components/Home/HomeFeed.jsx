import HomePost from "./HomePost";

const HomeFeed = ({ posts }) => {
  return (
    <section>
      {posts.map((post) => (
        <HomePost key={post.id} post={post} />
      ))}
    </section>
  );
};

export default HomeFeed;
