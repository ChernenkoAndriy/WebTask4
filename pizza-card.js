class PizzaCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    // Link to external stylesheet
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'pizza-card.css');
    shadow.appendChild(linkElem);

    // Wrapper div
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'pizza-card');
    shadow.appendChild(wrapper);

    // Status label
    if (this.getAttribute('status') != "") {
      const status = document.createElement('label');
      status.setAttribute('class', 'status');
      status.textContent = this.getAttribute('status');
      wrapper.appendChild(status);
    }
    
    // Image
    const img = document.createElement('img');
    img.src = this.getAttribute('img') || 'pizza.jpg';
    img.alt = 'Pizza Image';
    wrapper.appendChild(img);

    // Title
    const title = document.createElement('h1');
    title.textContent = this.getAttribute('title') || 'Імпреза';
    wrapper.appendChild(title);

    // Type label
    const typeLabel = document.createElement('label');
    typeLabel.setAttribute('class', 'type');
    typeLabel.textContent = this.getAttribute('type') || 'Meat';
    wrapper.appendChild(typeLabel);

    // Description paragraph
    const description = document.createElement('p');
    description.setAttribute('class', 'description');
    description.textContent = this.getAttribute('description') || 'Products';
    wrapper.appendChild(description);

    // Pizza details
    const pizzaDetails = document.createElement('div');
    pizzaDetails.setAttribute('class', 'pizza-details');
    wrapper.appendChild(pizzaDetails);

    // First pizza complex
    const firstComplex = document.createElement('div');
    firstComplex.setAttribute('class', 'complex');
    pizzaDetails.appendChild(firstComplex);

    // Small pizza details
    const smallNumbers = document.createElement('div');
    smallNumbers.setAttribute('class', 'numbers');
    firstComplex.appendChild(smallNumbers);

    const smallDiameter = document.createElement('label');
    smallDiameter.setAttribute('for', 'diameter');
    smallDiameter.textContent = this.getAttribute('small-diameter') || 'Ø30';
    smallNumbers.appendChild(smallDiameter);

    const smallWeight = document.createElement('label');
    smallWeight.setAttribute('for', 'weight');
    smallWeight.textContent = this.getAttribute('small-weight') || '⚖ 370';
    smallNumbers.appendChild(smallWeight);

    const smallPriceDiv = document.createElement('div');
    smallPriceDiv.setAttribute('class', 'price');
    firstComplex.appendChild(smallPriceDiv);

    const smallPrice = document.createElement('label');
    smallPrice.setAttribute('for', 'price');
    smallPrice.textContent = this.getAttribute('small-price') || '99';
    smallPriceDiv.appendChild(smallPrice);

    const smallValue = document.createElement('label');
    smallValue.setAttribute('for', 'value');
    smallValue.textContent = 'грн';
    smallPriceDiv.appendChild(smallValue);

    const smallButton = document.createElement('button');
    smallButton.setAttribute('class', 'buy-button');
    smallButton.textContent = 'Купити';
    firstComplex.appendChild(smallButton);

    // Second pizza complex
    const secondComplex = document.createElement('div');
    secondComplex.setAttribute('class', 'complex');
    pizzaDetails.appendChild(secondComplex);

    // Large pizza details
    const largeNumbers = document.createElement('div');
    largeNumbers.setAttribute('class', 'numbers');
    secondComplex.appendChild(largeNumbers);

    const largeDiameter = document.createElement('label');
    largeDiameter.setAttribute('for', 'diameter');
    largeDiameter.textContent = this.getAttribute('large-diameter') || 'Ø40';
    largeNumbers.appendChild(largeDiameter);

    const largeWeight = document.createElement('label');
    largeWeight.setAttribute('for', 'weight');
    largeWeight.textContent = this.getAttribute('large-weight') || '⚖ 660';
    largeNumbers.appendChild(largeWeight);

    const largePriceDiv = document.createElement('div');
    largePriceDiv.setAttribute('class', 'price');
    secondComplex.appendChild(largePriceDiv);

    const largePrice = document.createElement('label');
    largePrice.setAttribute('for', 'price');
    largePrice.textContent = this.getAttribute('large-price') || '169';
    largePriceDiv.appendChild(largePrice);

    const largeValue = document.createElement('label');
    largeValue.setAttribute('for', 'value');
    largeValue.textContent = 'грн';
    largePriceDiv.appendChild(largeValue);

    const largeButton = document.createElement('button');
    largeButton.setAttribute('class', 'buy-button');
    largeButton.textContent = 'Купити';
    secondComplex.appendChild(largeButton);
  }
}

customElements.define('pizza-card', PizzaCard);
