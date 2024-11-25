import Top from "../../components/top/Top";
import Left from "../../components/left/Left"
import Feed from "../../components/feed/Feed";
import Right from "../../components/right/Right";
import "./home.css"

const Home = () => {
  return(
  <>
    <Top />
    <div className="home">
      <Left />
      <Feed />
      <Right />
    </div>
  </>
  )
};

export default Home;
