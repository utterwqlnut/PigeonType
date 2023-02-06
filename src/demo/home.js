var username;
function verifyUser(form){
    username=form.user.value;
    console.log(form.user.value);
    document.getElementById("button").removeAttribute('hidden');
}
function findGame(form){
    console.log(username);
}