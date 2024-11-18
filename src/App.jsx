import { useState, useEffect } from "react";
import DisplayButton from './components/DisplayButton';
import KanbanBoard from './components/KanbanBoard';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(
    localStorage.getItem("grouping") || "status"
  );
  const [sorting, setSorting] = useState(
    localStorage.getItem("sorting") || "priority"
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        const data = await response.json();
        setTickets(data.tickets);
        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleGroupingChange = (newGrouping) => {
    setGrouping(newGrouping);
    localStorage.setItem("grouping", newGrouping);
  };

  const handleSortingChange = (newSorting) => {
    setSorting(newSorting);
    localStorage.setItem("sorting", newSorting);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <DisplayButton
            grouping={grouping}
            sorting={sorting}
            onGroupingChange={handleGroupingChange}
            onSortingChange={handleSortingChange}
          />
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-6">
        <KanbanBoard
          tickets={tickets}
          users={users}
          grouping={grouping}
          sorting={sorting}
        />
      </main>
    </div>
  );
}

export default App;
