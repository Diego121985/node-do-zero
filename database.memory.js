import { randomUUID } from "node:crypto";

export class DatabaseMemory {
  #videos = new Map();

list(search) {

 console.log("search recebido:", search) 

  return Array.from(this.#videos.entries())
    .map(([id, data]) => ({ id, ...data }))
    .filter(video => {
      if (!search) {
        // se não tiver filtro, retorna todos
        return true;
      }

      const term = String(search).toLowerCase();
      return (
        video.title.toLowerCase().includes(term) ||
        video.description.toLowerCase().includes(term)
      );

        });
}


  create(video) {
    const videoId = randomUUID();

    this.#videos.set(videoId, video);
  }
  update(id, video) {
    if (this.#videos.has(id)) {
      this.#videos.set(id, video); // substitui os dados do vídeo
    }
  }
  delete(id) {
    this.#videos.delete(id); // apenas o id é necessário
  }
}
