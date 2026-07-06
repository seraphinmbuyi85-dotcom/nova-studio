const dark=document.getElementById("darkMode");

dark.onclick=()=>{
document.body.classList.toggle("dark");
}

const topBtn=document.getElementById("top");

window.onscroll=()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

topBtn.onclick=()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

}

document.getElementById("form").addEventListener("submit",(e)=>{

e.preventDefault();

let name=document.getElementById("name").value;

let email=document.getElementById("email").value;

let msg=document.getElementById("message").value;

if(name=="" || email=="" || msg==""){

document.getElementById("result").innerHTML="Veuillez remplir tous les champs.";

document.getElementById("result").style.color="red";

return;

}

document.getElementById("result").innerHTML="Message envoyé avec succès !";

document.getElementById("result").style.color="green";

e.target.reset();

});