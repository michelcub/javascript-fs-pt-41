import getResourcesFromUrls from "./getResourcesFromUrls.js";
import getResourcesUrls from "./getResourcesUrls.js";

const getResources = async (resource) => {
    const urls = await getResourcesUrls(resource);
    const resources = await getResourcesFromUrls(urls);

    const parsedResources = resources.map(res => {
        const id = res.result.uid;
        const properties = res.result.properties;
        const type = resource === 'people' ? 'characters' : resource;
        const name = properties.name || properties.model;

        return { id, ...properties, type, name };
    });

    return parsedResources;
}

export default getResources;