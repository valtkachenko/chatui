export interface Member {
  id: number;
  name: string;
  avatar: string;
}
interface ChatHeaderProps {
  members: Member[];
  title: string;
}
export const ChatHeader = (props: ChatHeaderProps) => {
  return (
    <div className="sm:grid grid-cols-3  xs:grid grid-row-3 items-center gap-4  py-4 px-2 ">
      <div className="avatar-stack flex sm:justify-self-start xs:justify-self-center ">
        {props.members.map((member, index) => (
          <img
            key={member.id}
            src={member.avatar}
            alt={member.name}
            className={`cursor-pointer w-10 h-10 rounded-full border-2 border-white ${index !== 0 ? '-ml-4' : ''}`}
          />
        ))}
      </div>
      <div className="justify-self-center">
        <h2 className="text-md font-bold text-center">{props.title}</h2>
        <p className="text-gray-400 text-xs text-center">last seen 45 minutes ago</p>
      </div>
      <div className="actions-dots justify-self-end ">
        <div className="flex align-middle justify-center  p-2 rounded-full w-10 h-10 text-md hover:bg-gray-300 cursor-pointer ">
          <span>...</span>
        </div>
      </div>
    </div>
  );
}