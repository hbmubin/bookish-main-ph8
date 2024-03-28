// import PropTypes from 'prop-types'

import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Team from "../Team/Team";

const About = () => {
  const about = useLoaderData();
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mt-6 mb-4 text-center">
        {about.title}
      </h1>
      <p className="text-lg text-center mb-12 px-5 md:px-28">
        {about.description}
      </p>
      <div className="bg-stone-50 p-10 rounded-lg mt-24">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our Team Members
        </h2>
        <div className=" md:grid md:grid-cols-3 flex flex-col items-center  gap-5 md:justify-between">
          {about.team.map((member, idx) => (
            <Team key={idx} member={member}></Team>
          ))}
        </div>
      </div>
    </div>
  );
};

// About.propTypes = {}

export default About;
