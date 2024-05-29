import SceneComponent from "../components/SceneComponent";

function Scene3() {
    const skyscraperObjects = [

        {
            file: 'skyscraper/skyscraper1.txt',
            xOffset: 270,
            yOffset: 30,
            speed: 2,
            color: 0x00ffff
        },
    ];

    const objects = [...skyscraperObjects]

    const cameraCoordinates = {
        x: 0,
        y: -950,
        z: 100
    };
    const fov = 100;

    return (
        <SceneComponent objects={objects} cameraCoordinates={cameraCoordinates} fov={fov}/>
    )
}

export default Scene3;