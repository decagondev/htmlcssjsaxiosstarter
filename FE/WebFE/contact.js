const container = document.querySelector(".wrapper");
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');


window.onload = function(evt) {
    /*
        PHASE 4: lets to a axios get request...
        you can follow the getting started guide on the axios docs site to help figure out what top put here...
        to get you started the url endpoint will be "http://localhost:8080/contacts/" + id

        and you will want to pass the res.data on to the populateContact() function instead of the staticContent...
    */
    const staticContact = {
        id: 1,
        name: "Tom Tarpey",
        email: "tom@tom.com",
        address: "321 Hurlingham Road. Birmingham. West Midlands. B44 0PL.",
        avatar: "tom.png",
        phone_numbers: [
            "01214546678",
            "07986545678"
        ]
    }

    axios.get('http://localhost:8080/contacts/' + id)
    .then(function (response) {
      // handle success
      console.log(response);
      populateContact(response.data);
    })

    // populateContact(staticContact);
  }

function populateContact(contact) {
    const contactDiv = document.createElement("div");
    const phoneDiv = document.createElement("div");
    const img = document.createElement("img");
    const nameH2 = document.createElement("h2");
    const phoneH2 = document.createElement("h2");
    const phoneText = document.createTextNode("Phone Numbers");
    const linkText = document.createTextNode("Back");
    const nameText = document.createTextNode(contact.name);
    const emailText = document.createTextNode(contact.email);
    const addressText = document.createTextNode(contact.address);
    const emailP = document.createElement("p");
    const addressP = document.createElement("p");
    const ul = document.createElement("ul");
    const backLink = document.createElement("a");
    const phoneNums = [...contact.phone_numbers];

    
    for (let i = 0; i < phoneNums.length; i++) {
            let li = document.createElement("li");
            let text = document.createTextNode(phoneNums[i]);
            
            li.appendChild(text);
            ul.appendChild(li);
        }
        
        phoneH2.appendChild(phoneText);
        phoneDiv.appendChild(ul);
        
        emailP.appendChild(emailText);
        addressP.appendChild(addressText);
        
        nameH2.appendChild(nameText);
        backLink.appendChild(linkText);
        
        img.setAttribute("src", contact.avatar);
        backLink.setAttribute("href", "index.html");
        
        contactDiv.setAttribute("class", "item contact-card");
        img.setAttribute("class", "ui image");
        nameH2.setAttribute("class", "header");
        emailP.setAttribute("class", "description");
        addressP.setAttribute("class", "description");
        
        /*
            PHASE 3: fill in some logic for the populate contact...
            HERE is the pseudocode for the logic...
    
            append the img as a child of contactDiv
            append the nameH2 as a child of contactDiv
            append the addressP as a child of contactDiv
            append the emailP as a child of contactDiv
            append the phoneDiv as a child of contactDiv
            append the backLink as a child of contactDiv
    
            append the contactDiv as a child of container        
        */
            contactDiv.appendChild(img);
            contactDiv.appendChild(nameH2);
            contactDiv.appendChild(addressP);
            contactDiv.appendChild(emailP);
            contactDiv.appendChild(phoneDiv);
            contactDiv.appendChild(backLink);

            container.appendChild(contactDiv);

    }
    