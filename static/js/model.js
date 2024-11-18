const model = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75,1,0.1,1000);
    const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});

    renderer.setSize(100,150);
    renderer.setClearColor(0x000000, 0);

    const container = document.getElementById('model-container');
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const loader = new THREE.GLTFLoader();
    loader.load('static/models/scene.gltf', ((gltf) => {
        const model = gltf.scene;

        model.scale.set(0.5,0.5,0.5);
        model.position.set(0,.4,0);

        model.rotation.x = 0.4;
        model.rotation.y = 0.1;
        model.rotation.z = 0;

        scene.add(model);

        animate();
    }), undefined, ((error) => {
        console.error(error);
    }));

    camera.position.z = 2;

    let rotationSpeed = 0.01;

    function animate() {
        requestAnimationFrame(animate);

        scene.rotation.y += rotationSpeed;

        renderer.render(scene, camera);
    }


    setTimeout(() => {
        let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let scrollSpeed = Math.abs(scrollTop - lastScrollTop);
        rotationSpeed = 0.01 + (scrollSpeed / 1000); 
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
    });
    }, 1000);

};

export default model;



