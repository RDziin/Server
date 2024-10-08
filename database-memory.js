import { randomUUID } from 'node:crypto';

export class DataBaseMemory {
    #videos = new Map();

    list() {
        return Array.from(this.#videos.values());
    }

    create(video) {
        const videoId = randomUUID();
        const newVideo = { id: videoId, video };

        this.#videos.set(videoId, newVideo);
        return newVideo;  
    }
    
    update(id, video) {
        this.#videos.set(id, video)
        
    }

    delete(id) {
        return this.#videos.delete(id); 
    }
}
