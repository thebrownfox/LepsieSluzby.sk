import axios from "axios";

const protocol = "http://"
const host = "localhost";
const port = "3100";

const apiPath = `${protocol}${host}:${port}`

export default {
    suggestions: {
        // TODO: Add number of results and search params
        getSuggestions: async () => {
            const response = await axios.get(`${apiPath}/suggestions`);
            return response;
        },
        createSuggestion: async (payload) => {
            const response = await axios.post(`${apiPath}/suggestions`);
            return response;
        }
    }
}