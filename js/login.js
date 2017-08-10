function checkUsername(minLength)
{
    var elUsername = document.getElementById('username');
    var elMsg = document.getElementById('feedback');
    if(elUsername.value.length < minLength)
    {
        elMsg.textContent = 'Username must be 5 characters or more';
    }
    else
    {
        elMsg.textContent = '';
    }
}

var elUsername = document.getElementById('username');
elUsername.addEventListener('blur', 
function()
{
    checkUsername(5);
}
, false);
