import EditDelivery from "./EditDelivery.js";

 function renderCards(deliveries) {
      const app = document.querySelector('.app');
      app.innerHTML = '';

      deliveries.forEach(delivery => {
        app.append(delivery.getElement());
      });
    }

    window.addEventListener('load', () => {
      const deliveries = [
        new EditDelivery('Ольга', 'ул. Вымыслов, д. 12', 8, 'delivery'),
        new EditDelivery('Дмитрий', 'ул. Задачная, д. 7', 3, 'delivered'),
        new EditDelivery('Оля', 'ул. Ткачей, д. 43', 11, 'canceled')
      ];

      renderCards(deliveries);
    });