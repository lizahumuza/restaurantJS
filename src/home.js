import contactPage from './contact';
import menuPage from './menu';

const homePage = () => {
    const content = document.getElementById('content');

    const h1 = document.createElement('h1')
    h1.classList.add('h1')
    h1.textContent = "ESME'S UPTOWN DINNER";
    content.appendChild(h1)

    const ul = document.createElement('ul')
    ul.classList.add('ul')
    content.appendChild(ul)

    const home = document.createElement('button')
    home.textContent="HOME"
    home.classList.add('butt')
    const menu = document.createElement('button')
    menu.textContent="MENU"
    menu.classList.add('butt')
    const contact = document.createElement('button')
    contact.textContent="CONTACT"
    contact.classList.add('butt')
   

   ul.appendChild(home)
   ul.appendChild(menu)
   ul.appendChild(contact)

   menu.addEventListener('click', () => {
        content.innerHTML = '';
        content.appendChild(h1)
        content.appendChild(ul)
        content.appendChild(menuPage());   
    });

    contact.addEventListener('click', () => {
        content.innerHTML = '';
        content.appendChild(h1)
        content.appendChild(ul)
        content.appendChild(contactPage());
    });

    home.addEventListener('click', () => {
        content.innerHTML = '';
        //content.appendChild(ul)
        content.appendChild(homePage());
    });

    const image = document.createElement('img')
    image.classList.add('img')
    image.setAttribute ('src', './img/dinner.jpg')
    image.setAttribute('alt', 'This is an Image')
    content.appendChild (image)

    const p = document.createElement('p')
    p.classList.add('p')
    p.textContent ="The Best Dinner with all your favorite dishes and drinks. we hire the best chefs so be rest assured of the tastiest meals that you probaly have never tasted before. We are open 24/7"
    content.appendChild (p)

    
}

export default homePage;