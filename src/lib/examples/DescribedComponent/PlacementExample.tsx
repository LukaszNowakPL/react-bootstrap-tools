import * as React from 'react';
import { DescribedComponent } from '../../../lib';

const PlacementExample = () => (
  <div>
      <h3>Placement</h3>
      <p>Pass <code>placement</code> prop to custom position of Tootlip.</p>
      <div className='DescribedComponentCenterDiv'>
          <DescribedComponent description='description text' placement='left'><button>Left description</button></DescribedComponent>
          <DescribedComponent description='description text' placement='top'><button>Top description</button></DescribedComponent>
          <DescribedComponent description='description text' placement='bottom'><button>Bottom description</button></DescribedComponent>
          <DescribedComponent description='description text' placement='right'><button>Right description</button></DescribedComponent>
      </div>
  </div>
);

export default PlacementExample;
