var firstName, lastName, email, phoneNumber, company; // = document.getElementById("firstname").value;


inputCheck = function() {
    firstName = document.getElementById("firstname").value;
    // console.log(firstName);
    lastName = document.getElementById("lastname").value;
    email = document.getElementById("email").value;
    phoneNumber = document.getElementById("phone_number").value;
    company = document.getElementById("company").value;

    if(firstName.length < 1) {
        alert("Please enter a first name");
        return false;
    }
    if(lastName.length < 1) {
        alert("Please enter a last name");
        return false;
    }
    if(email.length < 1) {
        alert("Please enter an email");
        return false;
    }
    if(phoneNumber.length < 1) {
        alert("Please enter a phone number");
        return false;
    }
    // if(company.length < 1) {
    //     alert("Please enter a company");
    //     return false;
    // }

    console.log(`${firstName} ${lastName} would like you to reach out to them. They can be reached at ${email} or ${phoneNumber}. They are reaching out on behalf of ${company}.`);
};


document.getElementById("submit").addEventListener("click", inputCheck);
// console.log(firstName);


