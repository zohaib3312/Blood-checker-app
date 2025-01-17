
let username = document.getElementById('username').value;
let userage = document.getElementById('age').value;
let usergender = document.getElementById('gender').value;
let userBloodGroup = document.getElementById('bloodgroup').value;

if (username === '' || userage === '' || usergender === '' || userBloodGroup === '') {
    alert('Please fill all the fields');
}


function