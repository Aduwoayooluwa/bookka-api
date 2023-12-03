import { Web5 } from "@web5/api";

export const { web5, did: userDid } = await Web5.connect({
     techPreview: {
            dwnEndpoints: ["https://localhost:8000/"]
        }
});