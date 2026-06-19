// AOS scroll animations
AOS.init({ once: true, duration: 800, offset: 80 });

// Typing effect for hero roles
(function () {
    const roles = [
        'Penetration Tester',
        'Cyber Security Researcher',
        'Bug Bounty Hunter',
        'Web & Mobile Security',
        'Vulnerability Analyst'
    ];
    const el = document.getElementById('typed-text');
    if (!el) return;

    let roleIndex = 0, charIndex = 0, deleting = false;

    function tick() {
        const current = roles[roleIndex];
        el.textContent = current.substring(0, charIndex);

        if (!deleting && charIndex < current.length) {
            charIndex++;
            setTimeout(tick, 70);
        } else if (deleting && charIndex > 0) {
            charIndex--;
            setTimeout(tick, 35);
        } else if (!deleting && charIndex === current.length) {
            deleting = true;
            setTimeout(tick, 1600);
        } else {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(tick, 350);
        }
    }
    tick();
})();

// Active nav link on scroll
(function () {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar .nav-link');

    function onScroll() {
        let current = '';
        const offset = window.scrollY + 140;
        sections.forEach(sec => {
            if (offset >= sec.offsetTop) current = sec.getAttribute('id');
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
})();

// Collapse mobile menu after clicking a link
(function () {
    const collapse = document.getElementById('navbarSupportedContent');
    if (!collapse) return;
    collapse.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (collapse.classList.contains('show')) {
                new bootstrap.Collapse(collapse).hide();
            }
        });
    });
})();
