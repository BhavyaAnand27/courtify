// src_lawyer/components/Consultations.jsx
import React from "react";

const Consultations = () => {
    const consultations = [
        { id: 1, client: "Alice", date: "2025-01-15", status: "Completed" },
        { id: 2, client: "Bob", date: "2025-01-17", status: "Upcoming" },
    ];

    return (
        <section className="lawyer-consultations">
            <h2>Consultations</h2>
            <ul>
                {consultations.map((consultation) => (
                    <li key={consultation.id}>
                        Client: {consultation.client}, Date: {consultation.date}, Status: {consultation.status}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Consultations;
