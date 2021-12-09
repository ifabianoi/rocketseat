/* Validate Form */
function validate() {
    // getting the name value by the names
    var fullName = document.querySelector(".fullName");
    var email = document.querySelector(".email");
  
    // check if the name is empty
    if (fullName.value == "") {
      alert("Nome não informado");
  
      // input tag with focus
      fullName.focus();
      // return the function and don't look at the other lines
      return;
    }
    if (email.value == "") {
      alert("E-mail não informado");
      email.focus();
      return;
    }
    alert("Cadastro salvo com sucesso!");
    // save form
    //form.submit();
  }