let navbarelement = document.querySelector('.allitems')
let menuelement = document.querySelector('.menu-icon');

let herfelement = document.querySelectorAll('.allitems .home');
menuelement.onclick = () => {
    console.log('clicked');
    console.log(navbarelement);
    navbarelement.classList.toggle('active');
}

function myfunction(index, items) {
    console.log('items:', items, 'index', index);
    index.onclick = () => {
        navbarelement.classList.toggle('active');
    };

}
herfelement.forEach(myfunction);