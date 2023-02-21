const menuPage = () => {

    const menuDiv= document.createElement('div')
    menuDiv.classList.add('menu')

    const heading = document.createElement('h2')
    heading.textContent= 'Our Menu'

    const food1 = document.createElement('div')
    food1.classList.add('card')
    const title = document.createElement('h5')
    title.classList.add('card-text')
    title.textContent = 'Grilled chicken'
    const image = document.createElement('img');
    image.classList.add('image1')
    image.src = './img/wings.jpg';
    image.alt = 'Restaurant Image';
    food1.appendChild(title)
    food1.appendChild(image)
    

    const food2 = document.createElement('div')
    food2.classList.add('card')
    const title2 = document.createElement('h5')
    title2.classList.add('card-text')
    title2.textContent = 'Beef Burger'
    const image2 = document.createElement('img');
    image2.classList.add('image1')
    image2.src = './img/burger.jpg';
    image2.alt = 'Restaurant Image';
    food2.appendChild(title2)
    food2.appendChild(image2)

    const food3 = document.createElement('div')
    food3.classList.add('card')
    const title3 = document.createElement('h5')
    title3.classList.add('card-text')
    title3.textContent = 'Steak'
    const image3 = document.createElement('img');
    image3.classList.add('image1')
    image3.src = './img/steak.jpg';
    image3.alt = 'Restaurant Image';
    food3.appendChild(title3)
    food3.appendChild(image3)

    menuDiv.appendChild(heading)
    menuDiv.appendChild(food1)
    menuDiv.appendChild(food2)
    menuDiv.appendChild(food3)
    //menuDiv.appendChild(food4)

return menuDiv;

}
export default menuPage