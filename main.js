const glow = document.querySelector(".cursor-glow");
let mx = innerWidth / 2,
    my = innerHeight / 2,
    gx = mx,
    gy = my;
if (glow && matchMedia("(hover:hover) and (pointer:fine)").matches) {
    document.body.classList.add("cursor-ready");
    addEventListener("mousemove", e => {
        mx = e.clientX;
        my = e.clientY
    });

    function follow() {
        gx += (mx - gx) * .14;
        gy += (my - gy) * .14;
        glow.style.left = `${gx}px`;
        glow.style.top = `${gy}px`;
        requestAnimationFrame(follow)
    }
    follow()
}
const items = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target)
        }
    }), {
        threshold: .12
    });
    items.forEach((el, i) => {
        el.style.transitionDelay = `${i%4*80}ms`;
        observer.observe(el)
    })
} else items.forEach(el => el.classList.add("is-visible"));
const toggle = document.querySelector(".menu-toggle"),
    nav = document.querySelector(".nav");
if (toggle && nav) {
    toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(open));
        toggle.textContent = open ? "닫기 －" : "메뉴 ＋"
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "메뉴 ＋"
    }))
}


const navLinks = document.querySelectorAll(".site-header .nav a");

navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
        link.classList.add("nav-glow");
    });

    link.addEventListener("mouseleave", () => {
        link.classList.remove("nav-glow");
    });
});
