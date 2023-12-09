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
    <>
        <div className="overflow-x-auto bg-white">
        <table className="min-w-full border border-collapse border-gray-300">
            <thead>
            <tr>
                <th className="border-b p-2">Date</th>
                <th className="border-b p-2">Time</th>
                <th className="border-b p-2">Location</th>
                <th className="border-b p-2">Description</th>
                <th className="border-b p-2">Link</th>
            </tr>
            </thead>
            <tbody>
            {data.map((row, index) => (
                <tr key={index}>
                <td className="border-b p-2">{row.date}</td>
                <td className="border-b p-2">{row.time}</td>
                <td className="border-b p-2">{row.location}</td>
                <td className="border-b p-2">{row.description}</td>
                <td className="border-b p-2">
                <a href={row.link}>{row.linkText || 'Link'}</a>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    </>
  );
};

export default EventsTable;