
class PointParser {
    static pointsListFromFile(filePath) {
        return fetch(filePath)
            .then(response => response.text())
            .then(PointParser.parseTextToPointObjects)
            .catch(console.error);
    }

    static parseTextToPointObjects(text) {
        return text.split('\n').map(line => {
            const [x, y, z] = line.trim().split(/\s+/).map(Number);
            return { x, y, z };
        }).filter(point => !isNaN(point.x) && !isNaN(point.y) && !isNaN(point.z));
    }
}


export default PointParser;
