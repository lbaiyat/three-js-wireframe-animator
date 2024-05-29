import SceneComponent from "../components/SceneComponent";

function Scene1() {

    const objects = [
        {
            file: 'helix/helix1.txt',
            xOffset: 0,
            yOffset: 0,
            speed: 8,
            color: 0xff0000
        },
        {
            file: 'helix/helix2.txt',
            xOffset: 0,
            yOffset: 0,
            speed: 8,
            color: 0x0fffff
        },
    ];

    const cameraCoordinates = {
        x: 0,
        y: -35,
        z: 15
    };

    const fov = 20;

    return (
        <SceneComponent objects={objects} cameraCoordinates={cameraCoordinates} fov={fov}/>
    )
}

export default Scene1;