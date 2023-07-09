import connectToAPI from "./connectToAPI.js";

const getResourcesUrls = async (resource) => {
    const list = await connectToAPI(`https://www.swapi.tech/api/${resource}`);
    const { results } = list;

    const urls = results.map(result => result.url);

    return urls;
};

export default getResourcesUrls;