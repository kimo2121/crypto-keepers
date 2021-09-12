import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./verticalTimeLine.css";

const VerticalTImeLine = () => {
  return (
    <VerticalTimeline animate={false}>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        textClassName="text-styles"
        contentStyle={{
          background: "#0f3345",
          color: "#fff",
          marginLeft: "-5vw",
          textAlign: "right",
        }}
        iconStyle={{ background: "#9b180d", color: "#fff" }}
        iconClassName="icon-styles"
        icon={<h3>25%</h3>}
      >
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "#0f3345", color: "#fff" }}
        iconClassName="icon-styles"
        textClassName="text-styles"
        icon={<h3>50%</h3>}
      >
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online
          Marketing
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "#9b180d", color: "#fff" }}
        iconClassName="icon-styles"
        textClassName="text-styles"
        icon={<h3>75%</h3>}
      >
        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "#0f3345", color: "#fff" }}
        iconClassName="icon-styles"
        textClassName="text-styles"
        icon={<h3>90%</h3>}
      >
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{ background: "#9b180d", color: "#fff" }}
        iconClassName="icon-styles"
        textClassName="text-styles"
        icon={<h3>100%</h3>}
      >
        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
        <p>Strategy, Social Media</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        textClassName="text-styles"
        iconStyle={{
          background: "#ecd19a",
          color: "#fff",
        }}
        iconClassName="icon-styles"
        icon={<h3>End</h3>}
      ></VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default VerticalTImeLine;
