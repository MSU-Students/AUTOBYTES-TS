import { DefaultApi, Configuration, Media } from "./rest-api";

const dev = "http://localhost:3000";

const restConfig = new Configuration({
    basePath: dev,
    baseOptions: {
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    },
});

const restApi = new DefaultApi(restConfig);

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
