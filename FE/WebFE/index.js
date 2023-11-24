const contactForm = document.querySelector("#contact-form");
const contactList = document.querySelector("#contacts");

const staticData = [
  {
    id: "1",
    name: "Tom Tarpey",
    email: "tom@tom.com",
    address: "123 Kins Square",
    avatar: "tom.png",
    phone_numbers: ["01213455667", "555 6766 676", "07567654567"]
  },
  {
    id: "2",
    name: "Joe Smith",
    email: "joe@joe.com",
    address: "300 Sloth Square",
    avatar: "joe.png",
    phone_numbers: ["01213434567", "01513456543", "07324222567"]
  },
  {
    id: "3",
    name: "Bob Jones",
    email: "bob@bob.com",
    address: "11 This Street",
    avatar: "bob.png",
    phone_numbers: ["01613452234", "08001234567", "07564454567"]
  }
]

contactForm.onsubmit = async function(evt) {
  evt.preventDefault();
  const name = document.querySelector("#contactName").value;
  const email = document.querySelector("#contactEmail").value;
  const address = document.querySelector("#contactAddress").value;
  const avatar = document.querySelector("#contactAvatar").value;

  let pns = document.querySelector("#contactNumbers").value;
  pns = pns.split(",");
  for (let i = 0; i < pns.length; i++) {
    pns[i] = pns[i].trim();
  }

  console.log(pns);

  const newContact = {
    "name": name,
    "email": email,
    "address": address,
    "avatar": avatar,
    "phone_numbers": pns
  }
  /*
    PHASE 4: lets do a Axios POST request here passing the new contact to the endpoint of http://localhost:8080/contacts/"
    You will need to reload the page programattcally to show the new data on the page after posting it to the endpoint...
    HINT: a "window.location.reload()" will do that for you!
  */
    axios.post('http://localhost:8080/contacts/', newContact)
    .then(function (response) {
      // handle success
      console.log(response);
      window.location.reload();
    })
}

window.onload = async function(evt) {
  evt.preventDefault();
  /*
    PHASE 4: Let's add an Axios GET request here to get the data to pass in to populateContactLists() function...
  */
    axios.get('http://localhost:8080/contacts/')
    .then(function (response) {
      // handle success
      console.log(response);
      populateContactlists(response.data);
    })
  // populateContactlists(staticData);

}


function populateContactlists(contactData) {

  for (let contact of contactData) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    let text = document.createTextNode(contact.name);

    a.setAttribute('href', `./contact.html?id=${contact.id}`);

    /*
      PHASE 3: fill in a few lines of code to complete the populateContactlists functions logic...
      - append the text as a child of the a tag
      - append the a tag as a child of the li tag
      - append the li tag as a child of the contactList
    */
   a.appendChild(text);
   li.appendChild(a);
   contactList.appendChild(li);
  }
}


