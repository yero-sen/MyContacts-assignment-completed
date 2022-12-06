// My Contacts Basic

// HTML Elements
let goBtnEl = document.getElementById("go-btn");
let menuEl = document.getElementById("menu");
let outputEl = document.getElementById("output");
let contactsEl = document.getElementById("contacts");

//GLOBAL VARIABLES
let contacts = loadContacts();
displayContacts();
// Go Btn - Menu Listener
goBtnEl.addEventListener("click", goBtnHandler);

function goBtnHandler() {
  // Get Menu Selection
  let selection = menuEl.value;

  if (selection === 'display-all') {
    displayContacts();
  } else if (selection === 'add') {
    addContact();
  } else if (selection === 'remove') {
    removeContact();
  } else if (selection === 'display-name') {
    displayByName();
  } else if (selection === 'display-country') {
    displayByCountry();
  } else if (selection === "display-email") {
    findByEmail();
  }
}

// MENU FUNCTIONS
// Display all contacts in global Contacts array
function displayContacts() {
  let outputStr = '';
  for (let i = 0; i < contacts.length; i++) {
    outputStr += getContactHTMLStr(contacts[i], i);
  }
  outputEl.innerHTML = outputStr;
}

function addContact() {
  let contactName = prompt('Enter Contact Name:');
  let contactEmail = prompt('Enter Contact Email:');
  let contactNumber = prompt('Enter Contact Phone:');
  let contactCountry = prompt('Enter Contact Country:');
  contacts.push(newContact(contactName, contactEmail, contactNumber, contactCountry));
} else {
  outputEl.innerHTML = "Email already in use";
}
  // contactsEl.innerHTML = ``
  saveContacts();
  displayContacts();
  alert("Contact Added");
}


function removeContact() {
  let index = +prompt('Enter contact number');
  if (index < contacts.length) {
    // Valid Index -> Remove
    contacts.splice(index, 1);
    saveContacts();
    displayContacts();
    alert("Contact Removed");
  } else {
    alert('Invalid Contact number');
  }
}

function displayByName() {
  let Nameprompt = prompt("Please Enter a Name");
  let divSTR = "";
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].contactName.includes(Nameprompt)) {
      divSTR += getContactHTMLStr(contacts[i], i);
    }
  }
  outputEl.innerHTML = divSTR;
}


function displayByCountry() {
  let Countryprompt = prompt("Please Enter the Name of a Country");
  let divSTR = "";
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].contactCountry.includes(Countryprompt)) {
      divSTR += getContactHTMLStr(contacts[i], i);
    }
  }
  outputEl.innerHTML = divSTR;
}

function findByEmail() {
  index = 0;
  let emailprompt = prompt("Enter Email");
  for (let i = 0; i < contacts.lenght; i++) {
    if (contacts[i].contactEmail.includes(emailprompt)) {
      index++;
    }
  }
}

// Helper Functions
// - check this
function clearAll() {
  contacts = [];
  saveContacts();
  displayContacts();
  loadContacts();
}
function newContact(Name, Email, Number, Country) {
  return {
    contactName: Name,
    contactEmail: Email,
    contactNumber: Number,
    contactCountry: Country,
  };
}
// Get html for given contact - check this
function getContactHTMLStr(contact, i) {
  return `
     <div>
     <p> ${i}: ${contact.contactName}, ${contact.contactEmail}, ${contact.contactNumber}, ${contact.contactCountry}</p >
    </div >
    `;
}
// ${i}: ${contact.contacts}

// Save global contacts to local storage
function saveContacts() {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}

// Load contacts from local storage
function loadContacts() {
  let contactsStr = localStorage.getItem('contacts');
  return JSON.parse(contactsStr) ?? [];
}

function findByEmail() {
  let searchEmail = prompt("Enter Email:")
  let index = findByEmail(searchEmail);
  if (index === -1) {
    alert(`Invaild email.`)
  } else {
    alert(`email found at position ${index}.`);
  }

}
