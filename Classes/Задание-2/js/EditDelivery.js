import Delivery from "./Delivery.js";

export default class EditDelivery extends Delivery {
  constructor(name, address, distance, status = 'delivery') {
    super(name, address, distance);
    this._status = status;
    this.statusEl = null;
  }

  getElement() {
    super.getElement();
    this.addEditButton();
    this.applyStatusStyle();

    return this.card;
  }

  addEditButton() {
    const editButton = document.createElement('button');
    editButton.classList.add('card__edit-btn');
    editButton.textContent = 'Изменить';

    editButton.addEventListener('click', () => this.openEditModal());
    this.card.append(editButton);
  }

  applyStatusStyle() {
    this.card.classList.add(this._status);
  }

  openEditModal() {
    const modalWrapper = document.createElement('div');
    modalWrapper.classList.add('modal-wrapper');
    modalWrapper.innerHTML = this.getModalHTML();

    this.setupModalEvents(modalWrapper);
    document.body.append(modalWrapper);
  }

  getModalHTML() {
    return `
      <div class="modal">
        <button class="modal__close-btn" type="button">
          <span class="close-icon">&times;</span>
        </button>
        <h2 class="modal__title">Изменить</h2>
        <form class="form">
          <div class="form-group">
            <label class="form-label" for="name">Имя:</label>
            <input class="form-input name-input" type="text" name="name" value="${this.name}">
          </div>
          <div class="form-group">
            <label class="form-label" for="address">Адрес:</label>
            <input class="form-input address-input" type="text" name="address" value="${this.address}">
          </div>
          <div class="form-group">
            <label class="form-label" for="distance">Расстояние (км):</label>
            <input class="form-input distance-input" type="number" name="distance" value="${this.distance}">
          </div>
          <div class="form-group">
            <label class="form-label" for="status">Статус:</label>
            <select class="form-select status-select" name="status">
              <option value="delivery" ${this._status === 'delivery' ? 'selected' : ''}>Доставляется</option>
              <option value="delivered" ${this._status === 'delivered' ? 'selected' : ''}>Доставлен</option>
              <option value="canceled" ${this._status === 'canceled' ? 'selected' : ''}>Отменён</option>
            </select>
          </div>
          <button class="form-submit" type="submit">Сохранить</button>
        </form>
      </div>
    `;
  }

  setupModalEvents(modalWrapper) {
    const closeButton = modalWrapper.querySelector('.modal__close-btn');
    const form = modalWrapper.querySelector('.form');
    const nameInput = modalWrapper.querySelector('.name-input');
    const addressInput = modalWrapper.querySelector('.address-input');
    const distanceInput = modalWrapper.querySelector('.distance-input');
    const statusSelect = modalWrapper.querySelector('.status-select');

    closeButton.addEventListener('click', () => modalWrapper.remove());

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      this.updateDeliveryData(nameInput.value, addressInput.value, distanceInput.value, statusSelect.value);
      modalWrapper.remove();
    });
  }

  updateDeliveryData(name, address, distance, status) {
    this.name = name;
    this.address = address;
    this.distance = parseInt(distance);
    this.status = status;
  }

  set status(value) {
    this._status = value;

    if (this.card) {
      this.card.classList.remove('delivery', 'delivered', 'canceled');
      this.card.classList.add(this._status);
    }
  }

  get status() {
    return this._status;
  }
}