window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('order-form');
  const product = document.getElementById('product');
  const quantity = document.getElementById('quantity');
  const result = document.getElementById('result');
  const error = document.getElementById('error');


  product.addEventListener('change', function () {
    document.getElementById('burger-select').style.display = 'none';
    document.getElementById('pizza-checkbox').style.display = 'none';

    if (product.value === '250') {
      document.getElementById('burger-select').style.display = 'block';
    } else if (product.value === '500') {
      document.getElementById('pizza-checkbox').style.display = 'block';
    }
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    error.textContent = '';
    result.textContent = '';

    const deliveryOption = document.querySelector('input[name="delivery"]:checked');
    if (!deliveryOption) {
      error.textContent = 'Выберите способ получения заказа.';
      return;
    }

    const deliveryType = deliveryOption.value;

    const qtyValue = quantity.value.trim();
    const match = qtyValue.match(/^\d+$/);
    if (match === null) {
      error.textContent = 'Ошибка: введите корректное количество (только цифры).';
      return;
    }

    const qty = parseInt(qtyValue);
    let price = parseInt(product.value);
    let optionsPrice = 0;

    if (product.value === '250') {
      optionsPrice += parseInt(document.getElementById('burger-option').value);
    }
    
    if (product.value === '500' && document.getElementById('pizza-extra').checked) {
      optionsPrice += parseInt(document.getElementById('pizza-extra').value);
    }

    let total = (price + optionsPrice) * qty;

    if (deliveryType === 'Get_to_go') {
      total *= 0.95;
    } else if (deliveryType === 'Deliver_to_home') {
      const deliveryFee = Math.max(200, total * 0.1);
      total += deliveryFee;
    }

    result.textContent = `Стоимость заказа: ${Math.round(total)} ₽`;
  });
});