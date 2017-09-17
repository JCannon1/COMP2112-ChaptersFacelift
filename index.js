let heading = document.querySelector(`.item-page__main-title`);
heading.textContent = `Pizza`;

let bookcover = document.querySelector(`.product-image__image--single`);
bookcover.src = "https://media.timeout.com/images/103315998/710/399/image.jpg";

let mynav = [ `This`, `pizza`, `is`, `the`, `best`, `in`, `the`, `entire`, `universe`, `favourite`];
let chaptersnav = document.querySelectorAll(`.top-nav__list-link`);
chaptersnav = document.querySelectorAll(`[class^=top-nav__list-link]`);
chaptersnav = Array.from(document.querySelectorAll(`[class^=top-nav__list-link]`));
chaptersnav.map( (navitem, idx) => navitem.textContent = mynav[idx]);

let logo = document.querySelector(`[data-a8n=indigo-logo]`);
let ownEl = document.createElement(`img`);
ownEl.src = "https://i.pinimg.com/originals/d6/50/f8/d650f8c8a92e297c6086af1bb3c4e737.jpg"
let oldEl = document.querySelector(`[data-a8n=indigo-logo] svg`);
logo.replaceChild(ownEl, oldEl);

let food = { 'price' : '$5', 'weight' : '2kg', 'location' : 'aisle 4'};
let some_html = `
<ul>
<li>text</li>
<li>text2</li>
<li>text3</li>
</ul>
`;
let sec = document.getElementById(`item-page__item-purchase-container`);
sec.innerHTML = some_html;
function render(obj) {
let some_html = `
<ul>
<li>${obj.price}</li>
<li>${obj.weight}</li>
<li>${obj.location}</li>
</ul>
`;
return some_html;
}
render(food)
sec.innerHTML = render(food);
food = [{ 'price' : '$5', 'weight' : '2kg', 'location' : 'aisle 4'},
{ 'price' : '$4', 'weight' : '2kg', 'location' : 'aisle 18'}
];
render(food[1]);
sec.innerHTML = render(food[1]);
sec.innerHTML = render(food[0]);

let link = document.querySelector(`.item-contributor__link`);
link.src ="www.georgiancollege.ca";
link.setAttribute('href', 'www.georgiancollege.ca');

let btn = document.getElementById(`add-to-cart-button`);
btn.addEventListener(`click`, function() {
   document.documentElement.innerHTML = ' '; 
});
