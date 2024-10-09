import React, { useState, useEffect } from "react";
import { fetchUsers } from "../api";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    loadUsers();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">User List</h2>
      {users.length > 0 ? (
        <ul className="list-disc pl-5">
          {users.map((user) => (
            <li key={user._id} className="mb-2">
              <span className="font-semibold">{user.name}</span> - {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No users found</p>
      )}
    </div>
  );
};

export default Users;
