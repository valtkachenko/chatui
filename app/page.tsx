import { Message } from '@/components/Message';
import { MyMessage } from '@/components/MyMessage';
import { ChatHeader, Member } from '@/components/ChatHeader';
import { DayRow } from '@/components/DayRow';

interface Message {
  id: number;
  message: string;
  user?: string;
  title?: string;
  timestamp: number;
  avatar?: string;
  online?: boolean;
  userId: number;
}

const messages: Message[] = [
  {
    id: 3,
    message: 'Hi, Team 👋',
    timestamp: Date.now(),
    userId: 3
  },
  {
    id: 1,
    message: 'Hello, world!',
    user: 'Alice',
    title: 'Admin',
    timestamp: Date.now(),
    avatar: 'https://avatar.iran.liara.run/public/13',
    userId: 1
  },
  {
    id: 2,
    message: 'Hi, Alice!',
    user: 'Bob',
    title: 'Product',
    timestamp: Date.now(),
    avatar: 'https://avatar.iran.liara.run/public/21',
    online: true,
    userId: 2
  },
  {
    id: 5,
    message: 'Can you help me with this?',
    user: 'Bob',
    title: 'Product',
    timestamp: Date.now(),
    avatar: 'https://avatar.iran.liara.run/public/21',
    online: true,
    userId: 2
  },
  {
    id: 6,
    message: 'I will send you the details in a bit.',
    user: 'Bob',
    title: 'Product',
    timestamp: Date.now(),
    avatar: 'https://avatar.iran.liara.run/public/21',
    online: true,
    userId: 2
  },
  {
    id: 7,
    message: 'Hi, Alice!',
    user: 'Bob',
    title: 'Product',
    timestamp: Date.now(),
    avatar: 'https://avatar.iran.liara.run/public/21',
    online: true,
    userId: 2
  },
  {
    id: 8,
    message: 'Hi, Alice!',
    user: 'Bob',
    title: 'Product',
    timestamp: Date.now(),
    avatar: 'https://avatar.iran.liara.run/public/21',
    online: true,
    userId: 2
  },
  {
    id: 4,
    message: 'Anyone on for launch today?',
    timestamp: Date.now(),
    userId: 3
  }
];

const UserId = 3;

const members: Member[] = [
  {
    id: 1,
    name: 'Alice',
    avatar: 'https://avatar.iran.liara.run/public/13'
  },
  {
    id: 2,
    name: 'Bob',
    avatar: 'https://avatar.iran.liara.run/public/21'
  },
  {
    id: 3,
    name: 'Charlie',
    avatar: 'https://avatar.iran.liara.run/public/31'
  },
  {
    id: 4,
    name: 'David',
    avatar: 'https://avatar.iran.liara.run/public/41'
  }
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-6 bg-white w-full max-h-screen">
      <div>
        <ChatHeader title="🦄 Team Unicord" members={members}/>
        <hr className="mt-1 mb-4"/>
      </div>
      <div className="h-full overflow-auto max-h">
        <DayRow value={new Date().toString()}/>
        <div className="flex flex-col">
          {
            messages.map(( message ) => {
              const isMyMessage = message.userId === UserId;
              if ( isMyMessage ) {
                return <MyMessage key={message.id} value={message.message} date={message.timestamp}/>;
              }
              return <Message key={message.id} {...message}/>
            })
          }
        </div>
      </div>
      <div>
        <hr className="mt-1 mb-4"/>
        <input type="text" className="w-full p-2 outline-none" placeholder="Start typing..."/>
      </div>

    </main>
  );
}
