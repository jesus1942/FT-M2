import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Lines() {
  const containerRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);

    const container = containerRef.current;
    container.appendChild(renderer.domElement);

    const lines = [];

    for (let i = 0; i < 70; i++) {
      const material = new THREE.LineBasicMaterial({ color: 0xffffff });
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array([
        getRandomPosition(), getRandomPosition(), getRandomPosition(),
        getRandomPosition(), getRandomPosition(), getRandomPosition(),
        getRandomPosition(), getRandomPosition(), getRandomPosition()
      ]);
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const line = new THREE.Line(geometry, material);
      line.velocity = new THREE.Vector3(getRandomVelocity(), getRandomVelocity(), getRandomVelocity());
      lines.push(line);
      scene.add(line);
    }

    function getRandomPosition() {
      return Math.random() * 2 - 1;
    }

    function getRandomVelocity() {
      return (Math.random() - 0.5) * 0.01;
    }

    function getRandomColor() {
      return Math.random() * 0xffffff;
    }

    const resizeHandler = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', resizeHandler);

    const animate = () => {
      requestAnimationFrame(animate);
      lines.forEach(line => {
        line.rotation.x += line.velocity.x;
        line.rotation.y += line.velocity.y;
        line.rotation.z += line.velocity.z;
      });
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      lines.forEach(line => scene.remove(line));
      renderer.dispose();
      container.removeChild(renderer.domElement);
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return <div className="lines-container" ref={containerRef} />;
}
