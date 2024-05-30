<h1>Three.JS Wireframe Animator</h1>
<hr>

<div style="border-left: 1px solid #ccc; padding-left: 12px;">
<h2>Table of Contents</h2>
<ul>
    <li><a href="#overview">Overview</a></li>
    <li><a href="#about-three-js">About Three.JS</a></li>
    <li><a href="#instructions">Instructions</a>
        <ul>
            <li><a href="#run-and-setup-dependencies">Install dependencies and run application</a></li>
        </ul>
    <li><a href="#scene-setup">Scene Setup</a>
        <ul>
            <li><a href="#scene-component-overview">Scene Component Overview</a></li>
            <li><a href="#scene-setup">Setting up a Scene</a>
            <ul>
                <li><a href="#object-definition">Object Definition</a></li>
                <li><a href="#camera-position">Camera Position</a></li>
                <li><a href="#fov">Field of View (fov)</a></li>
            </ul>
            </li>
        </ul>
    </li>
    <li><a href="#example-scenes">Example Scenes</a>
    <ul>
        <li><a href="#scene-one">Scene One</a></li>
        <li><a href="#scene-two">Scene Two</a></li>
        <li><a href="#scene-three">Scene Three</a></li>
        <li><a href="#scene-fpur">Scene Four</a></li>
    </ul>
    </li>
</ul>
</div>

<div style="border-left: 1px solid #ccc; padding-left: 12px;" id="overview">
<h2>Overview:</h2>
<p>
This is a project created in React.js using the Three.js 3D graphics library.
The application creates a scene based on specified models and constraints, and will then animate
drawing the wireframe(s) of the 3d representation of the object model(s).
</p>
</div>

<div style="border-left: 1px solid #ccc; padding-left: 12px;" id="about-three-js">
<h2>About Three.JS:</h2>
<p>
Three.js is a cross-browser JavaScript library and API used to create and display animated 3D computer graphics in a web browser using WebGL. It simplifies the development of 3D content by providing an extensive set of tools and features for rendering, animating, and interacting with 3D objects.
</p>
</div>

<div style="border-left: 1px solid #ccc; padding-left: 12px;" id="instructions">
<h2>Instructions:</h2>

<p>
Follow the process below to get the application running.
</p>

<h3 id="run-and-setup-dependencies">
Install dependencies and run application
</h3>
<pre><code class="language-bash">
npm run start;
</code></pre>


</div>

<div style="border-left: 1px solid #ccc; padding-left: 12px;" id="scene-setup">
<h2>Scene Setup</h2>

<h3 id="scene-component-overview">
Scene Component Overview
</h3>
The SceneComponent module is set up to allow multiple object definitions and options
for each individual object, such as coordinate positioning and color. These objects
are defined as a list of json objects and passed into the SceneComponent object, along with
camera coordinates, and the desired field-of-view value.


<p>
</p>

<h3 id="scene-setup">
Creating a new Scene
</h3>

<p>
To create a new scene, add a new module with a component function that renders a SceneComponent object.
</p>


```jsx
import SceneComponent from "../components/SceneComponent";
    
    function SceneExample() {

        const objects = [
            {
                file: 'path/fileName.txt',
                xOffset: 0,
                yOffset: 0,
                zOffset: 0,
                speed: 8,
                color: 0xff0000
            },
        ];

        const cameraCoordinates = {
            x: 0,
            y: 0,
            z: 0
        };

        const fov = 20;
        
        return (
            <SceneComponent objects={objects} cameraCoordinates={cameraCoordinates} fov={fov}/>
        )
    }
export default SceneExample;
    
```

<div>
<h3 id="object-definition">Object Definition</h3>
<p>The objects field a list that defines which object to draw, the location, speed of animation, and the color.</p>
<ul>
<li>file: This should be a text file containing 3 space-seperated points, with 1 point per line.<br>(Example below)</li>

```text
1.000 0.000 0.000
0.992 0.126 0.010
0.968 0.249 0.020
0.929 0.369 0.030
0.876 0.483 0.040
0.808 0.589 0.050
.
.
.
```

<li>xOffset: The X-Coordinate Position of this object.</li>
<li>yOffset: The Y-Coordinate Position of this object.</li>
<li>zOffset: The Z-Coordinate Position of this object.</li>
<li>speed: The speed of the animation for this object.</li>
<li>color: The color that this object should be.</li>
</ul>

<h3 id="camera-position">Camera Position</h3>
<p>This will determine the camera position in the scene, which is defined by the specified
x, y, and z coordinate values.</p>

<h3 id="fov">Field of View (fov)</h3>

<p>This field corresponds to the extent that objects in the scene are visible. A higher value will
make the objects in the scene look further away, and a lower value will make them seem closer.
</p>
</div>

</div>

<div style="border-left: 1px solid #ccc; padding-left: 12px;" id="example-scenes">
<h2>
Example Scenes
</h2>

<h3 id="scene-one">
Scene One
</h3>
<video width="640" height="480" controls poster="https://lbaiyat-github.s3.amazonaws.com/wireframe-animator/scene_1_thumbail.mp4">
  <source src="https://lbaiyat-github.s3.amazonaws.com/wireframe-animator/scene_1.mp4" type="video/mp4" >
</video>


<h3 id="scene-two">
Scene Two
</h3>
<video width="640" height="480" controls poster="https://lbaiyat-github.s3.amazonaws.com/wireframe-animator/scene_2_thumbail.mp4">
  <source src="https://lbaiyat-github.s3.amazonaws.com/wireframe-animator/scene_2.mp4" type="video/mp4" >
</video>

<h3 id="scene-three">
Scene Three
</h3>
<video width="640" height="480" controls poster="https://lbaiyat-github.s3.amazonaws.com/wireframe-animator/scene_3_thumbail.mp4">
  <source src="https://lbaiyat-github.s3.amazonaws.com/wireframe-animator/scene_3.mp4" type="video/mp4" >
</video>

<h3 id="scene-four">
Scene Four
</h3>
<video width="640" height="480" controls poster="https://lbaiyat-github.s3.amazonaws.com/wireframe-animator/scene_4_thumbail.mp4">
  <source src="https://lbaiyat-github.s3.amazonaws.com/wireframe-animator/scene_4.mp4" type="video/mp4" >
</video>


</div>
