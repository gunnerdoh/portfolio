import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function Mountain() {
   const mountRef = useRef(null);
   const mouseX = useRef(0);
   const mouseY = useRef(0);
   const mountainRef = useRef(null); // To store reference to the mountain model

   useEffect(() => {
       const currentRef = mountRef.current;
       const scene = new THREE.Scene();
       scene.background = null;
       
       const camera = new THREE.PerspectiveCamera(45, currentRef.clientWidth / currentRef.clientHeight, 1, 1000);
       camera.position.set(60, 60, 60);
       camera.lookAt(0, 0, 0);
       
       const renderer = new THREE.WebGLRenderer({
           alpha: true,
           antialias: true
       });
       renderer.setClearColor(0x000000, 0);
       renderer.setPixelRatio(window.devicePixelRatio);
       renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
       renderer.outputColorSpace = THREE.SRGBColorSpace;
       currentRef.appendChild(renderer.domElement);

       const ambientLight = new THREE.AmbientLight(0xffffff, 5);
       scene.add(ambientLight);
       
       const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
       directionalLight.position.set(5, 5, 5);
       scene.add(directionalLight);

       // Load mountain model
       const loader = new GLTFLoader();
       loader.load(
           '/img/great_mountain/scene.gltf',
           (gltf) => {
               const box = new THREE.Box3().setFromObject(gltf.scene);
               const center = box.getCenter(new THREE.Vector3());
               gltf.scene.position.sub(center);
               
               const scale = 0.01;
               gltf.scene.scale.set(scale, scale, scale);
               
               const textureLoader = new THREE.TextureLoader();
               
               gltf.scene.traverse((node) => {
                   if (node.isMesh) {
                       if (node.material) {
                           const texturePath = '/img/great_mountain/textures/wire_228184153_diffuse.jpeg';
                           const texture = textureLoader.load(
                               texturePath,
                               (tex) => {
                                   tex.colorSpace = THREE.SRGBColorSpace;
                                   node.material.map = tex;
                                   node.material.needsUpdate = true;
                               },
                               undefined,
                               (error) => console.error('Error loading texture:', error)
                           );
                           
                           node.material.transparent = false;
                           node.material.side = THREE.DoubleSide;
                       }
                   }
               });
               
               scene.add(gltf.scene);
               mountainRef.current = gltf.scene; // Store reference to mountain
           },
           (progress) => {
               if (progress.total > 0) {
                   const percentComplete = (progress.loaded / progress.total) * 100;
                   console.log(`Loading progress: ${percentComplete.toFixed(2)}%`);
               }
           },
           (error) => console.error('Error loading model:', error)
       );

       // Mouse tracking
       const handleMouseMove = (event) => {
           mouseX.current = (event.clientX / window.innerWidth) * 2 - 1;
           mouseY.current = -(event.clientY / window.innerHeight) * 2 + 1;
       };
       window.addEventListener('mousemove', handleMouseMove);

       function animate() {
           requestAnimationFrame(animate);
           
           // Update mountain rotation based on mouse if mountain is loaded
           if (mountainRef.current) {
               mountainRef.current.rotation.x = mouseY.current * 0.5; // Reduced multiplier for subtler movement
               mountainRef.current.rotation.y = mouseX.current * 0.5;
           }
           
           renderer.render(scene, camera);
       }
       animate();

       const handleResize = () => {
           const width = currentRef.clientWidth;
           const height = currentRef.clientHeight;
           camera.aspect = width / height;
           camera.updateProjectionMatrix();
           renderer.setSize(width, height);
       };
       window.addEventListener('resize', handleResize);

       return () => {
           window.removeEventListener('mousemove', handleMouseMove);
           window.removeEventListener('resize', handleResize);
           currentRef.removeChild(renderer.domElement);
           renderer.dispose();
       };
   }, []);

   return <div ref={mountRef} className="w-full h-full" />;
}

export default Mountain;