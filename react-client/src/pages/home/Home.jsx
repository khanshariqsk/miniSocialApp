import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feeds/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";
const Home = () => {
  return (
    <>
      <Topbar></Topbar>
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
