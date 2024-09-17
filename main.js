function submitTicket(formData) {
  if (!validateFormData(formData)) {
      return "Error: Form data is invalid.";
  }
 // Simulate sending form data to the server
    

  const ticketNumber = Math.floor(Math.random() * 100000);
  formData.ticketNumber = ticketNumber;

// Return formatted ticket summary
  return formatTicketSummary(formData);
}

function searchTickets(searchQuery) {
  
 // Simulated data for the sake of this example. 
  const tickets = [
      { ticketNumber: 12345, name: "John Doe", issue: "Password reset" },
      { ticketNumber: 67890, name: "Jane Smith", issue: "Network connectivity issue" }
  ];
// Filter tickets by search query
    const results = tickets.filter(ticket =>
      ticket.name.includes(searchQuery) || ticket.ticketNumber.toString().includes(searchQuery)
  );
// Return matching tickets
  return results;
}


//function formats the ticket information into a readable summary.
function formatTicketSummary(ticket) {
  return `Support Ticket Summary:
  - Ticket Number: ${ticket.ticketNumber}
  - Name: ${ticket.name}
  - Issue: ${ticket.issue}
  - Submitted on: ${new Date().toLocaleDateString()}`;
}
function displayTicketResults(tickets) {
  const resultDiv = document.getElementById('ticketResults');
  resultDiv.innerHTML = "";  

  if (tickets.length === 0) {
      resultDiv.innerHTML = "No tickets found.";
      return;
  }
// Create and display ticket results
  tickets.forEach(ticket => {
      const ticketElement = document.createElement('div');
      ticketElement.innerHTML = `
          <strong>Ticket Number:</strong> ${ticket.ticketNumber}<br>
          <strong>Name:</strong> ${ticket.name}<br>
          <strong>Issue:</strong> ${ticket.issue}<br><br>
      `;
      resultDiv.appendChild(ticketElement);
  });
}

function validateFormData(formData) {
  if (!formData.name || !formData.issue) {
      alert("Please fill in all required fields.");
      return false;
  }

  return true;
}

