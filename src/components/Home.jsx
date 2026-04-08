import { Outlet } from "react-router-dom";
import Feed from "./Feed";
import RightsideBar from "./RightsideBar";
const Home = ()=>{
    return (
    <div className="flex">
        <div className="flex-grow">
             <Feed/>
             <Outlet/>
        </div>
        <RightsideBar/>
    </div>
    )
  
}
export default Home;

