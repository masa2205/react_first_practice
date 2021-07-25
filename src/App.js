import React from 'react';
import Button from './Button'

const App = () => {
    return (
        <div>
            <h1>App</h1>
            <Button title='post'/>
            <Button title='edit'/>
            <Button title='delete'/>
        </div>
    );
};

export default App;