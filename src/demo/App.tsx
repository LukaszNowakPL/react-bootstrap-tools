import * as React from 'react';
// import Example from '../lib';
import { DescribedComponent, DescribedButton } from '../lib';
import "./style.scss";
// import BasicExample from "../lib/examples/DescribedComponent/BasicExample";
// import BasicExample from "../lib/examples/DescribedButton/BasicExample";

const App = () => (
    <div>
        {/*<Example name='demo name' aaa='bbb' />*/}
        <h1>Described components demo</h1>

        <h2>Described component</h2>
        <p>To fire up examples of usage import any component from <code>src/lib/examples/DescribedComponent</code> folder (i.e. BasicExample hashed on code of this demo).</p>
        {/*<div><BasicExample/></div>*/}
        <h3>Playground</h3>
        <DescribedComponent description='description text'><button>component text</button></DescribedComponent>

        <h2>Described button</h2>
        <p>To fire up examples of usage import any component from <code>src/lib/examples/DescribedButton</code> folder (i.e. BasicExample hashed on code of this demo).</p>
        {/*<div><BasicExample /></div>*/}
        <h3>Playground</h3>
        <DescribedButton description='description text' />

    </div>
);

export default App;
