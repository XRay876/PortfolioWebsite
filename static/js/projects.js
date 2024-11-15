window.addEventListener('load', () => {
    const projects = document.getElementById('projects');
    const projectsContainer = projects.querySelector('.projects-container');
    let images = projectsContainer.querySelectorAll('.project-image');
    const baseSpeed = 5.5;
    const minSpeed = 0.9;
    let position = -projectsContainer.offsetWidth / 2;
    let animationFrameId;
    let isPaused = false;
    let currentActiveImage = null;
    const transitionDuration = 500;
    const stayDuration = 1500;
    const totalPauseDuration = 2 * transitionDuration + stayDuration;
    const slowdownZone = 200;
    const activationThreshold = 100;

    images.forEach(image => {
        image.dataset.imageWasActive = 'false';
    });

    function animate() {
        updateAnimationState();
        animationFrameId = requestAnimationFrame(animate);
    }

    function updateAnimationState() {
        const viewportWidth = window.innerWidth;
        const viewportCenter = viewportWidth / 2;
        let closestDistance = Infinity;
        let closestImage = null;

        images.forEach(image => {
            const rect = image.getBoundingClientRect();
            const imageCenter = rect.left + rect.width / 2;
            const distance = Math.abs(imageCenter - viewportCenter);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestImage = image;
            }
        });

        if (!isPaused) {
            let speed;
            if (closestDistance < slowdownZone) {
                const speedFactor = closestDistance / slowdownZone;
                speed = minSpeed + (baseSpeed - minSpeed) * speedFactor;
            } else {
                speed = baseSpeed;
            }

            position += speed;

            for (let image of images) {
                const rect = image.getBoundingClientRect();
                const styles = window.getComputedStyle(image);
                const marginLeft = parseFloat(styles.marginLeft) || 0;
                const marginRight = parseFloat(styles.marginRight) || 0;
                const leftEdgeIncludingMargin = rect.left - marginLeft;

                if (leftEdgeIncludingMargin >= viewportWidth) {
                    const imageTotalWidth = rect.width + marginLeft + marginRight;
                    projectsContainer.insertBefore(image, projectsContainer.firstChild);
                    position -= imageTotalWidth;
                    images = projectsContainer.querySelectorAll('.project-image');
                    break;
                }
            }

            if (position >= 0) {
                position = -projectsContainer.offsetWidth / 2;
            }

            projectsContainer.style.transform = `translate3d(${position}px, 0, 0)`;
        }

        if (closestDistance < 3) {
            handleCenterImage(closestImage);
        }
    }

    async function handleCenterImage(image) {
        if (!isPaused && currentActiveImage !== image && image.dataset.imageWasActive === 'false') {
            isPaused = true;
            currentActiveImage = image;
            image.classList.add('active-image');
            image.dataset.imageWasActive = 'true';
            
            await new Promise(resolve => setTimeout(resolve, transitionDuration + stayDuration));
            image.classList.remove('active-image');
            await new Promise(resolve => setTimeout(resolve, transitionDuration));
            
            isPaused = false;
            currentActiveImage = null;
            
            setTimeout(() => {
                image.dataset.imageWasActive = 'false';
            }, totalPauseDuration * 2);
        }
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animationFrameId) {
                animate();
            } else if (!entry.isIntersecting && animationFrameId) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
        });
    }, { rootMargin: "20%" });

    const observerActivation = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelector('.projects').classList.add('active-projects');
            }
        });
    }, { rootMargin : "20%" });

    const targetElement = document.querySelector('.projects-main-container');
    observer.observe(targetElement);
    observerActivation.observe(targetElement);

    window.addEventListener('resize', () => {
        position = -projectsContainer.offsetWidth / 2;
        images = projectsContainer.querySelectorAll('.project-image'); 
    });

});

//i`m dead;