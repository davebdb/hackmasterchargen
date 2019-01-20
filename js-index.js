//STRENGTH object
//var strength = new Object();
//strength.value="";
function StrengthObject() {
	this.abilityScore="";
	this.damageModifier="";
	this.featOfStrength="";
	this.lift="";
	this.carryNo="";
	this.carryLight="";
	this.carryMedium="";
	this.carryHeavy="";
	this.drag="";
}
//INTELLIGENCE object
function IntelligenceObject() {
	this.abilityScore="";
	this.attackModifier="";
	this.bpBonus="";
}
//WISDOM object
function WisdomObject() {
	this.abilityScore="";
	this.initiativeModifier="";
	this.bpBonus="";
	this.defenseModifier="";
	this.mentalSavingThrowModifier="";
}
//DEXTERITY object
function DexterityObject() {
	this.abilityScore="";
	this.initiativeModifier="";
	this.attackModifier="";
	this.defenseModifier="";
	this.dodgeSavingThrowModifier="";
	this.featOfAgility="";
}
//CONSTITUTION object
function ConstitutionObject() {
	this.abilityScore="";
	this.physicalSavingThrowModifier="";
}
//LOOKS object
function LooksObject() {
	this.abilityScore="";
	this.charismaModifier="";
	this.startingHonorModifier="";
	this.startingFameModifier="";
}
//CHARISMA object
function CharismaObject() {
	this.abilityScore="";
	this.bpBonus="";
	this.startingHonorModifier="";
	this.turningModifier="";
	this.moraleModifier="";
	this.maximumProteges="";
}



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

var strength = new StrengthObject;
var intelligence = new IntelligenceObject;
var wisdom = new WisdomObject;
var dexterity = new DexterityObject;
var constitution = new ConstitutionObject;
var looks = new LooksObject;
var charisma = new CharismaObject;

function darkMode() {
	document.body.style.backgroundColor = "black";
	document.body.style.color = "white";
}

function lightMode() {
	document.body.style.backgroundColor = "white";
	document.body.style.color = "black";
}

function greenMode() {
	document.body.style.backgroundColor = "black";
	document.body.style.color = "#4cbb17";
}



function updateScores() {
strength.abilityScore=rollAbilityScore().toFixed(2);
intelligence.abilityScore=rollAbilityScore().toFixed(2);
wisdom.abilityScore=rollAbilityScore().toFixed(2);
dexterity.abilityScore=rollAbilityScore().toFixed(2);
constitution.abilityScore=rollAbilityScore().toFixed(2);
looks.abilityScore=rollAbilityScore().toFixed(2);
charisma.abilityScore=rollAbilityScore().toFixed(2);

document.getElementById("strength").textContent=strength.abilityScore;
document.getElementById("intelligence").textContent=intelligence.abilityScore;
document.getElementById("wisdom").textContent=wisdom.abilityScore;
document.getElementById("dexterity").textContent=dexterity.abilityScore;
document.getElementById("constitution").textContent=constitution.abilityScore;
document.getElementById("looks").textContent=looks.abilityScore;
document.getElementById("charisma").textContent=charisma.abilityScore;
}

updateScores();

document.getElementById("rollButton").addEventListener("click", updateScores)
document.getElementById("darkMode").addEventListener("click", darkMode)
document.getElementById("lightMode").addEventListener("click", lightMode)
document.getElementById("greenMode").addEventListener("click", greenMode)

//document.getElementById(attributesArray[counter]).textContent=attributesArray[counter] + ":" + attribValue.toFixed(2);
//document.write("<br>"+attributesArray[counter]+":"+totalRoll+"."+d100+"<br><br><br>");

	
