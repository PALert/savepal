function fight() {
  var txt;
  if(confirm("Do you want to proceed to Fight Covid 19?")){
    txt = "Let's Proceed";
    window.location.assign("covidfight.html")
  }else{
    txt = "Cancel";
    window.location.assign("index.html")
  }
}

function treatment() {
  var txt;
  if(confirm("Do you want to proceed to Covid Treatments?")){
    txt = "Let's Proceed";
    window.location.assign("covidtreatment.html")
  }else{
    txt = "Cancel";
    window.location.assign("index.html")
  }
}

function fact() {
  var txt;
  if(confirm("Do you want to proceed to Covid Facts?")){
    txt = "Let's Proceed";
    window.location.assign("covid19facts.html")
  }else{
    txt = "Cancel";
    window.location.assign("index.html")
  }
}

function symptom() {
  var txt;
  if(confirm("Do you want to proceed to Covid Symptoms?")){
    txt = "Let's Proceed";
    window.location.assign("covidsymptoms.html")
  }else{
    txt = "Cancel";
    window.location.assign("index.html")
  }
}



function spin(){
  document.getElementById("spin").style.visibility='visible'
  console.log('go to fight covid 19 page')
}
function spin1(){
  document.getElementById("spin1").style.visibility='visible'
  console.log('go to covid 19 treatment page')
}
function spin2(){
  document.getElementById("spin2").style.visibility='visible'
  console.log('go to covid 19 facts')
}
function spin3(){
  document.getElementById("spin3").style.visibility='visible'
  console.log('go to covid 19 symptoms page')
}

function donate(){
  console.log('go to donate page')
  window.location.assign('donate.html')
}
console.log('Savepal - Home page')

