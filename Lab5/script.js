window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('order-form');
  const product = document.getElementById('product');
  const quantity = document.getElementById('quantity');
  const result = document.getElementById('result');
  const error = document.getElementById('error');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    error.textContent = '';
    result.textContent = '';

    const qtyValue = quantity.value.trim();

    const match = qtyValue.match(/^\d+$/);
    if (match === null) {
      error.textContent = 'Ошибка: введите корректное количество (только цифры).';
      return;
    }

    const qty = parseInt(qtyValue);
    const price = parseInt(product.value);
    const total = price * qty;

    result.textContent = `Стоимость заказа: ${total} ₽`;
  });
});