function onValidate() {
    let name = document.forms['formId']['myname'].value;
    let email = document.forms['formId']['email'].value;
    let phone = document.forms['formId']['phone'].value;
    let address = document.forms['formId']['address'].value;
    let male = document.forms['formId']['ma'].checked;
    let female = document.forms['formId']['fe'].checked;
    let other = document.forms['formId']['oth'].checked;

    let arr = new Array();
    if(document.forms['formId']['mu'].checked){
        arr.push(document.forms['formId']['mu'].value)
    }
   if(document.forms['formId']['sp'].checked){
        arr.push(document.forms['formId']['sp'].value)
    }
    if(document.forms['formId']['ci'].checked){
        arr.push(document.forms['formId']['ci'].value)
    }
    if(document.forms['formId']['da'].checked){
        arr.push(document.forms['formId']['da'].value)
    }
   
    if (name == "" || phone == '' || address == '') {
        alert("some fields are missing");
    }else{
        console.log((male===true) +" " +female+ " "+ other)
    document.getElementById('a').innerHTML = name;
    document.getElementById('b').innerHTML = email;
    document.getElementById('c').innerHTML = phone;
    document.getElementById('d').innerHTML = address;
    if (male) {
        document.getElementById('e').innerHTML = "male";
        
    } else if (female ) {
        document.getElementById('e').innerHTML = "female";
    } else if(other){
        document.getElementById('e').innerHTML = "other";
    }
   
    document.getElementById('f').innerHTML = arr;
    // return false;
    document.getElementById('first').innerHTML = "Name:";
    document.getElementById('second').innerHTML = "Email:";
    document.getElementById('third').innerHTML ="Phone:";
    document.getElementById('fourth').innerHTML = "Address:";
    document.getElementById('fifth').innerHTML ="Gender:";
    document.getElementById('sixth').innerHTML = "Hobbies:";}
}