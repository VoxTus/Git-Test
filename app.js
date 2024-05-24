import * as THREE from 'three';
// create scent
const scene = new THREE.Scene();

//create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//create a camera
const camera = new THREE.PerspectiveCamera(
        35,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z =5;

// create a geometry 
const geometry = new THREE.BoxGeometry();

//create a material
const material = new THREE.MeshBasicMaterial({ color : 0x00ff00 });

//create a mesh 
const cube = new THREE.Mesh(geometry , material);

//Add the mesh to the scene
scene.add(cube);

// render the scene
function animate() {
    requestAnimationFrame(animate);
    //Rotate the cube
    cube.rotation.x += 0.001;
    cube.rotation.y += 0.001;

    //Render the scene with the camera
    renderer.render(scene, camera)
}
animate();