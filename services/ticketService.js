const Ticket = require("../models/ticketModel");

const createTicket = (db, title, desc, user_id) =>
    Ticket.create(db, title, desc, user_id);

const updateTicket = (db, id, title, desc) =>
    Ticket.update(db, id, title, desc);

const deleteTicket = (db, id) =>
    Ticket.delete(db, id);

const updateStatus = (db, id, status) => {

    const allowed = ["Open", "In Progress", "Resolved", "Closed"];

    if (!allowed.includes(status)) {
        throw new Error("Invalid status");
    }

    return Ticket.updateStatus(db, id, status);
};

const getTickets = (db) => Ticket.getAll(db);

const getTicketsByStatus = (db, status) =>
    Ticket.getByStatus(db, status);

module.exports = {
    createTicket,
    updateTicket,
    deleteTicket,
    updateStatus,
    getTickets,
    getTicketsByStatus
};