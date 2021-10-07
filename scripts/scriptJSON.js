let requestURL = "./database/dataBase.json";

const plantsArray = fetch(requestURL).then((response) => response.json());

export { plantsArray };
