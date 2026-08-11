import * as THREE from 'three';

/**
 * Shakes the camera to simulate impact.
 */
export function screenShake(camera, intensity = 0.3, duration = 300) {
  const originalPos = camera.position.clone();
  let startTime = null;

  function animate(time) {
    if (!startTime) startTime = time;
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);

    if (progress < 1) {
      const currentIntensity = intensity * (1 - progress);
      camera.position.x = originalPos.x + (Math.random() - 0.5) * currentIntensity;
      camera.position.y = originalPos.y + (Math.random() - 0.5) * currentIntensity;
      camera.position.z = originalPos.z + (Math.random() - 0.5) * currentIntensity;
      requestAnimationFrame(animate);
    } else {
      camera.position.copy(originalPos);
    }
  }

  requestAnimationFrame(animate);
}

/**
 * Creates a quick color flash overlay across the screen.
 */
export function flashEffect(scene, color = 0xffffff, duration = 200) {
  const flashMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 100),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 1, depthTest: false, depthWrite: false })
  );
  // Position close to camera to cover view
  flashMesh.position.z = 5;
  scene.add(flashMesh);

  let startTime = null;
  function animate(time) {
    if (!startTime) startTime = time;
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);

    if (progress < 1) {
      flashMesh.material.opacity = 1 - progress;
      requestAnimationFrame(animate);
    } else {
      scene.remove(flashMesh);
      flashMesh.geometry.dispose();
      flashMesh.material.dispose();
    }
  }

  requestAnimationFrame(animate);
}

/**
 * Temporarily slows down animations (requires a reference object acting as game time scale).
 */
export function slowMotion(timeScaleRef, timeScale = 0.5, duration = 500) {
  const originalScale = timeScaleRef.value || 1.0;
  timeScaleRef.value = timeScale;
  
  setTimeout(() => {
    timeScaleRef.value = originalScale;
  }, duration);
}

/**
 * Boosts ambient light based on combo level to simulate excitement.
 */
export function comboGlow(scene, level) {
  let ambientLight = scene.children.find(c => c instanceof THREE.AmbientLight);
  if (ambientLight) {
    // Standard intensity might be 1.0, increase gradually
    const targetIntensity = Math.min(2.5, 1.0 + level * 0.15);
    ambientLight.intensity = targetIntensity;
    
    // Optionally return to normal slowly
    setTimeout(() => {
      if (ambientLight) ambientLight.intensity = 1.0;
    }, 2000);
  }
}

/**
 * Triggers a victory camera zoom and golden light.
 */
export function victoryEffect(scene, camera) {
  const originalFov = camera.fov;
  let startTime = null;
  const duration = 1500;

  const goldenLight = new THREE.DirectionalLight(0xffd700, 2.0);
  goldenLight.position.set(0, 10, 5);
  scene.add(goldenLight);

  function animate(time) {
    if (!startTime) startTime = time;
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);

    if (progress < 0.5) {
      // Zoom in slightly during first half
      const t = progress / 0.5;
      camera.fov = originalFov - 6 * Math.sin(t * Math.PI);
      camera.updateProjectionMatrix();
      requestAnimationFrame(animate);
    } else if (progress < 1) {
      // Return to original FOV during second half
      const t = (progress - 0.5) / 0.5;
      camera.fov = (originalFov - 6) + 6 * t;
      camera.updateProjectionMatrix();
      requestAnimationFrame(animate);
    } else {
      // Ensure FOV is strictly restored
      camera.fov = originalFov;
      camera.updateProjectionMatrix();
      scene.remove(goldenLight);
      goldenLight.dispose && goldenLight.dispose();
    }
  }

  requestAnimationFrame(animate);
}

export default {
  screenShake,
  flashEffect,
  slowMotion,
  comboGlow,
  victoryEffect
};
