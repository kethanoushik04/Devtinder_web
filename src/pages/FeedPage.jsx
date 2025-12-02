import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../store/feedSlice.js";
import Usercard from "../components/Usercard.jsx"

const FeedPage = () => {
  // const user = useSelector((state) => state.user);
  const feedata = useSelector((state) => state.feed);
  // console.log(feedata);
  const disptach = useDispatch();
  async function feed_data() {
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      disptach(addFeed(res.data));
      // disptach(removefeed());
    } catch (err) {
      console.log(err.message);
    }
  }
  useEffect(() => {
  feed_data();
}, []);

useEffect(() => {
  console.log(feedata);
}, [feedata]);
  if(!feedata || feedata.length == 0){
    return <p>no feed data avaliable</p>
  }
  return (
    <div>
      <div className="flex justify-center py-10">
        {feedata && feedata.length>0 && <Usercard user={feedata[0]} />}
      </div>
    </div>
  );
};

export default FeedPage;
