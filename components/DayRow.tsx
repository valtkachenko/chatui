interface DayRowProps {
  value: string;
}
export const DayRow = ({value} : DayRowProps) => {
  const date = new Date(value);
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

  return (
    <div className="flex justify-center">
      <div className="flex flex-col p-2  mb-1 text-sm">
        <p className="text-gray-500">{formattedDate}</p>
      </div>
    </div>
  )
}