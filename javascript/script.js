document.addEventListener('DOMContentLoaded', function() {
    const device = navigator.userAgent.includes('Mobile') ? 'Mobile' : 'PC';
    console.log('Device type:', device);
    const maxPlayers = 1111;
    const currentPlayers = 1111; // Замените это значение на текущее количество игроков
    const progressBar = document.getElementById('progress-fill');
    const onlineCount = document.getElementById('online-count');
    const scrollButton = document.getElementById('scroll-button');
    const productsSection = document.getElementById('products');


    if (device === 'Mobile') {
        alert("Наш сайт лучше работает с компьютером или планшетом. Некоторые елементы интерфейса могут быть растянуты,выпирать, отображаться неккоректно, или вообще отсутствовать. Данные повреждения могут вызвать неполадки при пересчете оплаты и мы не несем отвественность за утеренные средства при использовании мобильных устройств")
    }

    const duration = 15000; // Продолжительность анимации в миллисекундах

    const easeOutQuad = (t) => {
        return t * (2 - t);
    };

    const animateProgressBar = (current, max, duration) => {
        const start = performance.now();

        const step = (timestamp) => {
            const elapsed = timestamp - start;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = easeOutQuad(progress);
            const percentage = (current / max) * 100;
            progressBar.style.width = (easeProgress * percentage) + '%';
            onlineCount.textContent = `${Math.round(easeProgress * current)} из ${max}`;

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                onlineCount.textContent = `${current} из ${max}`;
            }
        };

        requestAnimationFrame(step);
    };

    animateProgressBar(currentPlayers, maxPlayers, duration);

    scrollButton.addEventListener('click', function() {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    });

    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    const cartItems = document.getElementById('cart-items');

    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const productId = button.parentNode.parentNode.querySelector('.product-description').getAttribute('id').split('-')[1];
            const productName = button.parentNode.parentNode.querySelector('.product-description').querySelector('p').textContent;
            const productPrice = button.parentNode.parentNode.querySelector('.product-description').querySelector('p').nextSibling.textContent;

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <p>${productName}</p>
                <p>${productPrice} ₽</p>
                <button class="remove-from-cart-button">Удалить</button>
            `;

            cartItems.appendChild(cartItem);
        });
    });




});

