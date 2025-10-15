import EditDelivery from "./EditDelivery.js";

let deliveries = [];

function renderCards(deliveriesArray) {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  deliveriesArray.forEach(delivery => {
    app.append(delivery.getElement());
  });
}

function displayTotalDistance() {
  const totalResult = document.getElementById('totalResult');

  const totalDistance = EditDelivery.getTotalDistance(deliveries);

  totalResult.textContent = `Общее расстояние: ${totalDistance} км`;
  totalResult.style.display = 'block';
}

window.addEventListener('load', () => {
  deliveries = [
    new EditDelivery('Ольга', 'ул. Вымыслов, д. 12', 8, 'delivery'),
    new EditDelivery('Дмитрий', 'ул. Задачная, д. 7', 3, 'delivered'),
    new EditDelivery('Оля', 'ул. Ткачей, д. 43', 11, 'canceled')
  ];

  renderCards(deliveries);

  const calculateButton = document.getElementById('calculateTotal');
  calculateButton.addEventListener('click', displayTotalDistance);
});