function clicarNoBotao(){
var email = document.getElementById("campo-email").value
var senha = document.getElementById("campo-senha").value


   console.log(email)
   console.log(senha)

   document.getElementById('campo-email').classList.remove("input-error")
   document.getElementById('campo-senha').classList.remove("input-error")
   
   if (email === "" ){
      document.getElementById('campo-email').classList.add("input-error")
      document.getElementById('campo-senha').focus()
   }
   if (email === "" ){
      document.getElementById('campo-senha').classList.add("input-error")
      document.getElementById('campo-senha').focus()
   }

   document.getElementById('login-button').disabled = true
   document.getElementById('login-button').style.opacity = 0.5
   document.getElementById('login-button').innerText = "Logando ..."
};


    
