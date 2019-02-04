// Business Logic for AddressBook
function AddressBook() {
  this.contacts = []
}

// This new method called addContact() takes a Contact object as
// an argument. It locates AddressBook's contacts array by calling
// this.contacts . Then, it uses push() to add the Contact provided
// as an argument to the AddressBook's contacts array property
AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
}

// Business Logic for Contacts
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

var addressBook = new AddressBook();
var contact = new Contact("Ada", "Lovelace", "503-555-0100");
var contact2 = new Contact("Grace", "Hopper", "503-555-0199");
addressBook.addContact(contact);
addressBook.addContact(contact2);

// 1. Create an AddressBook object
// 2. Create a new Contact object with a firstName of "Ada", under
// variable name contact
// 3. Create another new Contact object, this time with a firstName
// "Grace", under the variable name contact2
// 4. We add the first Contact object to our AddressBook, using
// our new addContact() method
// 5. We add the second Contact object to the AddressBook using
// the same new method

addressBook.contacts;
