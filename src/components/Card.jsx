/* eslint-disable array-callback-return */
import React, { Fragment } from "react";
import GET_MISSIONS from "../graphql/getMissions.graphql";
import { useQuery } from "@apollo/client";




export const Card = () => {
  
  const { data, error, loading } = useQuery(GET_MISSIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>`Error...${error.message}`</p>;
  if (data.launchesPast.launch_success === true) return console.log("success");

  return (
    <Fragment>
      <div className="h-screen bg-black grid grid-cols-4 justify-items-center gap-5 gap-y-10 p-10">
        {data.launchesPast.map((mission) => (
          <div
            key={mission.mission_name}
            className="tarjet-div bg-white grid justify-items-center font-mono "
          >
            <img
              src={mission.links.flickr_images}
              alt="SpaceX"
              className="h-28 w-full rounded-t-lg"
            />
            <p className="text-xs font-bold">{mission.mission_name}</p>{" "}
            <p className="text-xs">{mission.launch_date_local}</p>{" "}
            <a
              type="button"
              className="info-button bg-gray-300 hover:bg-gray-600 
              shadow-inner rounded-t-lg w-1/4 my-1 grid justify-center no-underline hover:underline"
              target="_blank"
              rel="noreferrer"
              href={mission.links.wikipedia}
            >
              Info
            </a>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Card;
