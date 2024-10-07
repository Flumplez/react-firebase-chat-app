import { useEffect, useState } from 'react';
import '../styles/Chat.css';
import { addDoc, collection, serverTimestamp, onSnapshot, query, where } from 'firebase/firestore';
import { auth, db } from '../firebase-config';

export const Chat = (props) => {

    const { room } = props

    const [newMessage, setNewMessage] = useState("");

    const messagesRef = collection(db, "messages");

    useEffect(() => {
        const queryMessages = query(messagesRef, where());
        onSnapshot()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(newMessage === "") return;

        await addDoc(messagesRef, {
            text: newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room: room
        });

        setNewMessage("")
    };

    return (
        <div className="chat-app">
            <form onSubmit={handleSubmit} className='new-message-form'>
                <input 
                    className='new-message-input' 
                    placeholder='Type your message here...'
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                />
                <button type='submit' className='send-button'> Send </button>
            </form> 
        </div>
    );
}