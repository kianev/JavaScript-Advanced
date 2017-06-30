function tickets(ticketArray, sortingCriteria) {
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let unsortetTickets = [];

    for (let ticket of ticketArray) {
        let [destination, price, status] = ticket.split("|");
        price = Number(price);
        unsortetTickets.push(new Ticket(destination, price, status));
    }

    let sortedTickets;
    switch (sortingCriteria){
        case "destination":
            sortedTickets = unsortetTickets.sort((a,b) => a.destination.localeCompare(b.destination)); break;
        case "price":
            sortedTickets = unsortetTickets.sort((a,b) => a.price - b.price); break;
        case "status":
            sortedTickets = unsortetTickets.sort((a,b) => a.status.localeCompare(b.status));break;
    }

    return sortedTickets;
}

console.log(tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'));
