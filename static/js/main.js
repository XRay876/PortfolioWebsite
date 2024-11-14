document.addEventListener("DOMContentLoaded", () => {

    window.onload = () => {
        document.querySelector('.hero').classList.add('shown');
        document.querySelector('#model-container').classList.add('shown');

        let arg = document.querySelector('.greeting-line-3').innerHTML;
        document.querySelector('.greeting-line-3').innerHTML = '';
        
        setTimeout(() => {
            let letterTimeout = 80;
            let text = '';
            let i = 1;
        
            function typeText() {
                if (i <= 11) {  
                    text = arg.substr(0, i);
                    text = text.replace('e', 'E');
                    text = text.replace('t', 'R');
                    document.querySelector('.greeting-line-3').innerHTML = text + ")";
                    i++;
                    setTimeout(typeText, letterTimeout);
                } else {
                    setTimeout(removeText, 1000); 
                }
            }
        
            function removeText() {
                let j = text.length;
                function erase() {
                    if (j > 3) {  
                        text = text.slice(0, -1);
                        document.querySelector('.greeting-line-3').innerHTML = text + ")";
                        j--;
                        setTimeout(erase, 40);
                    } else {
                        setTimeout(finalText, 1000); 
                    }
                }
                erase();
            }
        
            function finalText() {
                let k = 7;
                function addFinalText() {
                    if (k <= arg.length - 1) {
                        text = arg.substr(0, k);
                        document.querySelector('.greeting-line-3').innerHTML = text + ")";
                        k++;
                        setTimeout(addFinalText, letterTimeout);
                    }
                }
                addFinalText();
            }
        
            typeText();

        }, 1000);
    };



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
        skills_title: { element: document.querySelector('.skills-title'), classes: ['animate-right', 'shown'] }
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
    const observerShown = new IntersectionObserver(showText, {root : null, threshold : 0.2});

    const homeSection = document.getElementById('heading');
    const aboutSection = document.getElementById('about');
    const skillsSection = document.getElementById('skills');
    const contactSection = document.getElementById('contact');
    const skillsTable = document.querySelector('.table-skills');
    const skillsTitle = document.querySelector('.skills-title')
    
    observerNav.observe(homeSection);
    observerNav.observe(aboutSection);
    observerNav.observe(skillsSection);
    observerNav.observe(contactSection);

    observerShown.observe(skillsSection);
    observerShown.observe(aboutSection);
    observerShown.observe(skillsTable);
    observerShown.observe(skillsTitle);



    
});