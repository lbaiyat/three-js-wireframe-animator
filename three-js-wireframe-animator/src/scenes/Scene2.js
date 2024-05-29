import SceneComponent from "../components/SceneComponent";

function Scene2() {

    const objects = [
        {
            file: 'polySphere.txt',
            xOffset: 40,
            yOffset: -120,
            zOffset: 20,
            speed: 3,
            color: 0x0000ff
        },
    ];

    const cameraCoordinates = {
        x: 150,
        y: -450,
        z: 180
    };

    const fov = 100;

    return (
        <SceneComponent objects={objects} cameraCoordinates={cameraCoordinates} fov={fov}/>
    )
}

export default Scene2;