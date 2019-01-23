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
d100=Math.floor((Math.random()*100)+1)*0.01;

totalRoll +=d100;
return totalRoll;
}

function updateStrengthModifiers() {
	if (strength.abilityScore >= 1.01 && strength.abilityScore < 1.51) {
		strength.damageModifier = "-7";
		strength.featOfStrength = "-14";
		strength.lift = "32";
		strength.carryNo = "3";
		strength.carryLight = "5";
		strength.carryMedium = "10";
		strength.carryHeavy = "15";
		strength.drag = "80";
	} else if (strength.abilityScore >= 1.51 && strength.abilityScore < 2.01) {
		strength.damageModifier = "-6";
		strength.featOfStrength = "-13";
		strength.lift = "42";
		strength.carryNo = "3";
		strength.carryLight = "6";
		strength.carryMedium = "13";
		strength.carryHeavy = "20";
		strength.drag = "105";
	} else if (strength.abilityScore >= 2.01 && strength.abilityScore < 2.51) {
		strength.damageModifier = "-6";
		strength.featOfStrength = "-12";
		strength.lift = "52";
		strength.carryNo = "4";
		strength.carryLight = "8";
		strength.carryMedium = "16";
		strength.carryHeavy = "24";
		strength.drag = "130";
	} else if (strength.abilityScore >= 2.51 && strength.abilityScore < 3.01) {
		strength.damageModifier = "-5";
		strength.featOfStrength = "-11";
		strength.lift = "58";
		strength.carryNo = "5";
		strength.carryLight = "9";
		strength.carryMedium = "18";
		strength.carryHeavy = "27";
		strength.drag = "145";
	} else if (strength.abilityScore >= 3.01 && strength.abilityScore < 3.51) {
		strength.damageModifier = "-5";
		strength.featOfStrength = "-10";
		strength.lift = "64";
		strength.carryNo = "5";
		strength.carryLight = "10";
		strength.carryMedium = "20";
		strength.carryHeavy = "30";
		strength.drag = "160";
	} else if (strength.abilityScore >= 3.51 && strength.abilityScore < 4.01) {
		strength.damageModifier = "-4";
		strength.featOfStrength = "-9";
		strength.lift = "76";
		strength.carryNo = "6";
		strength.carryLight = "11";
		strength.carryMedium = "22";
		strength.carryHeavy = "33";
		strength.drag = "190";
	} else if (strength.abilityScore >= 4.01 && strength.abilityScore < 4.51) {
		strength.damageModifier = "-4";
		strength.featOfStrength = "-9";
		strength.lift = "88";
		strength.carryNo = "6";
		strength.carryLight = "12";
		strength.carryMedium = "24";
		strength.carryHeavy = "36";
		strength.drag = "220";
	} else if (strength.abilityScore >= 4.51 && strength.abilityScore < 5.01) {
		strength.damageModifier = "-4";
		strength.featOfStrength = "-8";
		strength.lift = "99";
		strength.carryNo = "7";
		strength.carryLight = "13";
		strength.carryMedium = "26";
		strength.carryHeavy = "39";
		strength.drag = "248";
	} else if (strength.abilityScore >= 5.01 && strength.abilityScore < 5.51) {
		strength.damageModifier = "-3";
		strength.featOfStrength = "-7";
		strength.lift = "110";
		strength.carryNo = "7";
		strength.carryLight = "15";
		strength.carryMedium = "29";
		strength.carryHeavy = "44";
		strength.drag = "275";
	} else if (strength.abilityScore >= 5.51 && strength.abilityScore < 6.01) {
		strength.damageModifier = "-3";
		strength.featOfStrength = "-7";
		strength.lift = "120";
		strength.carryNo = "8";
		strength.carryLight = "16";
		strength.carryMedium = "31";
		strength.carryHeavy = "47";
		strength.drag = "300";
	} else if (strength.abilityScore >= 6.01 && strength.abilityScore < 6.51) {
		strength.damageModifier = "-3";
		strength.featOfStrength = "-6";
		strength.lift = "130";
		strength.carryNo = "8";
		strength.carryLight = "16";
		strength.carryMedium = "32";
		strength.carryHeavy = "48";
		strength.drag = "325";

	} else if (strength.abilityScore >= 6.51 && strength.abilityScore < 7.01) {
		strength.damageModifier = "-2";
		strength.featOfStrength = "-5";
		strength.lift = "140";
		strength.carryNo = "9";
		strength.carryLight = "17";
		strength.carryMedium = "34";
		strength.carryHeavy = "51";
		strength.drag = "350";

	} else if (strength.abilityScore >= 7.01 && strength.abilityScore < 7.51) {
		strength.damageModifier = "-2";
		strength.featOfStrength = "-5";
		strength.lift = "149";
		strength.carryNo = "9";
		strength.carryLight = "18";
		strength.carryMedium = "36";
		strength.carryHeavy = "54";
		strength.drag = "373";

	} else if (strength.abilityScore >= 7.51 && strength.abilityScore < 8.01) {
		strength.damageModifier = "-2";
		strength.featOfStrength = "-4";
		strength.lift = "157";
		strength.carryNo = "10";
		strength.carryLight = "19";
		strength.carryMedium = "38";
		strength.carryHeavy = "57";
		strength.drag = "393";

	} else if (strength.abilityScore >= 8.01 && strength.abilityScore < 8.51) {
		strength.damageModifier = "-1";
		strength.featOfStrength = "-3";
		strength.lift = "166";
		strength.carryNo = "10";
		strength.carryLight = "20";
		strength.carryMedium = "39";
		strength.carryHeavy = "59";
		strength.drag = "415";

	} else if (strength.abilityScore >= 8.51 && strength.abilityScore < 9.01) {
		strength.damageModifier = "-1";
		strength.featOfStrength = "-3";
		strength.lift = "173";
		strength.carryNo = "10";
		strength.carryLight = "20";
		strength.carryMedium = "40";
		strength.carryHeavy = "60";
		strength.drag = "433";

	} else if (strength.abilityScore >= 9.01 && strength.abilityScore < 9.51) {
		strength.damageModifier = "-1";
		strength.featOfStrength = "-2";
		strength.lift = "181";
		strength.carryNo = "11";
		strength.carryLight = "21";
		strength.carryMedium = "42";
		strength.carryHeavy = "63";
		strength.drag = "453";

	} else if (strength.abilityScore >= 9.51 && strength.abilityScore < 10.01) {
		strength.damageModifier = "-1";
		strength.featOfStrength = "-1";
		strength.lift = "187";
		strength.carryNo = "11";
		strength.carryLight = "22";
		strength.carryMedium = "43";
		strength.carryHeavy = "65";
		strength.drag = "468";

	} else if (strength.abilityScore >= 10.01 && strength.abilityScore < 10.51) {
		strength.damageModifier = "0";
		strength.featOfStrength = "0";
		strength.lift = "194";
		strength.carryNo = "11";
		strength.carryLight = "22";
		strength.carryMedium = "44";
		strength.carryHeavy = "66";
		strength.drag = "485";

	} else if (strength.abilityScore >= 10.51 && strength.abilityScore < 11.01) {
		strength.damageModifier = "0";
		strength.featOfStrength = "0";
		strength.lift = "200";
		strength.carryNo = "11";
		strength.carryLight = "23";
		strength.carryMedium = "45";
		strength.carryHeavy = "68";
		strength.drag = "500";

	} else if (strength.abilityScore >= 11.01 && strength.abilityScore < 11.51) {
		strength.damageModifier = "0";
		strength.featOfStrength = "0";
		strength.lift = "205";
		strength.carryNo = "12";
		strength.carryLight = "24";
		strength.carryMedium = "48";
		strength.carryHeavy = "72";
		strength.drag = "513";

	} else if (strength.abilityScore >= 11.51 && strength.abilityScore < 12.01) {
		strength.damageModifier = "0";
		strength.featOfStrength = "0";
		strength.lift = "210";
		strength.carryNo = "13";
		strength.carryLight = "26";
		strength.carryMedium = "52";
		strength.carryHeavy = "78";
		strength.drag = "525";

	} else if (strength.abilityScore >= 12.01 && strength.abilityScore < 12.51) {
		strength.damageModifier = "+1";
		strength.featOfStrength = "+1";
		strength.lift = "215";
		strength.carryNo = "14";
		strength.carryLight = "28";
		strength.carryMedium = "56";
		strength.carryHeavy = "84";
		strength.drag = "538";

	} else if (strength.abilityScore >= 12.51 && strength.abilityScore < 13.01) {
		strength.damageModifier = "+1";
		strength.featOfStrength = "+2";
		strength.lift = "220";
		strength.carryNo = "15";
		strength.carryLight = "31";
		strength.carryMedium = "61";
		strength.carryHeavy = "92";
		strength.drag = "550";

	} else if (strength.abilityScore >= 13.01 && strength.abilityScore < 13.51) {
		strength.damageModifier = "+1";
		strength.featOfStrength = "+3";
		strength.lift = "225";
		strength.carryNo = "17";
		strength.carryLight = "33";
		strength.carryMedium = "66";
		strength.carryHeavy = "99";
		strength.drag = "563";

	} else if (strength.abilityScore >= 13.51 && strength.abilityScore < 14.01) {
		strength.damageModifier = "+1";
		strength.featOfStrength = "+4";
		strength.lift = "230";
		strength.carryNo = "18";
		strength.carryLight = "36";
		strength.carryMedium = "71";
		strength.carryHeavy = "107";
		strength.drag = "575";

	} else if (strength.abilityScore >= 14.01 && strength.abilityScore < 14.51) {
		strength.damageModifier = "+2";
		strength.featOfStrength = "+5";
		strength.lift = "235";
		strength.carryNo = "19";
		strength.carryLight = "39";
		strength.carryMedium = "77";
		strength.carryHeavy = "116";
		strength.drag = "588";

	} else if (strength.abilityScore >= 14.51 && strength.abilityScore < 15.01) {
		strength.damageModifier = "+2";
		strength.featOfStrength = "+6";
		strength.lift = "240";
		strength.carryNo = "21";
		strength.carryLight = "42";
		strength.carryMedium = "84";
		strength.carryHeavy = "126";
		strength.drag = "600";

	} else if (strength.abilityScore >= 15.01 && strength.abilityScore < 15.51) {
		strength.damageModifier = "+2";
		strength.featOfStrength = "+7";
		strength.lift = "245";
		strength.carryNo = "23";
		strength.carryLight = "46";
		strength.carryMedium = "91";
		strength.carryHeavy = "137";
		strength.drag = "613";

	} else if (strength.abilityScore >= 15.51 && strength.abilityScore < 16.01) {
		strength.damageModifier = "+3";
		strength.featOfStrength = "+8";
		strength.lift = "267";
		strength.carryNo = "25";
		strength.carryLight = "50";
		strength.carryMedium = "99";
		strength.carryHeavy = "149";
		strength.drag = "668";

	} else if (strength.abilityScore >= 16.01 && strength.abilityScore < 16.51) {
		strength.damageModifier = "+3";
		strength.featOfStrength = "+9";
		strength.lift = "291";
		strength.carryNo = "27";
		strength.carryLight = "54";
		strength.carryMedium = "108";
		strength.carryHeavy = "162";
		strength.drag = "728";

	} else if (strength.abilityScore >= 16.51 && strength.abilityScore < 17.01) {
		strength.damageModifier = "+3";
		strength.featOfStrength = "+10";
		strength.lift = "318";
		strength.carryNo = "30";
		strength.carryLight = "59";
		strength.carryMedium = "118";
		strength.carryHeavy = "177";
		strength.drag = "795";

	} else if (strength.abilityScore >= 17.01 && strength.abilityScore < 17.51) {
		strength.damageModifier = "+4";
		strength.featOfStrength = "+11";
		strength.lift = "347";
		strength.carryNo = "32";
		strength.carryLight = "65";
		strength.carryMedium = "129";
		strength.carryHeavy = "194";
		strength.drag = "868";

	} else if (strength.abilityScore >= 17.51 && strength.abilityScore < 18.01) {
		strength.damageModifier = "+4";
		strength.featOfStrength = "+12";
		strength.lift = "380";
		strength.carryNo = "36";
		strength.carryLight = "71";
		strength.carryMedium = "142";
		strength.carryHeavy = "213";
		strength.drag = "950";

	} else if (strength.abilityScore >= 18.01 && strength.abilityScore < 18.51) {
		strength.damageModifier = "+4";
		strength.featOfStrength = "+13";
		strength.lift = "417";
		strength.carryNo = "39";
		strength.carryLight = "78";
		strength.carryMedium = "156";
		strength.carryHeavy = "234";
		strength.drag = "1043";

	} else if (strength.abilityScore >= 18.51 && strength.abilityScore < 19.01) {
		strength.damageModifier = "+5";
		strength.featOfStrength = "+14";
		strength.lift = "458";
		strength.carryNo = "43";
		strength.carryLight = "86";
		strength.carryMedium = "171";
		strength.carryHeavy = "257";
		strength.drag = "1145";

	} else if (strength.abilityScore >= 19.01 && strength.abilityScore < 19.51) {
		strength.damageModifier = "+5";
		strength.featOfStrength = "+15";
		strength.lift = "504";
		strength.carryNo = "47";
		strength.carryLight = "95";
		strength.carryMedium = "189";
		strength.carryHeavy = "284";
		strength.drag = "1260";
	} else if (strength.abilityScore >= 19.51 && strength.abilityScore < 20.01) {
		strength.damageModifier = "+6";
		strength.featOfStrength = "+16";
		strength.lift = "554";
		strength.carryNo = "52";
		strength.carryLight = "105";
		strength.carryMedium = "209";
		strength.carryHeavy = "314";
		strength.drag = "1385";
	} else if (strength.abilityScore >= 20.01 && strength.abilityScore < 20.51) {
		strength.damageModifier = "+6";
		strength.featOfStrength = "+17";
		strength.lift = "612";
		strength.carryNo = "58";
		strength.carryLight = "116";
		strength.carryMedium = "231";
		strength.carryHeavy = "347";
		strength.drag = "1530";
	} else if (strength.abilityScore >= 20.51 && strength.abilityScore < 21.01) {
		strength.damageModifier = "+7";
		strength.featOfStrength = "+18";
		strength.lift = "675";
		strength.carryNo = "64";
		strength.carryLight = "128";
		strength.carryMedium = "256";
		strength.carryHeavy = "384";
		strength.drag = "1688";
		
	} else {
		strength.damageModifier = "NA";
		strength.featOfStrength = "NA";
		strength.lift = "NA";
		strength.carryNo = "NA";
		strength.carryLight = "NA";
		strength.carryMedium = "NA";
		strength.carryHeavy = "NA";
		strength.drag = "NA";
	}
	
	document.getElementById("strengthDamageModifier").textContent=strength.damageModifier;
	document.getElementById("strengthFeatOfStrength").textContent=strength.featOfStrength;
	document.getElementById("strengthLift").textContent=strength.lift;
	document.getElementById("strengthCarryNo").textContent=strength.carryNo;
	document.getElementById("strengthCarryLight").textContent=strength.carryLight;
	document.getElementById("strengthCarryMedium").textContent=strength.carryMedium;
	document.getElementById("strengthCarryHeavy").textContent=strength.carryHeavy;
	document.getElementById("strengthDrag").textContent=strength.drag;

	
}
function updateDexterityModifiers() {
}
function updateIntelligenceModifiers() {
}
function updateWisdomModifiers() {
}
function updateConstitutionModifiers() {
}
function updateLooksModifiers() {
}
function updateCharismaModifiers() {
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

	updateStrengthModifiers();

}

updateScores();
//updateStrengthModifiers();


document.getElementById("rollButton").addEventListener("click", updateScores)
document.getElementById("darkMode").addEventListener("click", darkMode)
document.getElementById("lightMode").addEventListener("click", lightMode)
document.getElementById("greenMode").addEventListener("click", greenMode)

//document.getElementById(attributesArray[counter]).textContent=attributesArray[counter] + ":" + attribValue.toFixed(2);
//document.write("<br>"+attributesArray[counter]+":"+totalRoll+"."+d100+"<br><br><br>");

	
