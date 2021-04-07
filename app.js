import express from 'express';
import notEmptyObj from './utils/notEmptyObject.js';
import generateId from './utils/generateId.js';

const app = express();
app.use(express.json());

let persons = [
    {
        content: "sadfdsf",
        important: false,
        id: generateId()
    }, {
        content: "dsfdsfsdfd",
        important: true,
        id: generateId()
    }, {
        content: "some other",
        important: true,
        id: generateId()
    }, {
        content: "other more for more information",
        important: false ,
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
        : response.status(404).json({ message: 'not found' });
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

    return response.status(404).json({ message: 'not found' })
})

/**
 * @description - create a new person
 */
app.post('/api/persons', (request, response) => {
    console.log("entro")
    console.log(request.body)
    if(notEmptyObj(request.body)) {
        console.log("si")
        const { content, important } = request.body
        if(content && important) {
            const newPerson = {
                content,
                important,
                id: generateId()
            }
            persons = persons.concat(newPerson)
            return response.json(newPerson)
        }else {
            return response.json({ message: "missing arguments" })
        }
    }else {
       return response.json({ message: "empty object" })
    }
    
})



app.listen(3000, () => void console.log('running on port 3000'));



