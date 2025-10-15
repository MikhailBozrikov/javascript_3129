import Delivery from "./Delivery.js";

 function renderCards(deliveries) {
      const app = document.querySelector('.app');
      app.innerHTML = '';

      deliveries.forEach(delivery => {
        app.append(delivery.getElement());
      });
    }

    window.addEventListener('load', () => {
      const deliveries = [
        new Delivery('Ольга', 'ул. Вымыслов, д. 12', 8),
        new Delivery('Дмитрий', 'ул. Задачная, д. 7', 3),
        new Delivery('Оля', 'ул. Ткачей, д. 43', 11)
      ];

      renderCards(deliveries);
    });