import * as React from 'react';
import { DescribedComponent } from '../../../lib';

const DelayHideExample = () => (
  <div>
      <h3>Delayed hide</h3>
      <p>Pass <code>delayHide</code> prop to custom delay of a hide of a Tooltip.</p>
      <DescribedComponent description='Description will hide with 3000ms delay' delayHide={3000}><button>Component text</button></DescribedComponent>
  </div>
);

export default DelayHideExample;
