const navigation = () => {
    const navigation_bar = document.getElementById('navigation-bar');
    const first_section = document.getElementById('hero');
    let bottomOfFirstSection = first_section.offsetHeight;
    
    window.addEventListener('resize', () => {
        bottomOfFirstSection = first_section.offsetHeight;
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY >= bottomOfFirstSection) {
            navigation_bar.classList.add('fixed');
        } else if (window.scrollY < bottomOfFirstSection) {
            navigation_bar.classList.remove('fixed');
        } else {
            navigation_bar.classList.remove('fixed');
        }
    });
};

export default navigation;