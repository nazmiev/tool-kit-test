import { Outlet } from "react-router-dom";
// import Header from "../components/Header";

const MainLayout:React.FC = () => {
    console.log('MainLayout');
    return (
        <div>
            {/* <Header /> */}
            <div>
                <Outlet/>
            </div>
        </div>
    )
}
export default MainLayout