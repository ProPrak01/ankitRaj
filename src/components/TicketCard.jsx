import React from 'react';
import { BsCircleFill } from 'react-icons/bs';
import { 
  FiAlertCircle, 
  FiCircle, 
  FiMoreHorizontal,
  FiCheckCircle 
} from 'react-icons/fi';

const TicketCard = ({ ticket, user }) => {
  const getPriorityIcon = (priority) => {
    switch(priority) {
      case 4: return <FiAlertCircle className="w-4 h-4 text-red-500" />;
      case 3: return <FiAlertCircle className="w-4 h-4 text-yellow-500" />;
      case 2: return <FiCircle className="w-4 h-4 text-blue-500" />;
      case 1: return <FiCircle className="w-4 h-4 text-gray-500" />;
      default: return <FiMoreHorizontal className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
      <div className="flex justify-between items-start mb-2">
        <span className="text-gray-500 text-sm">{ticket.id}</span>
        {user && (
          <div className="relative">
            <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm font-medium">
              {user.name.charAt(0)}
            </div>
            <span className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${user.available ? 'bg-green-500' : 'bg-gray-400'}`}></span>
          </div>
        )}
      </div>
      
      <h3 className="text-sm font-medium text-gray-900 mb-3">
        {ticket.title}
      </h3>
      
      <div className="flex items-center gap-2">
        {getPriorityIcon(ticket.priority)}
        {ticket.tag.map((tag, index) => (
          <span 
            key={index}
            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600"
          >
            <BsCircleFill className="w-2 h-2 mr-1 text-gray-500" />
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TicketCard; 