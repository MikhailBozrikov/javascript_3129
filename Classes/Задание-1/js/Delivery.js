export default class Delivery {

  constructor(name, address, distance) {
    this._name = name;
    this._address = address;
    this._distance = distance;
    this.card = null;
    this.nameEl = null;
    this.addressEl = null;
    this.distanceEl = null;
  }

  getElement() {
    this.card = document.createElement('div');
    this.card.classList.add('card');

    this.card.innerHTML = this.getCardHTML();

    this.cacheElements();
    return this.card;
  }

  getCardHTML() {
    return `
      <h3 class="card__title">Имя</h3>
      <p class="card__text card__name">${this._name}</p>
      <h3 class="card__title">Адрес</h3>
      <p class="card__text card__address">${this._address}</p>
      <h3 class="card__title">Расстояние</h3>
      <p class="card__text card__distance">${this._distance} км</p>
    `;
  }

  cacheElements() {
    this.nameEl = this.card.querySelector('.card__name');
    this.addressEl = this.card.querySelector('.card__address');
    this.distanceEl = this.card.querySelector('.card__distance');
  }

  set name(value) {
    this._name = value;
    if (this.nameEl) {
      this.nameEl.textContent = this._name;
    }
  }

  get name() {
    return this._name;
  }

  set address(value) {
    this._address = value;
    if (this.addressEl) {
      this.addressEl.textContent = this._address;
    }
  }

  get address() {
    return this._address;
  }

  set distance(value) {
    this._distance = value;
    if (this.distanceEl) {
      this.distanceEl.textContent = `${this._distance} км`;
    }
  }

  get distance() {
    return this._distance;
  }
}














