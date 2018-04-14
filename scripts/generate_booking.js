const uuid = require('../src/libs/uuid');
const outputFileFn = require('../src/libs/outputFile');
const fetch = require('isomorphic-fetch');

const path = process.env.OUTPUT_PATH || 'booking.json';

const outputFile = outputFileFn(path);

const checkinout = () => {
    return {
        checkin: Date.now(),
        checkout: Date.now()
    };
};

const generateGuests = () => {
    Math.random()
    return {
        adults: 2,
        children: 0,
    };
};

fetch('https://randomuser.me/api/?results=50')
.then(resp => resp.json())
.then(({ info, results }) => results)
.then( results => {
    return {
        booking: results.map(person => {
            return {
                id: uuid(),
                name: person.name,
                email: person.email,
                bookingId: person.id,
                ...checkinout(),
                guests: generateGuests()
            }
        })
    }
})
.then(outputFile)
.catch(exception => {
    console.error(exception);
});