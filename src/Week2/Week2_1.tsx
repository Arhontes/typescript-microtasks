import React, {useState} from 'react';
import '../App.css';
import Input from "./components/Inputs/Input";
import UniversalButton from "./components/Buttons/UniversalButton";

type MessageType = {
    message: string,
    id: number
}
export function Week2_1() {

    let [message, setMessage] = useState<MessageType[]>(
        [
            {message: 'HI!', id: 1},
            {message: 'Zdarov!', id: 2},
            {message: 'Bye!', id: 3},
        ]
    )
    let [title,setTitle] = useState<string>('')

    const addMessage=(props:string)=>{
        let newMessage = {message: props, id: message.length+1}
        setMessage([newMessage,...message])
    }
    const callbackHandler =()=>{
        addMessage(title)
        setTitle('')
    }

    let messageArray = message.map(m=>{return <div key={m.id}>{m.message}</div>})
    return (
        <div className="App">
            <Input title={title} setTitle={setTitle}/>
            <UniversalButton name={"+"} callback={callbackHandler} />
            {messageArray}
        </div>
    );
}

