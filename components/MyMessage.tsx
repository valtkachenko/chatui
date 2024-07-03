

interface MyMessageProps {
  value: string;
  date: number;
}
export const MyMessage = ({ value, date }: MyMessageProps) => {
  return (
    <div className="flex justify-end ">
      <div className="flex flex-col p-2 border border-gray-200 rounded-xl min-w-48  mb-1 bg-blue-500">
        <p className="text-white">{value}</p>
        <p className="text-sm text-white flex justify-end">{new Date(date).toLocaleTimeString(undefined, {
          hour: '2-digit',
          minute: '2-digit'
        })}</p>
      </div>
    </div>
  )

}