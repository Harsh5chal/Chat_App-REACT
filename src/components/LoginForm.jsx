import {useState} from 'react';
import axios from 'axios';
import { ProjectFilled } from '@ant-design/icons';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setpassword] = useState('');
    const handleSubmit = async (e) =>{
        e.preventDefault();

        const authObject = {'Project-ID': ProjectFilled, 'User-Name': username, 'User-Secret': password};

        try {
            await axios.get('http://api.chatengine.io/chats',{headers: authObject});

            localStorage.setItem('username',username);
            localStorage.setItem('password',password);

            window.location.reload();
            MediaStreamErrorEvent('');
        }catch (err) {
            setError('OOPS, incorrect credentials.');
        }

    };

    return (
        <div className="wrapper">
        <div className="form">
            <h1 className="title">
                Chat App 2021
            </h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                <div align="center">
                    <button type="submit" className="button">
                        <span>Lets Start Chatting </span>
                    </button>
                </div>
            </form>
            <h1>{error}</h1>
        </div>

        </div>

    );

};

export default Modal;