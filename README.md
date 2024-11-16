Тестовое 

Реализовать приложение на Vue 2 или Nuxt 2. Макет приложения - https://www.figma.com/design/3LUWKZOeoeOMMyDsXBiemF/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%98%D0%9D%D0%94%D0%98%D0%9D%D0%A1?node-id=506-23589&node-type=section&t=5X6BEYxEbBwgzdVY-0 .
Приложение должно состоять из header, основной части и footer.
Для выполнения задания использовать https://fakestoreapi.com .

Header:
* Название магазина
* Должен включать навигацию между корзиной и главной. По умолчанию в приложении должна открываться главная страница.
* Значок корзины с индикатором количества товара в корзине. При нажатии на иконку осуществляется переход в корзину.


Основная часть состоит из 3 страниц:
1. Главная:
   * Секция с рекламой магазина.
   * На страничке должны располагаться колонки карточек с товаром.
   * Каждая карточка должна содержать кнопку 'Купить'. При нажатии на эту кнопку товар добавляется в корзину.
   * При клике по карточке открывается карточка товара.
2. Карточка товара:
   * Страница должна быть реализована в виде модального окна, которое открывается над колонками с товарами. 
   * Модальное окно должно содержать кнопку "Купить", фото и характеристики товара. При нажатии на кнопку товар добавляется в корзину.
3. Корзина
   * Страница должна отображать список товаров, добавленных в корзину.
   * Каждая строка списка должна содержать:
     * Название товара.
     * Количество (сколько раз была нажата кнопка "Купить").
     * Цена за единицу товара.
     * Общая стоимость наименования товаров (количество × цена за единицу).
     * Кнопку "Удалить", которая удаляет все товары данного наименования из корзины.
   * Внизу списка товаров должна отображаться общая стоимость всех товаров и общее количество товаров.
   * Содержит кнопку "Плачу за все!". При нажатии на эту кнопку ничего не происходит.

Footer:
* Название магазина
* Должен включать навигацию между корзиной и главной.
* Кнопка "Напиши нам". При нажатии на эту кнопку ничего не происходит.