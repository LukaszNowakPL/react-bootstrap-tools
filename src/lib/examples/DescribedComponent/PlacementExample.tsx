import * as React from "react";
import { DescribedComponent } from "../../../lib";

const PlacementExample = () => (
  <div>
    <h3>Placement</h3>
    <p>
      Pass <code>placement</code> prop to custom position of{" "}
      <code>Tooltip</code>. Available values to pass (hover element to see live
      example):
    </p>
    <div className="DescribedComponentCenterDiv">
      <ul>
        <li>
          <DescribedComponent
            description="description text"
            placement="auto-start"
          >
            <button>auto-start</button>
          </DescribedComponent>
        </li>
        <li>
          <DescribedComponent description="description text" placement="auto">
            <button>auto</button>
          </DescribedComponent>
        </li>
        <li>
          <DescribedComponent
            description="description text"
            placement="auto-end"
          >
            <button>auto-end</button>
          </DescribedComponent>
        </li>
        <li>
          <DescribedComponent
            description="description text"
            placement="top-start"
          >
            <button>top-start</button>
          </DescribedComponent>
        </li>
        <li>
          <DescribedComponent description="description text" placement="top">
            <button>top</button>
          </DescribedComponent>
        </li>
        <li>
          <DescribedComponent
            description="description text"
            placement="top-end"
          >
            <button>top-end</button>
          </DescribedComponent>
        </li>
        <li>
          <DescribedComponent
            description="description text"
            placement="right-start"
          >
            <button>right-start</button>
          </DescribedComponent>
        </li>
        <li>
          <DescribedComponent description="description text" placement="right">
            <button>right</button>
          </DescribedComponent>
        </li>
        <li>
          <DescribedComponent
            description="description text"
            placement="right-end"
          >
            <button>right-end</button>
          </DescribedComponent>
        </li>
        <li>
          <DescribedComponent
            description="description text"
            placement="bottom-end"
          >
            <button>bottom-end</button>
          </DescribedComponent>
        </li>
        <li>
          <DescribedComponent description="description text" placement="bottom">
            <button>bottom</button>
          </DescribedComponent>
        </li>
        <li>
          <DescribedComponent
            description="description text"
            placement="bottom-start"
          >
            <button>bottom-start</button>
          </DescribedComponent>
        </li>
        <li>
          <DescribedComponent
            description="description text"
            placement="left-end"
          >
            <button>left-end</button>
          </DescribedComponent>
        </li>
        <li>
          <DescribedComponent description="description text" placement="left">
            <button>left</button>
          </DescribedComponent>
        </li>
        <li>
          <DescribedComponent
            description="description text"
            placement="left-start"
          >
            <button>left-start</button>
          </DescribedComponent>
        </li>
      </ul>
    </div>
  </div>
);

export default PlacementExample;
