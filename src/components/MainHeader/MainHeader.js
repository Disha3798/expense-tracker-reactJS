import React from 'react';

const MainHeader = (props) => {
    return (
        <div style={{backgroundColor:'#3f3f3f'}}>
            {props.children}
        </div>
    );
};

export default MainHeader;