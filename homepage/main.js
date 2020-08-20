const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    const navigation = document.querySelector('.header__navigation');
    navigation.classList.toggle('show');
});