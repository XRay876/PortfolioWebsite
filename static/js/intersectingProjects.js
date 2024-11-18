const intersectingProjects = () => {

    const divs = {
        project_1: { element: document.getElementById('project_1'), classes: ['animate-left', 'shown'] },
        project_2: { element: document.getElementById('project_2'), classes: ['animate-right', 'shown'] },
        project_3: { element: document.getElementById('project_3'), classes: ['animate-left', 'shown'] },
    };

    const handler = (entries, observer) => {
        entries.forEach((entry)=>{
            if (entry.isIntersecting) {
                const elementKey = entry.target.id;
                const animationData = divs[elementKey];

                animationData.classes.forEach(className => animationData.element.classList.add(className));
                observer.unobserve(entry.target);
            }
        })
    };

    const observerProjects = new IntersectionObserver(handler, {root : null, threshold : 0.1});

    observerProjects.observe(document.getElementById('project_1'));
    observerProjects.observe(document.getElementById('project_2'));
    observerProjects.observe(document.getElementById('project_3'));
};

export default intersectingProjects;