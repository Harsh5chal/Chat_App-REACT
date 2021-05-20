import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
return (
   <ChatEngine
      height="100vh"
      projectID="8f9e8ace-3c8d-455e-b078-bea79ec8f5be"
      userName="HarshOP"
      userSecret="12345"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/> } 
      />
  );


}
export default App;