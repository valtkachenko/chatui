interface MessageProps {
  message: string;
  user: string;
  title: string;
  timestamp: number;
  avatar: string;
  online?: boolean;
}



export const Message = ( props: MessageProps ) => {
  return (
    <div className="flex">
      <div className="relative w-10 h-10">
        <img src={props.avatar} alt="User avatar" className="w-10 h-10 rounded-full mr-4"/>
        {props.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>}
      </div>
      <div className="flex flex-col p-2 ml-3 border border-gray-200 rounded-xl min-w-48 bg-gray-200 mb-1">
        <div className="flex items-center gap-1">
          <p className="text-md">{props.user}</p>
          <p className="mr-1 text-gray-500 text-sm">{props.title}</p>
        </div>
        <p className="text-gray-800">{props.message}</p>
        <p className="text-sm text-gray-500 flex justify-end">{new Date(props.timestamp).toLocaleTimeString(undefined, {
          hour: '2-digit',
          minute: '2-digit'
        })}</p>
      </div>
    </div>
  )
}