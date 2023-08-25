import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import gema1 from "../assets/gemas/gema1.png";
import gema2 from "../assets/gemas/gema2.png";
import gema3 from "../assets/gemas/gema3.png";
import gema4 from "../assets/gemas/gema4.png";
import gema5 from "../assets/gemas/gema5.png";

import "../assets/styles/Roadmap.css";

const Roadmap = () => {
  const roadmapData = [
    {
      date: "2011 - present",
      title: "Creative Director",
      subtitle: "Miami, FL",
      description:
        "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
      image: gema1,
    },
    {
      date: "2010 - 2011",
      title: "Art Director",
      subtitle: "San Francisco, CA",
      description:
        "Creative Direction, User Experience, Visual Design, SEO, Online Marketing",
      image: gema2,
    },
    {
      date: "2010 - 2011",
      title: "Art Director",
      subtitle: "San Francisco, CA",
      description:
        "Creative Direction, User Experience, Visual Design, SEO, Online Marketing",
      image: gema3,
    },
    {
      date: "2010 - 2011",
      title: "Art Director",
      subtitle: "San Francisco, CA",
      description:
        "Creative Direction, User Experience, Visual Design, SEO, Online Marketing",
      image: gema4,
    },
    {
      date: "2010 - 2011",
      title: "Art Director",
      subtitle: "San Francisco, CA",
      description:
        "Creative Direction, User Experience, Visual Design, SEO, Online Marketing",
      image: gema5,
    },
  ];

  return (
    <div className="bg-black">
      <VerticalTimeline>
        {roadmapData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={item.className}
            contentArrowStyle={item.contentArrowStyle}
            date={item.date}
            iconStyle={{
              background: "rgb(33, 150, 243)",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
            }}
            style={{ backgroundImage: item.backgroundImage }}
            icon={<img src={item.image} alt={`gema${index + 1}`} />}
          >
            <h3 className="text-[#8A2BE2] text-2xl font-bold">{item.title}</h3>
            <h4 className="text-[#8A2BE2] text-md font-bolder">
              {item.subtitle}
            </h4>
            <p>{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Roadmap;
