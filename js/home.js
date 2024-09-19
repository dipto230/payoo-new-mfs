//add money to the account





//add a event handeler add money button inside the form
document.getElementById('btn-add-money').addEventListener('click',function(event)
{
    //prevent page reload after from submit

    event.preventDefault();
 //get money to be added
 const addMoneyInput = document.getElementById('input-add-money').value;
 console.log(addMoneyInput);


   //get the pin number provided
   const pinNumberInput = document.getElementById('input-filed-number').value;
   console.log(pinNumberInput);
});