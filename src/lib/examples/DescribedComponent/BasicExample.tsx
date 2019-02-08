import * as React from 'react';
import { DescribedComponent } from '../../../lib';

const BasicExample = () => (
  <div>
      <h3>Basic example</h3>
      <p>Hover the component to see Tooltip description.</p>
      <DescribedComponent description='description text'><button>component text</button></DescribedComponent>
  </div>
);

export default BasicExample;
