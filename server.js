import express from 'express';
import { DataBaseMemory } from './database-memory.js';

const server = express();
const database = new DataBaseMemory();

server.use(express.json());

server.post('/videos', (req, rep) => {
    const { title, description, duration } = req.body;

    database.create({
        title,
        description,
        duration,
    });


    return rep.status(201).send()
});


server.get('/videos', () => {
    const videos = database.list();

    console.log(videos)

    return videos
});


server.put('/videos/:id', (req, rep) => {
    const videoId = req.params.id

    const { title, description, duration } = req.body

    database.update(videoId,{
        title,
        description,
        duration,
    } )

    return rep.status(204).send()
});


server.delete('/videos/:id', (req, rep) => {
    const videoId = req.params.id

    database.delete(videoId)

    return rep.status(204).send()
});

server.listen(3333)