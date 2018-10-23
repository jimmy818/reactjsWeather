import React from 'react';

class Title extends React.Component{
    render() {
        return(
            <div>
                <h1 className="title-container__title">Weather Finder</h1>
                <h1 className="title-container__subtitle">Find out temprature, Conditions and more....</h1>
            </div>
        );
    }
};
export default Title;