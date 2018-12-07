//STRENGTH object
//var strength = new Object();
//strength.value="";
function StrengthObject() {
	this.value="";
}
var strength = new StrengthObject;


//INTELLIGENCE object
var intelligence = new Object();
intelligence.value="";

//WISDOM object
var wisdom = new Object();
wisdom.value="";

//DEXTERITY object
var dexterity = new Object();
dexterity.value="";

//CONSTITUTION object
var constitution = new Object();
constitution.value="";

//LOOKS object
var looks = new Object();
looks.value="";

//CHARISMA object
var charisma = new Object();
charisma.value="";

function rollAbilityScore() {
	var rollNumber;
	var diceRoll;
	var d100;
	var totalRoll=0;
		for (rollNumber=0;rollNumber<3;rollNumber++) {
		diceRoll = Math.floor(Math.random()*6)+1;
		totalRoll +=diceRoll;
	}
d100=Math.floor(Math.random()*100)*0.01;
totalRoll +=d100;
return totalRoll;
}

strength.value=rollAbilityScore();
intelligence.value=rollAbilityScore();
wisdom.value=rollAbilityScore();
dexterity.value=rollAbilityScore();
constitution.value=rollAbilityScore();
looks.value=rollAbilityScore();
charisma.value=rollAbilityScore();

document.getElementById("strength").textContent=strength.value;
document.getElementById("intelligence").textContent=intelligence.value;
document.getElementById("wisdom").textContent=wisdom.value;
document.getElementById("dexterity").textContent=dexterity.value;
document.getElementById("constitution").textContent=constitution.value;
document.getElementById("looks").textContent=looks.value;
document.getElementById("charisma").textContent=charisma.value;



//document.getElementById(attributesArray[counter]).textContent=attributesArray[counter] + ":" + attribValue.toFixed(2);
//document.write("<br>"+attributesArray[counter]+":"+totalRoll+"."+d100+"<br><br><br>");

	
