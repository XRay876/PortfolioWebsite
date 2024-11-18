const intersectingObjects = function () {
    
    const navHeading = document.getElementById('nav-heading');
    const navAbout = document.getElementById('nav-about');
    const navSkills = document.getElementById('nav-skills');
    const navContact = document.getElementById('nav-contact');

    const sections = {
        heading: navHeading,
        about: navAbout,
        skills: navSkills,
        contact: navContact,
    };

    const divs = {
        skills: { element: document.querySelector('.skills'), classes: ['shown'] },
        about: { element: document.querySelector('.about'), classes: ['shown'] },

        skills_table: { element: document.querySelector('.table-skills'), classes: ['animate-left', 'shown'] },
        skills_title: { element: document.querySelector('.skills-title'), classes: ['animate-right', 'shown'] },

        about_early: { element: document.getElementById('about_early'), classes: ['animate-left', 'shown'] },
        about_career: { element: document.getElementById('about_career'), classes: ['animate-right', 'shown'] },
        about_future: { element: document.getElementById('about_future'), classes: ['animate-left', 'shown'] },
    };


    const handleIntersect = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                Object.values(sections).forEach(nav => nav.classList.remove('active'));
    
                const sectionId = entry.target.id;
                sections[sectionId].classList.add('active');
            }
        });
    };
    
    const showText = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {                
                const elementKey = entry.target.id;
                const animationData = divs[elementKey];

                animationData.classes.forEach(className => animationData.element.classList.add(className));
                observer.unobserve(entry.target);
            }
        });
    };





    const observerNav = new IntersectionObserver(handleIntersect, { root: null, threshold: 0.2 });
    const observerShown = new IntersectionObserver(showText, {root : null, threshold : 0.1});

    const homeSection = document.getElementById('heading');
    const aboutSection = document.getElementById('about');
    const skillsSection = document.getElementById('skills');
    const contactSection = document.getElementById('contact');
    const skillsTable = document.querySelector('.table-skills');
    const skillsTitle = document.querySelector('.skills-title')
    const aboutEarly = document.getElementById('about_early');
    const aboutCareer = document.getElementById('about_career');
    const aboutFuture = document.getElementById('about_future');
    
    observerNav.observe(homeSection);
    observerNav.observe(aboutSection);
    observerNav.observe(skillsSection);
    observerNav.observe(contactSection);

    observerShown.observe(skillsSection);
    observerShown.observe(aboutSection);
    observerShown.observe(skillsTable);
    observerShown.observe(skillsTitle);
    observerShown.observe(aboutEarly);
    observerShown.observe(aboutCareer);
    observerShown.observe(aboutFuture);

};

export default intersectingObjects;