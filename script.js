function compute()
{
    var principal = document.getElementById("principal").value;

    // Validation of principal amount
    if(principal == ''){
        alert('Enter the principal amount, it cannot be blank');
        document.getElementById("principal").focus();
        return;
    }

    if(principal<= 0){
        alert("Enter the Positive no. Of Principal Amount")
        document.getElementById("principal").focus();
        return; 
    }


//rate value
var rate = parseInt(document.getElementById("rate").value);
//years value
var years = parseInt(document.getElementById("years").value);

    var year = new Date().getFullYear() + years;
    // Simple Interest Formula 
    let interest = (principal*years*rate)/100;
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+ interest +",\<br\>in the year "+year+"\<br\>"
}
function updateRate(){
   let  rateval = document.getElementById("rate").value;
   document.getElementById("rate_val").innerText= rateval +"%";
}