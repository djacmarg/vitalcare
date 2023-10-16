import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import parse from "html-react-parser";
import TeamProfile from "./team-profile";
const TeamDetails = () => {
  const params = useParams();
  const id = useState(params.id);

  console.log(id);
  useEffect(() => {
    for (var index = 0; index < TeamProfile.length; index++) {
      if (TeamProfile[index].id === index.id) {
        console.log(
          "FirstName=" +
            TeamProfile[index].image_name +
            " LastName= " +
            TeamProfile[index].name
        );
      }
    }
  }, [id]);
  return (
    <div className="flex w-full m-auto h-auto lg:h-auto bg-gray-100 justify-center items-center py-10 transition-all duration-700">
      <div className="grid lg:m-auto gap-2 pt-10">
        <div className="max-w-[800px] lg:m-auto gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-10">
          <article className="prose lg:prose-xl p-7"></article>
        </div>
      </div>
    </div>
  );
};
export default TeamDetails;
