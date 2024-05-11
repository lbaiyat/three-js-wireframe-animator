import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {useEffect} from "react";
import {pointsListFromFile} from "../services/PointParserService";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.set(0, -35, 15);


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const controls = new OrbitControls( camera, renderer.domElement );


function rotateCameraAroundPoint(camera, point, axis, angle) {
    const quaternion = new THREE.Quaternion();
    // Use Quaternion to rotate the position
    quaternion.setFromAxisAngle(axis, angle);
    // Move the camera position so the pivot point is at the origin
    camera.position.sub(point);
    // Apply the quaternion to the position vector
    camera.position.applyQuaternion(quaternion);
    // Move the pivot point back to its original position
    camera.position.add(point);
    // Ensure the camera still looks at the pivot point
    camera.lookAt(point);
}

const sphereGeometry = new THREE.SphereGeometry( 2, 2, 2, 0, 0, 0);

function newSphere(x, y, z) {
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const sphere = new THREE.Mesh(sphereGeometry, material);
    sphere.scale.set( 600, 600 );
    sphere.position.set(x,y,z);

    return sphere;
}


function wireFrameFromPointsList(points, xOffset = 0, yOffset = 0, zOffset = 0, speed= 1, color= 0x00ff00) {
    let spheres = [];
    points.forEach(point => {
        const sphere = newSphere(point.x + xOffset, point.y + yOffset, point.z + zOffset);
        scene.add(sphere);
        spheres.push(sphere);
    });

    let sphereIndex = 0;
    const GEOMETRY_COUNT = spheres.length;

        const colorChangeInterval = setInterval(() => {
            if (sphereIndex + 5 < GEOMETRY_COUNT) {
                drawLine(spheres[sphereIndex], spheres[sphereIndex + 1], color);
                drawLine(spheres[sphereIndex], spheres[sphereIndex + 2], color);
                drawLine(spheres[sphereIndex], spheres[sphereIndex + 3], color);
                drawLine(spheres[sphereIndex], spheres[sphereIndex + 4], color);
                drawLine(spheres[sphereIndex], spheres[sphereIndex + 5], color);
            }
            sphereIndex += 1;
        }, 50 / speed);
    }

    function animate() {
        requestAnimationFrame(animate);

        renderer.clear();
        renderer.render(scene, camera);
    }

    function render() {
        renderer.render(scene, camera);
    }


    function drawLine(shape1, shape2, color) {
        const lineMaterial = new THREE.LineBasicMaterial({color: color});
        const position1 = new THREE.Vector3();
        const position2 = new THREE.Vector3();

        shape1.getWorldPosition(position1);
        shape2.getWorldPosition(position2);


        const points = [
            position1,
            position2,
        ]

        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, lineMaterial);
        scene.add(line);
    }


    function SceneComponent(props) {

        useEffect(() => {

            camera.fov = props.fov;

            camera.position.set(props.cameraCoordinates.x, props.cameraCoordinates.y, props.cameraCoordinates.z);
            camera.updateProjectionMatrix();

            props.objects.forEach((object, index) => {
                pointsListFromFile(object.file)
                .then(points => {
                    wireFrameFromPointsList(points, object.xOffset, object.yOffset, object.zOffset, object.speed, object.color);
                });
                }
            )
            animate();


            return () => {
            };
        }, []);

    }
    export default SceneComponent;
