import React from 'react';
import TicketCard from './TicketCard';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';

const KanbanColumn = ({ title, tickets, users }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-semibold text-gray-700">{title}</h2>
          <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
            {tickets.length}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-gray-200 rounded">
            <AiOutlinePlus className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-1 hover:bg-gray-200 rounded">
            <BsThreeDots className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="space-y-3">
        {tickets.map(ticket => (
          <TicketCard 
            key={ticket.id} 
            ticket={ticket}
            user={users.find(u => u.id === ticket.userId)}
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn; 