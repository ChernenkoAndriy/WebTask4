class SidePizzaCard extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      const linkElem = document.createElement('link');
      linkElem.setAttribute('rel', 'stylesheet');
      linkElem.setAttribute('href', 'sidepizza.css');
      shadow.appendChild(linkElem);

      // Extracting attributes
      const name = this.getAttribute('name') || 'Назва піци';
      const size = this.getAttribute('size') || 'розмір';
      const diameter = this.getAttribute('diameter') || 'Ø30';
      const weight = this.getAttribute('weight') || '⚖370';
      const price = this.getAttribute('price') || '99';
      const imageUrl = this.getAttribute('image-url') || 'default.jpg';

      // Wrapper div for side pizza
      const wrapper = document.createElement('div');
      wrapper.classList.add('sidepizza');
      
      // Side text container
      const sideText = document.createElement('div');
      sideText.classList.add('sidetxt');
      
      // Pizza name
      const pizzaName = document.createElement('h6');
      pizzaName.classList.add('sidename');
      pizzaName.textContent = `${name} (${size})`;
      sideText.appendChild(pizzaName);
      
      // Side numbers container
      const sideNumbers = document.createElement('div');
      sideNumbers.classList.add('sidenumbers');
      
      // Side complex details
      const sideComplex = document.createElement('div');
      sideComplex.classList.add('sidecomplex');
      
      // Diameter label
      const diameterLabel = document.createElement('label');
      diameterLabel.textContent = diameter;
      sideComplex.appendChild(diameterLabel);
      
      // Weight label
      const weightLabel = document.createElement('label');
      weightLabel.textContent = weight;
      sideComplex.appendChild(weightLabel);
      
      sideNumbers.appendChild(sideComplex);
      
      // Side bottom container
      const sideBottom = document.createElement('div');
      sideBottom.classList.add('sidebottom');
      
      // Price container
      const priceDiv = document.createElement('div');
      priceDiv.classList.add('sideprice');
      
      // Price label
      const priceLabel = document.createElement('label');
      priceLabel.textContent = price;
      priceDiv.appendChild(priceLabel);
      
      // Currency label
      const currencyLabel = document.createElement('label');
      currencyLabel.textContent = 'грн';
      priceDiv.appendChild(currencyLabel);
      
      sideBottom.appendChild(priceDiv);
      
      // Buttons container
      const buttonsDiv = document.createElement('div');
      buttonsDiv.classList.add('sidebuttons');
      
      // Minus button
      const minusButton = document.createElement('button');
      minusButton.classList.add('minusbutton');
      minusButton.textContent = '-';
      
      // Quantity label
      const quantityLabel = document.createElement('label');
      quantityLabel.textContent = '1';
      
      // Plus button
      const plusButton = document.createElement('button');
      plusButton.classList.add('plusbutton');
      plusButton.textContent = '+';
      
      // Cancel button
      const cancelButton = document.createElement('button');
      cancelButton.classList.add('cancelbutton');
      cancelButton.textContent = '✕';
      
      buttonsDiv.appendChild(minusButton);
      buttonsDiv.appendChild(quantityLabel);
      buttonsDiv.appendChild(plusButton);
      buttonsDiv.appendChild(cancelButton);
      
      sideBottom.appendChild(buttonsDiv);
      sideNumbers.appendChild(sideBottom);
      sideText.appendChild(sideNumbers);
      wrapper.appendChild(sideText);
      
      // Create container for the image
      const imageContainer = document.createElement('div');
      imageContainer.classList.add('image-container');

      // Create and append the image element using the provided image URL
      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = 'Pizza Image';
      imageContainer.appendChild(img);
      wrapper.appendChild(imageContainer);
      
      shadow.appendChild(wrapper);
    }
  }

  customElements.define('side-pizza-card', SidePizzaCard);