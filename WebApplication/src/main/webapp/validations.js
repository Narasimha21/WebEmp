/**
 * 
 */

function checkForm() {
	var username = document.getElementById("uId").value;
	var password = document.getElementById("pwd").value;
	var cpassword = document.getElementById("cpwd").value;
	var fName = document.getElementById("fId").value;
	var LName = document.getElementById("lId").value;
	var fullName = document.getElementById("fullId");
	var email = document.getElementById("eId").value;
	if (username == "") {
		alert('Error: Username cannot be blank!');

		return;
	}
	re = /^\w+$/;
	if (!re.test(username)) {
		alert("Error: Username must contain only letters, numbers and underscores!");

		return false;
	}
	if (password == "") {
		alert('Error: password cannot be blank!');

		return;
	}
	if (password != "") {

		if (!(checkPassword(password))) {

			alert("The password you have entered is not valid!");

			return false;
		}
	}
	if (password != cpassword) {

		alert("Error: Please check that you've entered and confirmed the same password!");
		return false;
	}
	
	if (fName == "" || fName.length < 8) {
		alert("First Name must be at least 8 characters long.");
		return false;
	}
	if (LName == "") {
		alert('Error: Last Name cannot be blank!');
		return;
	}
	fullName.innerHTML = (fName + LName);
	if (email != "") {
		return validateemail(email);

	}
	document.getElementById("loginId").submit();
}

function checkPassword(password) {
	console.log(password);
	var re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{10,16}$/;

	return re.test(password);
}

function resetForm() {
	var frm_elements = login.elements;
	for (i = 0; i < frm_elements.length; i++) {
		frm_elements[i].value = "";
	}

}

function validateemail(email) {

	var atposition = email.indexOf("@");
	var dotposition = email.lastIndexOf(".");
	if (atposition < 1 || dotposition < atposition + 2
			|| dotposition + 2 >= email.length) {
		alert("Please enter a valid e-mail address");
		return false;
	}
	return true;
}
