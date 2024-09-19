
document.getElementById('button-login').addEventListener('click', function(event){
   
   event.preventDefault();
   
   
    console.log('login button click');
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber); 
    console.log(phoneNumber);

    if(phoneNumber==='01521239465' && pinNumber==='12345'){
        console.log('you are login');
        window.location.href = '/home.html';
    }
    else{
        alert('wrong imformation');
    }




})