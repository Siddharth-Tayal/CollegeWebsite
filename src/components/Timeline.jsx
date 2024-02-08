import React, { useContext } from "react";
import { FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { eventContext } from "../utils/Context";

const TimelinePage = ({ type }) => {
  const { eventData } = useContext(eventContext);
  const myEvent = eventData.filter((item) => item.category.toString() === type);
  return (
    <div className=" flex flex-col items-center justify-center gap-6 pt-[10vh] w-screen bg-[#0e1538] overflow-x-hidden">
      <div className=" flex items-center justify-center gap-2 text-white text-3xl border-b-2 py-2 border-white">
        <FaClock />
        <h2 className=" text-white">{type} Timeline</h2>
      </div>

      {myEvent.map((item, index) => {
        return <Link to={`/events/${item.id}`} key={index}></Link>;
      })}
    </div>
  );
};
export default TimelinePage;
