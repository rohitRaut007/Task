import React from "react";
import Sidebar from "../Components/Sidebar";
import Summary from "../Components/Summary";
import TaskList from "../Components/TaskList";
import Analytics from "../Components/Analytics";

function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
    <Sidebar />
    <main className="flex-1 overflow-y-auto p-8">
      <div className="space-y-8">
        <Summary />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TaskList />
          <Analytics />
        </div>
      </div>
    </main>
  </div>
  );
}

export default Dashboard;