export function generateUniqueId(dataArray) {
    const highestId = dataArray.reduce((maxId, item) => (item.id > maxId ? item.id : maxId), 0);
    return highestId + 1;
}