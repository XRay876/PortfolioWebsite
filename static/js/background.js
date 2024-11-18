const background = function () {
    const colors = [
        '#d5ab00c5',
        '#d5ab00c5',
        '#d5ab00c5',
        'rgb(255, 77, 90)',
    ]

    const canvas = document.getElementById('background');
    const ctx = canvas.getContext("2d");

    canvas.width = document.body.scrollWidth;
    canvas.height = window.innerHeight;

    let windowSize = window.innerWidth;
    let amount = getAmount(windowSize);

    function getAmount(size) {
        if (size > 1600) {
            return 100;
        } else if (size > 1300) {
            return 75;
        } else if (size > 1100) {
            return 50;
        } else if (size > 800) {
            return 30;
        } else if (size > 500) {
            return 20;
        } else if (size > 300) {
            return 15;
        }
    }
    

    class Dot {

        constructor() {
            this.color = colors[Math.floor(Math.random() * colors.length)];

            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;

            this.speedx = (Math.random() - 0.5) * 1;
            this.speedy = (Math.random() - 0.5) * 1;

            this.radius = 1;

            // this.shadow = Math.floor(Math.random() * 10);
            this.shadow = 5;

        }

        animate() {
            this.x += this.speedx;
            this.y += this.speedy;

            if (this.x < 0 || this.x > canvas.width) this.speedx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedy *= -1;

            // if (Math.random() < 0.05) {
            //     this.speedx = (Math.random() - 0.5) * 1;
            //     this.speedy = (Math.random() - 0.5) * 1;
            // }
        }

        create() {
            ctx.beginPath();

            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.shadowBlur = this.shadow;
            ctx.shadowColor = this.color;

            ctx.fillStyle = this.color;

            ctx.fill();
        }

        displayPosition() {
            console.log(this.color + this.x + this.y);
            console.log(this.shadow);
        }
    }

    let dots = Array.from({length:amount},() => new Dot());

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        dots.forEach(dot => {
            dot.animate();
            dot.create();
        });

        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        
        canvas.width = document.body.scrollWidth;
        canvas.height = window.innerHeight;
        let windowSize = window.innerWidth;
        let amount = getAmount(windowSize);

       
        dots = Array.from({ length: amount }, () => new Dot());
    });
};

export default background;