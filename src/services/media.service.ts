import { Media } from "./rest-api";
import { restApi } from "./rest-api.service";

class MediaService {
    async getMedia(id: string): Promise<Media> {
        const response = await restApi.getMedia(id);
        return response.data;
    }

    async uploadMedia(file: File[]): Promise<Media> {
        const response = await restApi.uploadMedia(file);
        return response.data;
    }
}

let mediaService = new MediaService();
export default mediaService;
