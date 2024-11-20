import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function Mountain() {
    const mountRef = useRef(null);
    const mouseX = useRef(0);
    const mouseY = useRef(0);
    const mountainRef = useRef(null);
    const frameRef = useRef(null); // For animation frame control

    useEffect(() => {
        const currentRef = mountRef.current;
        const scene = new THREE.Scene();
        scene.background = null;
        
        // Reduced camera settings
        const camera = new THREE.PerspectiveCamera(45, 400/400, 1, 100); // Reduced far plane
        camera.position.set(40, 40, 40); // Reduced distance
        camera.lookAt(0, 0, 0);
        
        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: false, // Disabled antialiasing
            powerPreference: "low-power" // Prefer lower power usage
        });
        renderer.setClearColor(0x000000, 0);
        renderer.setSize(250, 250); // Fixed size
        currentRef.appendChild(renderer.domElement);

        // Simplified lighting
        const light = new THREE.DirectionalLight(0xffffff, 5);
        light.position.set(5, 5, 5);
        scene.add(light);

        // Load mountain with optimizations
        const loader = new GLTFLoader();
        // Add the texture loading back in the GLTF loader section:

        loader.load(
            '/img/great_mountain/scene.gltf',
            (gltf) => {
                const scale = 0.007;
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
                                }
                            );
                            
                            node.material.side = THREE.FrontSide; // Keep performance optimization
                            node.frustumCulled = true; // Keep performance optimization
                        }
                    }
                });
                
                scene.add(gltf.scene);
                mountainRef.current = gltf.scene;
            },
            undefined,
            (error) => console.error('Error:', error)
        );

        // Throttled mouse tracking
        let throttleTimeout;
        const handleMouseMove = (event) => {
            if (!throttleTimeout) {
                throttleTimeout = setTimeout(() => {
                    mouseX.current = (event.clientX / 400) * 2 - 1;
                    mouseY.current = -(event.clientY / 400) * 2 + 1;
                    throttleTimeout = null;
                }, 16); // ~60fps throttle
            }
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Reduced animation frequency
        function animate() {
            frameRef.current = requestAnimationFrame(animate);
            
            if (mountainRef.current) {
                mountainRef.current.rotation.x += (mouseY.current * 0.1 - mountainRef.current.rotation.x) * 0.05;
                mountainRef.current.rotation.y += (mouseX.current * 0.1 - mountainRef.current.rotation.y) * 0.05;
            }
            
            renderer.render(scene, camera);
        }
        animate();

        // Cleanup
        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
            clearTimeout(throttleTimeout);
            window.removeEventListener('mousemove', handleMouseMove);
            if (currentRef.contains(renderer.domElement)) {
                currentRef.removeChild(renderer.domElement);
            }
            renderer.dispose();
            scene.clear();
        };
    }, []);

    return <div ref={mountRef}/>;
}

export default Mountain;