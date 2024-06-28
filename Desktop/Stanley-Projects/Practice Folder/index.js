
const product = [{
  name: 'shirt',
  dueDate: '10-22-2024',
  age: 14,
  costCent: 1080,
  image: 'image-1.avif'
}, {
  name: 'Trouser',
  dueDate: '15-22-2024',
  age: 25,
  costCent: 2287,
  image: 'image-1.avif'
}]


function display() {
  let productsHTML = '';

product.forEach((product)=> {
   productsHTML += `
    <div class="js-first-object">
      <div class="name">${product.name}</div>
      <div class="due-date">${product.dueDate}</div>
      <div class="age">${product.age}</div>
      <div class="cost-cents">${(product.costCent / 100).toFixed(2)}</div>
      <div class="first-image">${product.image}</div>
    </div>
  `;
  console.log(productsHTML);
  
  const firstDivElement = document.querySelector('.js-first-div');

  firstDivElement.innerHTML = productsHTML;

  

})
}





  

