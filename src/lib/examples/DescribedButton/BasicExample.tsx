import * as React from 'react';
import { DescribedButton } from '../../../lib';

const BasicExample = () => (
  <div>
      <h3>Basic example</h3>
      <p>Hover the component to see Tooltip description.</p>
      <DescribedButton description='description text' />
  </div>
);

export default BasicExample;
