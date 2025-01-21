import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContextProvider";
import axios from "axios";
import { toast } from "react-toastify";

const MyClients = () => {
  const { token, backendUrl } = useContext(AppContext);
  const [clients, setClients] = useState([]);

  // Fetching clients data
  const getClientsData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/lawyer/clients`, {
        headers: { token },
      });
      if (data.success) {
        setClients(data.clients);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      getClientsData();
    }
  }, [token]);

  const handleUpdateClient = (clientId) => {
    // Logic to update client details (open modal or redirect)
    toast.info(`Update client with ID: ${clientId}`);
  };

  const handleDeleteClient = async (clientId) => {
    try {
      const { data } = await axios.delete(
        `${backendUrl}/api/lawyer/clients/${clientId}`,
        {
          headers: { token },
        }
      );
      if (data.success) {
        setClients(clients.filter((client) => client.id !== clientId));
        toast.success("Client deleted successfully");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-semibold">My Clients</h1>
      <div className="my-4">
        {clients.length === 0 ? (
          <p>No clients available</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {clients.map((client) => (
              <div key={client.id} className="border p-4 rounded-lg shadow-lg">
                <h2 className="font-semibold">{client.name}</h2>
                <p>Email: {client.email}</p>
                <p>Phone: {client.phone}</p>
                <p>Status: {client.caseStatus}</p>
                <div className="flex justify-between mt-4">
                  <button
                    className="text-primary"
                    onClick={() => handleUpdateClient(client.id)}
                  >
                    Update
                  </button>
                  <button
                    className="text-red-500"
                    onClick={() => handleDeleteClient(client.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyClients;
