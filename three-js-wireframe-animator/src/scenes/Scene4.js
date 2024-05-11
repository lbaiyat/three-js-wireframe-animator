import SceneComponent from "../components/SceneComponent";

function Scene4() {
    const skyscraperObjects = [

        {
            file: 'hourglass.txt',
            xOffset: 0,
            yOffset: 30,
            speed: 2,
            color: 0x00ff000
        },
    ];

    const objects = [...skyscraperObjects]

    const cameraCoordinates = {
        x: 0,
        y: -650,
        z: 50
    };
    const fov = 100;
    return (
        <>
            <SceneComponent objects={objects} cameraCoordinates={cameraCoordinates} fov={fov}/>
        </>
    )
}

export default Scene4;