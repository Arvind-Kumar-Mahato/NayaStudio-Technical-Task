import React from 'react'

import useCollapse from "react-collapsed";
import Tab from './Tab';

function Section(props) {
  const config = {
    defaultExpanded: props.defaultExpanded || false,
    collapsedHeight: props.collapsedHeight || 0,
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);

  return (
    <div className="collapsible">
      <div className="header" {...getToggleProps()}>
        <div className="title">{props.title}</div>
        <div className="icon">
          <i
            className={"fas fa-chevron-circle-" + (isExpanded ? "up" : "down")}
          ></i>
        </div>
      </div>
      <div {...getCollapseProps()}>
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
}

const Panel = () => {
  return (
    <div className="preferences">
      <Section title="SKETCHES" defaultExpanded="true">
        
        <label>
          <Tab/>
        </label>
       
        <br />
        <br />
      </Section>

      <Section title="USERS">
        <label>
          user1
          
        </label>
        <br />
        <br />
        <br />
        <br />
      </Section>
    </div>
  );
}

export default Panel
