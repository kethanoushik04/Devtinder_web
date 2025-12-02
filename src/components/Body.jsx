import Navbar from "./Navbar";
import { Outlet} from "react-router-dom";
// import { addUser } from "../store/userSlice";
// import { useEffect } from "react";
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { BASE_URL } from "../utils/constants.jsx";

const Body = () => {
  
  const navigate= useNavigate();
  // const dispatch = useDispatch();
  const {user} = useSelector((state) => state.user);

  if(user){
    navigate("/profile");
  }
  else{
    navigate("/login");
  }

  // const FetchUser = async () => {
  //   try {
  //     const res = await axios.get(BASE_URL + "/profile/view", {
  //       withCredentials: true,
  //     });
  //     dispatch(addUser(res.data));
  //   } catch (err) {
  //     console.log(err.response);
      
  //     if (err.response?.status === 401) {
  //       navigator("/login");
  //     }
  //   }
  // };

  // useEffect(() => {
  //   if (!userData) {
  //     FetchUser();
  //   }
  // }, [userData]);

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Body;
