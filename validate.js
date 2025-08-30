function check(){
   const username = document.contact.username.value;
   const email = document.contact.email.value;
   const phone = document.contact.phone.value;
    const message = document.getElementById('message').value;
   


   const nameError = document.getElementById('nameError');  
   const emailError = document.getElementById('emailError'); 
   const phoneError = document.getElementById('phoneError');
   const messageError = document.getElementById('messageError');

   let nameStatus = false;
   let emailStatus = false;
   let phoneStatus = false;
   let messageStatus = false;

   const alphaExp = /^[a-zA-z\s]+$/;
   const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
   const phoneExp = /^\d{10}$/;
   const messageExp = /^[\s\S]{1,}$/;

   //Name validation
   if(username === ''){
       nameError.textContent = ` *Name is Mandatory`;  
    }
    else
        { 
            if(username.match(alphaExp)){
                nameError.textContent = '';
                nameStatus =  true;
            }
            else{
                nameError.textContent = ` *Name should contain only alphabets`;
            }
    
        }
        
    //email validation
    if(email === ''){
        emailError.textContent = `*Email is Mandatory`
    }
    else{
        if(email.match(emailExp)){
            emailError.textContent = '';
            emailStatus = true;
        }
        else{
            emailError.textContent = `*Email is not valid`;
        }
    }

    //Mobile Validation
  if(phone === ''){
    phoneError.textContent = `*Phone number is Mandatory`
  }
  else{
    if(phone.match(phoneExp)){
        if(phone.length === 10){
            phoneError.textContent = '';
            phoneStatus = true;
        }
        else{
            phoneError.textContent = `*Phone number must be 10 digits`;
        }
    }
    else{
        phoneError.textContent = `*Phone number is invalid`;
    }
  }

  //Message Validation
  if(message === ''){
      messageError.textContent = `*Message is Mandatory`
  }
  else{
      messageError.textContent = '';
      messageStatus = true;
  }

    //Return Validation    
        if(nameStatus && emailStatus && phoneStatus && messageStatus){
            return true;
        }
        else {
            return false;
        }
        
    
}