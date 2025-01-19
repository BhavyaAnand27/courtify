document.addEventListener("DOMContentLoaded", () => {
    // Example: Simulate loading data
    const appointments = 5;
    const consultations = 3;
  
    // Update Dashboard stats
    document.getElementById("today-appointments").innerText = appointments;
    document.getElementById("pending-consultations").innerText = consultations;
  
    console.log("Lawyer Dashboard loaded successfully.");
  });
  