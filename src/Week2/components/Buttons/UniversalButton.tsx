import React from 'react';

type UniversalButtonPropsType ={
    name:string,
    callback: ()=>void
}
const UniversalButton = (props:UniversalButtonPropsType) => {

    const buttonHandler=()=> {
        props.callback()
    };

    return (
        <button onClick={buttonHandler}>{props.name}</button>
    );
};

export default UniversalButton;