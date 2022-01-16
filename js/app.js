const handMenu =  document.querySelector('.bars');
const closeMenu =  document.querySelector('.close');
const menu_item = document.querySelector('.menu_item');

handMenu.addEventListener('click', () =>{
    menu_item.classList.add('active');
})

closeMenu.addEventListener('click', () =>{
    menu_item.classList.remove('active');
})