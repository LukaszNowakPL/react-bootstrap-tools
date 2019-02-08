import * as React from 'react';
import { DescribedComponent } from '../../../lib';

const NoDescriptionExample = () => (
  <div>
      <h3>No description</h3>
      <p>If you pass no <code>description</code> prop, the module will only wrap your component with <code>span</code> tag.</p>
      <DescribedComponent><p>Child element only wrapped span</p></DescribedComponent>
  </div>
);

export default NoDescriptionExample;
