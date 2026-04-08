


class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.applyTheme();
    }

    applyTheme() {

        if (this.currentTheme === 'dark') {
            document.body.style.filter = 'brightness(0.9) contrast(1.1)';
        } else {
            document.body.style.filter = 'none';
        }
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';

        localStorage.setItem('theme', this.currentTheme);
        this.applyTheme();
    }
}

const themeApp = new ThemeManager();


const loginBtn = document.querySelector('.btn-login');

const cards = document.querySelectorAll('.feature-card');
const header = document.querySelector('.header');


loginBtn.onclick = (e) => {
    e.preventDefault();
    themeApp.toggleTheme();
    alert(`Theme changed to: ${themeApp.currentTheme}`);
};


for (let i = 0; i < cards.length; i++) {
    cards[i].onclick = function () {
        this.style.borderColor = '#f48c06';
        this.style.borderStyle = 'solid';
        this.style.borderWidth = '2px';
        console.log(`Clicked on card: ${i + 1}`);
    };
}


const heroImg = document.querySelector('.main-img');
window.onmousemove = (e) => {
    if (heroImg) {
        const x = (e.clientX / window.innerWidth) * 20;
        const y = (e.clientY / window.innerHeight) * 20;
        heroImg.style.transform = `translate(${x}px, ${y}px)`;
    }
};


const joinBtn = document.querySelector('.btn-join');
joinBtn.onmousemove = (e) => {
    const rect = joinBtn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    joinBtn.style.background = `rgba(255, 255, 255, ${0.3 + x / 500})`;
};


window.onscroll = () => {

    if (window.scrollY > 50) {
        header.style.background = '#2f327d';
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
    } else {
        header.style.background = 'transparent';
        header.style.boxShadow = 'none';
    }


    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    console.log(`Scrolled: ${Math.round(scrolled)}%`);
};


if (!sessionStorage.getItem('visitStart')) {
    sessionStorage.setItem('visitStart', Date.now().toString());
}