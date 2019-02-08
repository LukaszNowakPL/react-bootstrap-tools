import * as React from 'react';
import { DescribedComponent } from '../../../lib';
import "./style.scss";

const CustomStyleExample = () => (
  <div>
      <h3>Custom style</h3>
      <p>Pass <code>className</code> prop to use custom style of a tooltip component. Please remember to define the style on your stylesheet.</p>
      <DescribedComponent description='description text' className='DescribedComponentAlternateStyle'><button>This description uses overwritten style</button></DescribedComponent>
  </div>
);

export default CustomStyleExample;
