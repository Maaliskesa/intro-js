var registeredUsers = []; // this array stores valid usernames until the next pageload

function validateForm(e){
    e.preventDefault(); // stop the submit button from refreshing the page
    console.log('validating....');

    console.log('user name: ' + validateUsername());
    console.log('email: ' + validateEmail());
    console.log('password: ' + validatePassword());
    console.log('first name: ' + validateFirstName()); 
    console.log('last name: ' + validateLastName());
    console.log('phone number: ' + validatePhoneNumber());

    if (validateUsername()
        && validateEmail()
        && validatePassword()
        && validateFirstName()
        && validateLastName()
        && validatePhoneNumber()) {
        var _newUser = {
            username: get('username'),
            firstname: get('firstName'),
            lastname: get('lastName'),
            phone: get('phoneNumber'),
            email: get('email'),
            pass: get('password'),
        };  
        // add code to update registeredUsers array with new user and call render function
        // TODO
        registeredUsers.push(_newUser);
        renderRegisteredUsers();
        if (registeredUsers.length > 4) {
            registeredUsers.shift();
        }
        document.registration.reset(); // reset form input fields
    }
}

function renderRegisteredUsers() {
    document.getElementById('registered-users').innerHTML = '';
    registeredUsers.forEach(function(registeredUser){
        var _newUser = document.createElement('li'); 
        _newUser.innerHTML = registeredUser.username + ', '
            + registeredUser.firstname + ', '
            + registeredUser.lastname + ', '
            + registeredUser.phone + ', '
            + registeredUser.email;
        document.getElementById('registered-users').appendChild(_newUser);
    });
}

/**
 * this function supposely validates submitted username
 * @returns [Boolean] true when valid, false otherwise
 */
function validateUsername(){
    var _userName = get('username');
    
    return !checkSpace(_userName);
}

// validate submitted first name
function validateFirstName() {
    var _firstName = get('firstName');

    return _firstName;
}

// validate submitted last name
function validateLastName() {
    var _lastName = get('lastName');

    return _lastName;
}

// validate submitted phone number
function validatePhoneNumber() {
    var _phoneNumber = get('phoneNumber');

    if (isNaN(_phoneNumber)) {
        return false;
    }

    if (_phoneNumber.length < 6) {
        return false;
    }

    var atPlusSign = _phoneNumber.indexOf('+');
    if (atPlusSign > -1) {
        return false;
    }
    
    return _phoneNumber;
}

/**
 * this function supposely validates submitted email
 * @returns [Boolean] true when valid, false otherwise
 */
function validateEmail(){
    var _email = get('email');

    if (checkSpace(_email) === true) {
        return false;
    }

    // check for @
    var atSymbol = _email.indexOf('@');
    if(atSymbol < 1) {
        return false;
    }

    // check if there is a dot located less than 2 symbols away from the @ sign
    var dot = _email.indexOf('.');
    if(dot <= atSymbol + 2) {
        return false;
    } 

    // check that the dot is not at the end
    if (dot === _email.length - 1){
        return false;
    } 

    return true;
}

/**
 * this function supposely validates submitted password
 * if password and confirmPassword do not match, return false 
 * 
 * @returns [Boolean] true when valid, false otherwise
 */
function validatePassword() {
    var _password = get('password');
    var _confirmPassword = get('password_confirm');

    if (_password !== _confirmPassword) {
        return false;
    }
    // check that the password is more than eight characters
    if (_password.length < 8) {
        return false;
    }
    
    // check that the password has at least a number and a capital letter*/
   
    var capital = _password.search(/[A-Z]/);
    var number = _password.search(/[0-9]/);
        
    if (capital == -1) {
        return false;
    }

    if (number == -1) {
        return false;
    }

    return true;
}

/**
 * this function supposely checks whether the sample is an empty string
 * or there is space within it
 * @param [String] sample text to be evaluated
 * @returns [Boolean] true when valid, false otherwise
 */
function checkSpace(sample) {
    return sample === '' || sample.indexOf(' ') > -1;
}

/**
 * this function looks under the form with name "registration"
 * look under the "username" input field and returns the value of it
 * returns nothing if no value is found
 * 
 * @returns [Boolean] true when valid, false otherwise
 */

function get(param) {
    var _value = document.registration[param].value;
    return typeof(_value) === 'undefined' ? ' ' : _value;
}

