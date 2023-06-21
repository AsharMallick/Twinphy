import Header from "../Header/Header";
import Post from "../Posts/Post";

const user = {
  _id: "6f783ej38f3482343498",
  username: "Ashar Mallick",
  avatar: {
    public_id: "asoadmskdsmds",
    url: "https://img.freepik.com/free-icon/user_318-159711.jpg",
  },
};

const Home = () => {
  return (
    <>
      <Header heading={"Home"} hideButtons={false} />
      <main className="bg-[#f9eeea] min-h-screen p-5 flex flex-col">
        <Post
          caption={"Temp"}
          imageUrl={
            "https://www.postplanner.com/hubfs/how%20to%20write%20a%20facebook%20post.jpg"
          }
          comment={"23"}
          likes={"200"}
          user={user}
          postId={"6dfk32309dk32309dk3239"}
        />
        <Post
          caption={"Temp"}
          imageUrl={
            "https://www.postplanner.com/hubfs/how%20to%20write%20a%20facebook%20post.jpg"
          }
          comment={"23"}
          likes={"200"}
          user={user}
          postId={"6dfk32309dk32309dk3239"}
        />
      </main>
    </>
  );
};

export default Home;
