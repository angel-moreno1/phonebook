import express from 'express';
import notEmptyObj from './utils/notEmptyObject.js';
import generateId from './utils/generateId.js';
import morgan from 'morgan'
import cors from 'cors'

const app = express();

app.use(cors())
app.use(express.json());
app.use(morgan((tokens, req, res) => {
    return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    tokens.method(req, res) === "POST" ? JSON.stringify(req.body) : null
  ].join(' ')
}))


let persons = [
    {
        name: "sadfdsf",
        phone: 534534534,
        id: generateId()
    }, {
        name: "dsfdsfsdfd",
        phone: 435435435,
        id: generateId()
    }, {
        name: "some other",
        phone: 43554353453,
        id: generateId()
    }, {
        name: "somename",
        phone: 34535435345 ,
        id: generateId()
    }
];

/**
 * @description - return an json with information about how many perons are in database
 */
app.get('/info', (request, response) => {
    const html = `
        <p>Phonebook has info for ${persons.length} people</p>
        <p>${new Date()}</p>
    `
    response.send(html);
});

/**
 * @description - return all the persons in database
 */
app.get('/api/persons', (request, response) => {
    response.status(200).json(persons);
});

/**
 * @description - return an json with an unique person
 */
app.get('/api/persons/:id', (request, response) => {
    const person = persons.find(
        person => person.id === Number(request.params.id)
    ) || {};
    notEmptyObj(person)
        ? response.status(200).json(person) 
        : response.status(404).json({ error: 'not found' });
});

/** 
 * @description - delete a single person
*/
app.delete('/api/persons/:id', (request, response) => {
    const personToDelete = persons.find(
        person => person.id === Number(request.params.id)
    ) || {}
    if(notEmptyObj(personToDelete)) {
        persons = persons.filter(
            person => person.id !== personToDelete.id
        )
        return response.status(200).json({ status: 'ok' })
    }

    return response.status(404).json({ error: 'not found' })
})

/**
 * @description - create a new person
 */
app.post('/api/persons', (request, response) => {
    if(
        notEmptyObj(request.body) && 
        /* is not undefined */
        request.body.name !== void 0 && 
        request.body.phone !== void 0
    ) {
        const { name, phone } = request.body
        const isDuplicate = persons.some(
            person => person.name.trim().toLowerCase() === name.trim().toLowerCase()
        )
        if((name && phone) && !isDuplicate) {
            const newPerson = { name, phone, id: generateId() }
            persons = persons.concat(newPerson)
            return response.status(201).json(newPerson)
        }else {
            return response.status(400).json({ error: 'name must be unique' })
        }
    }else {
       return response.status(400).json({ error: "missing arguments" })
    }
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => void console.log('running on port', PORT));



