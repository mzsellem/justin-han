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
  return (
    <div className="bg-white">
      <div className="text-3xl text-center pt-4 pb-2 font-bold">Events</div>
      <div className="overflow-x-auto">
        <table className="w-full sm:w-2/3 md:w-1/2 lg:w-2/3 xl:w-1/2 border border-collapse border-gray-300 mx-auto">
          <thead>
            <tr>
              <th className="border-b p-2 sm:p-3">Date</th>
              <th className="border-b p-2 sm:p-3">Time</th>
              <th className="border-b p-2 sm:p-3">Location</th>
              <th className="border-b p-2 sm:p-3">Description</th>
              <th className="border-b p-2 sm:p-3">Link</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="border-b p-2 sm:p-3">{row.date}</td>
                <td className="border-b p-2 sm:p-3">{row.time}</td>
                <td className="border-b p-2 sm:p-3">{row.location}</td>
                <td className="border-b p-2 sm:p-3">{row.description}</td>
                <td className="border-b p-2 sm:p-3">
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
