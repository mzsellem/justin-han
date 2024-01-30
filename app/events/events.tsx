import React from 'react';

interface Row {
  date: string;
  time: string;
  location: string;
  description: string;
  link: string;
  linkText?: string;
}

interface EventsTableProps {
  data?: Row[];
}

const EventsTable: React.FC<EventsTableProps> = ({ data = [] }) => {
  const wrapperStyle = {
    minHeight: data.length > 0 ? 'auto' : '0',
  };
  return (
    <div className="flex flex-col items-center p-4 text-sm bg-white md:text-lg md:p-6" style={wrapperStyle}>
      <div className="mb-8 text-3xl font-bold text-center font-pro">Events</div>
      <div className="w-full overflow-x-auto">
        <table className="min-w-full mx-auto text-center border border-collapse border-gray-300 table-auto sm:w-2/3 md:w-1/2 lg:w-2/3 xl:w-1/2 font-pro">
         <thead>
            <tr>
              <th className="p-2 border-b sm:p-3">Date</th>
              <th className="p-2 border-b sm:p-3">Time</th>
              <th className="p-2 border-b sm:p-3">Location</th>
              <th className="p-2 border-b sm:p-3">Description</th>
              <th className="p-2 border-b sm:p-3">Link</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="p-2 border-b sm:p-3">{row.date}</td>
                <td className="p-2 border-b sm:p-3">{row.time}</td>
                <td className="p-2 border-b sm:p-3">{row.location}</td>
                <td className="p-2 border-b sm:p-3">{row.description}</td>
                <td className="p-2 border-b sm:p-3">
                  <a href={row.link}>{row.linkText || 'Link'}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventsTable;
