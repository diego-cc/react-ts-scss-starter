import * as React from 'react';
import {Greeter} from "../greeter/greeter";

interface AppProps {
    projectName: string
}

export const App = (props: AppProps) => (
    <div>
        <h1>Welcome to {props.projectName} starter project!</h1>
        <Greeter name="YOUR_NAME" />
        <h2>You can get started by editing <code>app.tsx</code> with your name</h2>
    </div>
);
