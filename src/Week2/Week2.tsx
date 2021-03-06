import React, {useState} from 'react';
import FullInput from "./components/Inputs/FullInput";

type MessageType = {
    message: string,
    id: number
}
export function Week2() {

    let [message, setMessage] = useState<MessageType[]>([
            {message: 'HI!', id: 1},
            {message: 'Zdarov!', id: 2},
            {message: 'Bye!', id: 3},
        ]
    )
    debugger
    const setMessageHandler=(props:string)=>{

        let newMessage = {message: props, id: message.length+1}
        setMessage([newMessage,...message])

    }
    let messageArray = message.map(m=>{return <div key={m.id}>{m.message}</div>})
    return (
        <div className="App">
            <FullInput setMessage={setMessageHandler}/>
            {messageArray}
        </div>
    );
}

