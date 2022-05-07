import React, {ChangeEvent, useState} from 'react';
import UniversalButton from "../Buttons/UniversalButton";

type FullInputPropsType ={
    setMessage: (props:string)=>void
}

const FullInput = (props:FullInputPropsType) => {

    let [title,setTitle] = useState<string>('')

    const onChangeFullInputHandler=(props:ChangeEvent<HTMLInputElement>)=>{
        setTitle(props.currentTarget.value)
        setTitle('')
    };

    const universalButtonHandler=()=>{
        props.setMessage(title)
        setTitle('')

    };
    return (
        <div>
            <input value={title} onChange={onChangeFullInputHandler}/>
            <UniversalButton name={'+'} callback={universalButtonHandler}/>
        </div>
    );
};

export default FullInput;