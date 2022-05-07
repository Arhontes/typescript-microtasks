import React, {ChangeEvent} from 'react';

type ImportPropsType ={
    title:string
    setTitle: (props:string)=>void
}
const Input = (props:ImportPropsType) => {
    const onChangeInputHandler=(value:ChangeEvent<HTMLInputElement>)=> {
        props.setTitle(value.currentTarget.value)
    }
    return (
        <input value={props.title} onChange={onChangeInputHandler}/>
    );
};

export default Input;