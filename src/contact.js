function contactPage(){
    const contactDiv= document.createElement('div')
    contactDiv.classList.add('contact-us')

    const heading = document.createElement('h2')
    heading.textContent= 'Contact Us'
    const address = document.createElement('p')
    address.textContent = 'P.O BOX 234 Kampala Road, Uganda'
    const phone = document.createElement('p')
    phone.textContent = '+2567856473345'

    contactDiv.appendChild(heading)
    contactDiv.appendChild(address)
    contactDiv.appendChild(phone)
    
return contactDiv;
 
}
export default contactPage