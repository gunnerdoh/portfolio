import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function Shape() {
    const mountRef = useRef(null);

    useEffect(() => {
        const currentRef = mountRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(20, currentRef.clientWidth / currentRef.clientHeight, 0.1, 1000);
        
        const renderer = new THREE.WebGLRenderer({
            alpha: true
        });
        renderer.setClearColor(0x000000, 0);
        renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
        currentRef.appendChild(renderer.domElement);
        
        // cube
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const materials = [
            new THREE.MeshBasicMaterial({ color: 0xff0000 }), // right
            new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // left
            new THREE.MeshBasicMaterial({ color: 0x0000ff }), // top
            new THREE.MeshBasicMaterial({ color: 0xffff00 }), // bottom
            new THREE.MeshBasicMaterial({ color: 0xff00ff }), // front
            new THREE.MeshBasicMaterial({ color: 0x00ffff }), // back
        ];
        const cube = new THREE.Mesh(geometry, materials);
        scene.add(cube);
        
        camera.position.z = 5;
        
        function animate() {
            requestAnimationFrame(animate);
            
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            
            renderer.render(scene, camera);
        }
        
        animate();

        // Handle window resize
        const handleResize = () => {
            const width = currentRef.clientWidth;
            const height = currentRef.clientHeight;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        window.addEventListener('resize', handleResize);
        
        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            currentRef.removeChild(renderer.domElement);
            geometry.dispose();
            materials.forEach(material => material.dispose());
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} className="w-full h-full" />;
}

export default Shape;