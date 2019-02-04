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
	if (dexterity.abilityScore >= 3.01 && dexterity.abilityScore < 3.51) {
		dexterity.initiativeModifier = "+7";
		dexterity.attackModifier = "-4";
		dexterity.defenseModifier = "-5";
		dexterity.dodgeSavingThrowModifier = "-3";
		dexterity.featOfAgility = "-10";
	} else if (dexterity.abilityScore >= 3.51 && dexterity.abilityScore < 4.01) {
		dexterity.initiativeModifier = "+7";
		dexterity.attackModifier = "-3";
		dexterity.defenseModifier = "-5";
		dexterity.dodgeSavingThrowModifier = "-3";
		dexterity.featOfAgility = "-9";
	} else if (dexterity.abilityScore >= 4.01 && dexterity.abilityScore < 4.51) {
		dexterity.initiativeModifier = "+6";
		dexterity.attackModifier = "-3";
		dexterity.defenseModifier = "-4";
		dexterity.dodgeSavingThrowModifier = "-3";
		dexterity.featOfAgility = "-9";
	} else if (dexterity.abilityScore >= 4.51 && dexterity.abilityScore < 5.01) {
		dexterity.initiativeModifier = "+6";
		dexterity.attackModifier = "-3";
		dexterity.defenseModifier = "-4";
		dexterity.dodgeSavingThrowModifier = "-3";
		dexterity.featOfAgility = "-8";
	} else if (dexterity.abilityScore >= 5.01 && dexterity.abilityScore < 5.51) {
		dexterity.initiativeModifier = "+6";
		dexterity.attackModifier = "-3";
		dexterity.defenseModifier = "-4";
		dexterity.dodgeSavingThrowModifier = "-2";
		dexterity.featOfAgility = "-7";
	} else if (dexterity.abilityScore >= 5.51 && dexterity.abilityScore < 6.01) {
		dexterity.initiativeModifier = "+5";
		dexterity.attackModifier = "-2";
		dexterity.defenseModifier = "-3";
		dexterity.dodgeSavingThrowModifier = "-2";
		dexterity.featOfAgility = "-7";
	} else if (dexterity.abilityScore >= 6.01 && dexterity.abilityScore < 6.51) {
		dexterity.initiativeModifier = "+5";
		dexterity.attackModifier = "-2";
		dexterity.defenseModifier = "-3";
		dexterity.dodgeSavingThrowModifier = "-2";
		dexterity.featOfAgility = "-6";
	} else if (dexterity.abilityScore >= 6.51 && dexterity.abilityScore < 7.01) {
		dexterity.initiativeModifier = "+5";
		dexterity.attackModifier = "-2";
		dexterity.defenseModifier = "-2";
		dexterity.dodgeSavingThrowModifier = "-2";
		dexterity.featOfAgility = "-5";
	} else if (dexterity.abilityScore >= 7.01 && dexterity.abilityScore < 7.51) {
		dexterity.initiativeModifier = "+4";
		dexterity.attackModifier = "-2";
		dexterity.defenseModifier = "-2";
		dexterity.dodgeSavingThrowModifier = "-1";
		dexterity.featOfAgility = "-5";
	} else if (dexterity.abilityScore >= 7.51 && dexterity.abilityScore < 8.01) {
		dexterity.initiativeModifier = "+4";
		dexterity.attackModifier = "-1";
		dexterity.defenseModifier = "-2";
		dexterity.dodgeSavingThrowModifier = "-1";
		dexterity.featOfAgility = "-4";
	} else if (dexterity.abilityScore >= 8.01 && dexterity.abilityScore < 8.51) {
		dexterity.initiativeModifier = "+4";
		dexterity.attackModifier = "-1";
		dexterity.defenseModifier = "-2";
		dexterity.dodgeSavingThrowModifier = "-1";
		dexterity.featOfAgility = "-3";
	} else if (dexterity.abilityScore >= 8.51 && dexterity.abilityScore < 9.01) {
		dexterity.initiativeModifier = "+3";
		dexterity.attackModifier = "-1";
		dexterity.defenseModifier = "-1";
		dexterity.dodgeSavingThrowModifier = "-1";
		dexterity.featOfAgility = "-3";
	} else if (dexterity.abilityScore >= 9.01 && dexterity.abilityScore < 9.51) {
		dexterity.initiativeModifier = "+3";
		dexterity.attackModifier = "-1";
		dexterity.defenseModifier = "-1";
		dexterity.dodgeSavingThrowModifier = "0";
		dexterity.featOfAgility = "-2";
	} else if (dexterity.abilityScore >= 9.51 && dexterity.abilityScore < 10.01) {
		dexterity.initiativeModifier = "+3";
		dexterity.attackModifier = "-0";
		dexterity.defenseModifier = "-1";
		dexterity.dodgeSavingThrowModifier = "0";
		dexterity.featOfAgility = "-1";
	} else if (dexterity.abilityScore >= 10.01 && dexterity.abilityScore < 10.51) {
		dexterity.initiativeModifier = "+2";
		dexterity.attackModifier = "0";
		dexterity.defenseModifier = "0";
		dexterity.dodgeSavingThrowModifier = "0";
		dexterity.featOfAgility = "0";
	} else if (dexterity.abilityScore >= 10.51 && dexterity.abilityScore < 11.01) {
		dexterity.initiativeModifier = "+2";
		dexterity.attackModifier = "0";
		dexterity.defenseModifier = "0";
		dexterity.dodgeSavingThrowModifier = "0";
		dexterity.featOfAgility = "0";
	} else if (dexterity.abilityScore >= 11.01 && dexterity.abilityScore < 11.51) {
		dexterity.initiativeModifier = "+2";
		dexterity.attackModifier = "0";
		dexterity.defenseModifier = "0";
		dexterity.dodgeSavingThrowModifier = "0";
		dexterity.featOfAgility = "0";
	} else if (dexterity.abilityScore >= 11.51 && dexterity.abilityScore < 12.01) {
		dexterity.initiativeModifier = "+1";
		dexterity.attackModifier = "0";
		dexterity.defenseModifier = "+1";
		dexterity.dodgeSavingThrowModifier = "0";
		dexterity.featOfAgility = "0";
	} else if (dexterity.abilityScore >= 12.01 && dexterity.abilityScore < 12.51) {
		dexterity.initiativeModifier = "+1";
		dexterity.attackModifier = "+1";
		dexterity.defenseModifier = "+1";
		dexterity.dodgeSavingThrowModifier = "0";
		dexterity.featOfAgility = "+1";
	} else if (dexterity.abilityScore >= 12.51 && dexterity.abilityScore < 13.01) {
		dexterity.initiativeModifier = "+1";
		dexterity.attackModifier = "+1";
		dexterity.defenseModifier = "+1";
		dexterity.dodgeSavingThrowModifier = "0";
		dexterity.featOfAgility = "+2";
	} else if (dexterity.abilityScore >= 13.01 && dexterity.abilityScore < 13.51) {
		dexterity.initiativeModifier = "0";
		dexterity.attackModifier = "+1";
		dexterity.defenseModifier = "+2";
		dexterity.dodgeSavingThrowModifier = "+1";
		dexterity.featOfAgility = "+3";
	} else if (dexterity.abilityScore >= 13.51 && dexterity.abilityScore < 14.01) {
		dexterity.initiativeModifier = "0";
		dexterity.attackModifier = "+1";
		dexterity.defenseModifier = "+2";
		dexterity.dodgeSavingThrowModifier = "+1";
		dexterity.featOfAgility = "+4";
	} else if (dexterity.abilityScore >= 14.01 && dexterity.abilityScore < 14.51) {
		dexterity.initiativeModifier = "0";
		dexterity.attackModifier = "+2";
		dexterity.defenseModifier = "+2";
		dexterity.dodgeSavingThrowModifier = "+1";
		dexterity.featOfAgility = "+5";
	} else if (dexterity.abilityScore >= 14.51 && dexterity.abilityScore < 15.01) {
		dexterity.initiativeModifier = "-1";
		dexterity.attackModifier = "+2";
		dexterity.defenseModifier = "+3";
		dexterity.dodgeSavingThrowModifier = "+1";
		dexterity.featOfAgility = "+6";
	} else if (dexterity.abilityScore >= 15.01 && dexterity.abilityScore < 15.51) {
		dexterity.initiativeModifier = "-1";
		dexterity.attackModifier = "+2";
		dexterity.defenseModifier = "+3";
		dexterity.dodgeSavingThrowModifier = "+2";
		dexterity.featOfAgility = "+7";
	} else if (dexterity.abilityScore >= 15.51 && dexterity.abilityScore < 16.01) {
		dexterity.initiativeModifier = "-1";
		dexterity.attackModifier = "+2";
		dexterity.defenseModifier = "+3";
		dexterity.dodgeSavingThrowModifier = "+2";
		dexterity.featOfAgility = "+8";
	} else if (dexterity.abilityScore >= 16.01 && dexterity.abilityScore < 16.51) {
		dexterity.initiativeModifier = "-2";
		dexterity.attackModifier = "+3";
		dexterity.defenseModifier = "+4";
		dexterity.dodgeSavingThrowModifier = "+2";
		dexterity.featOfAgility = "+9";
	} else if (dexterity.abilityScore >= 16.51 && dexterity.abilityScore < 17.01) {
		dexterity.initiativeModifier = "-2";
		dexterity.attackModifier = "+3";
		dexterity.defenseModifier = "+4";
		dexterity.dodgeSavingThrowModifier = "+2";
		dexterity.featOfAgility = "+10";
	} else if (dexterity.abilityScore >= 17.01 && dexterity.abilityScore < 17.51) {
		dexterity.initiativeModifier = "-2";
		dexterity.attackModifier = "+3";
		dexterity.defenseModifier = "+4";
		dexterity.dodgeSavingThrowModifier = "+2";
		dexterity.featOfAgility = "+11";
	} else if (dexterity.abilityScore >= 17.51 && dexterity.abilityScore < 18.01) {
		dexterity.initiativeModifier = "-3";
		dexterity.attackModifier = "+3";
		dexterity.defenseModifier = "+5";
		dexterity.dodgeSavingThrowModifier = "+2";
		dexterity.featOfAgility = "+12";
	} else if (dexterity.abilityScore >= 18.01 && dexterity.abilityScore < 18.51) {
		dexterity.initiativeModifier = "-3";
		dexterity.attackModifier = "+4";
		dexterity.defenseModifier = "+5";
		dexterity.dodgeSavingThrowModifier = "+3";
		dexterity.featOfAgility = "+13";
	} else if (dexterity.abilityScore >= 18.51 && dexterity.abilityScore < 19.01) {
		dexterity.initiativeModifier = "-3";
		dexterity.attackModifier = "+4";
		dexterity.defenseModifier = "+5";
		dexterity.dodgeSavingThrowModifier = "+3";
		dexterity.featOfAgility = "+14";
	} else if (dexterity.abilityScore >= 19.01 && dexterity.abilityScore < 19.51) {
		dexterity.initiativeModifier = "-4";
		dexterity.attackModifier = "+4";
		dexterity.defenseModifier = "+6";
		dexterity.dodgeSavingThrowModifier = "+3";
		dexterity.featOfAgility = "+15";
	} else if (dexterity.abilityScore >= 19.51 && dexterity.abilityScore < 20.01) {
		dexterity.initiativeModifier = "-4";
		dexterity.attackModifier = "+4";
		dexterity.defenseModifier = "+6";
		dexterity.dodgeSavingThrowModifier = "+3";
		dexterity.featOfAgility = "+16";
	} else if (dexterity.abilityScore >= 20.01 && dexterity.abilityScore < 20.51) {
		dexterity.initiativeModifier = "-4";
		dexterity.attackModifier = "+5";
		dexterity.defenseModifier = "+6";
		dexterity.dodgeSavingThrowModifier = "+3";
		dexterity.featOfAgility = "+17";
	} else if (dexterity.abilityScore >= 20.51 && dexterity.abilityScore < 21.01) {
		dexterity.initiativeModifier = "-5";
		dexterity.attackModifier = "+5";
		dexterity.defenseModifier = "+7";
		dexterity.dodgeSavingThrowModifier = "+3";
		dexterity.featOfAgility = "+18";
	} else {
		dexterity.initiativeModifier = "NA";
		dexterity.attackModifier = "NA";
		dexterity.defenseModifier = "NA";
		dexterity.dodgeSavingThrowModifier = "NA";
		dexterity.featOfAgility = "NA";
	}
	
	document.getElementById("dexterityInitiativeModifier").textContent=dexterity.initiativeModifier;
	document.getElementById("dexterityAttackModifier").textContent=dexterity.attackModifier;
	document.getElementById("dexterityDefenseModifier").textContent=dexterity.defenseModifier;
	document.getElementById("dexterityDodgeSavingThrowModifier").textContent=dexterity.dodgeSavingThrowModifier;
	document.getElementById("dexterityFeatOfAgility").textContent=dexterity.featOfAgility;

}
function updateIntelligenceModifiers() {
	if (intelligence.abilityScore >= 1 && intelligence.abilityScore < 2) {
		intelligence.attackModifier = "-5";
		intelligence.bpBonus = "0";
	} else if (intelligence.abilityScore >= 2 && intelligence.abilityScore < 3) {
		intelligence.attackModifier = "-4";
		intelligence.bpBonus = "0";		
	} else if (intelligence.abilityScore >= 3 && intelligence.abilityScore < 4) {
		intelligence.attackModifier = "-3";
		intelligence.bpBonus = "0";		
	} else if (intelligence.abilityScore >= 4 && intelligence.abilityScore < 5) {
		intelligence.attackModifier = "-2";
		intelligence.bpBonus = "0";		
	} else if (intelligence.abilityScore >= 5 && intelligence.abilityScore < 6) {
		intelligence.attackModifier = "-2";
		intelligence.bpBonus = "0";		
	} else if (intelligence.abilityScore >= 6 && intelligence.abilityScore < 7) {
		intelligence.attackModifier = "-2";
		intelligence.bpBonus = "0";		
	} else if (intelligence.abilityScore >= 7 && intelligence.abilityScore < 8) {
		intelligence.attackModifier = "-1";
		intelligence.bpBonus = "0";		
	} else if (intelligence.abilityScore >= 8 && intelligence.abilityScore < 9) {
		intelligence.attackModifier = "-1";
		intelligence.bpBonus = "0";		
	} else if (intelligence.abilityScore >= 9 && intelligence.abilityScore < 10) {
		intelligence.attackModifier = "-1";
		intelligence.bpBonus = "0";		
	} else if (intelligence.abilityScore >= 10 && intelligence.abilityScore < 11) {
		intelligence.attackModifier = "0";
		intelligence.bpBonus = "0";		
	} else if (intelligence.abilityScore >= 11 && intelligence.abilityScore < 12) {
		intelligence.attackModifier = "0";
		intelligence.bpBonus = "1";		
	} else if (intelligence.abilityScore >= 12 && intelligence.abilityScore < 13) {
		intelligence.attackModifier = "+1";
		intelligence.bpBonus = "2";		
	} else if (intelligence.abilityScore >= 13 && intelligence.abilityScore < 14) {
		intelligence.attackModifier = "+1";
		intelligence.bpBonus = "3";		
	} else if (intelligence.abilityScore >= 14 && intelligence.abilityScore < 15) {
		intelligence.attackModifier = "+1";
		intelligence.bpBonus = "6";		
	} else if (intelligence.abilityScore >= 15 && intelligence.abilityScore < 16) {
		intelligence.attackModifier = "+2";
		intelligence.bpBonus = "10";		
	} else if (intelligence.abilityScore >= 16 && intelligence.abilityScore < 17) {
		intelligence.attackModifier = "+2";
		intelligence.bpBonus = "15";		
	} else if (intelligence.abilityScore >= 17 && intelligence.abilityScore < 18) {
		intelligence.attackModifier = "+2";
		intelligence.bpBonus = "21";		
	} else if (intelligence.abilityScore >= 18 && intelligence.abilityScore < 19) {
		intelligence.attackModifier = "+3";
		intelligence.bpBonus = "28";		
	} else if (intelligence.abilityScore >= 19 && intelligence.abilityScore < 20) {
		intelligence.attackModifier = "+3";
		intelligence.bpBonus = "36";		
	} else if (intelligence.abilityScore >= 20 && intelligence.abilityScore < 21) {
		intelligence.attackModifier = "+3";
		intelligence.bpBonus = "45";		
	} else {
		intelligence.attackModifier = "NA";
		intelligence.bpBonus = "NA";
	}
	document.getElementById("intelligenceAttackModifier").textContent=intelligence.attackModifier;
	document.getElementById("intelligenceBPBonus").textContent=intelligence.bpBonus;
}
function updateWisdomModifiers() {
	if (wisdom.abilityScore >= 1 && wisdom.abilityScore < 2) {
		wisdom.initiativeModifier = "+7";
		wisdom.bpBonus = "0";
		wisdom.defenseModifier = "-4";
		wisdom.mentalSavingThrowModifier = "-4";
	} else if (wisdom.abilityScore >= 2 && wisdom.abilityScore < 3) {
		wisdom.initiativeModifier = "+6";
		wisdom.bpBonus = "0";		
		wisdom.defenseModifier = "-3";
		wisdom.mentalSavingThrowModifier = "-4";

	} else if (wisdom.abilityScore >= 3 && wisdom.abilityScore < 4) {
		wisdom.initiativeModifier = "+5";
		wisdom.bpBonus = "0";		
		wisdom.defenseModifier = "-3";
		wisdom.mentalSavingThrowModifier = "-3";

	} else if (wisdom.abilityScore >= 4 && wisdom.abilityScore < 5) {
		wisdom.initiativeModifier = "+4";
		wisdom.bpBonus = "0";		
		wisdom.defenseModifier = "-2";
		wisdom.mentalSavingThrowModifier = "-3";

	} else if (wisdom.abilityScore >= 5 && wisdom.abilityScore < 6) {
		wisdom.initiativeModifier = "+4";
		wisdom.bpBonus = "0";		
		wisdom.defenseModifier = "-2";
		wisdom.mentalSavingThrowModifier = "-2";

	} else if (wisdom.abilityScore >= 6 && wisdom.abilityScore < 7) {
		wisdom.initiativeModifier = "+4";
		wisdom.bpBonus = "0";		
		wisdom.defenseModifier = "-2";
		wisdom.mentalSavingThrowModifier = "-2";

	} else if (wisdom.abilityScore >= 7 && wisdom.abilityScore < 8) {
		wisdom.initiativeModifier = "+3";
		wisdom.bpBonus = "0";		
		wisdom.defenseModifier = "-1";
		wisdom.mentalSavingThrowModifier = "-1";

	} else if (wisdom.abilityScore >= 8 && wisdom.abilityScore < 9) {
		wisdom.initiativeModifier = "+3";
		wisdom.bpBonus = "0";		
		wisdom.defenseModifier = "-1";
		wisdom.mentalSavingThrowModifier = "-1";

	} else if (wisdom.abilityScore >= 9 && wisdom.abilityScore < 10) {
		wisdom.initiativeModifier = "+3";
		wisdom.bpBonus = "0";		
		wisdom.defenseModifier = "-1";
		wisdom.mentalSavingThrowModifier = "0";

	} else if (wisdom.abilityScore >= 10 && wisdom.abilityScore < 11) {
		wisdom.initiativeModifier = "+2";
		wisdom.bpBonus = "0";		
		wisdom.defenseModifier = "0";
		wisdom.mentalSavingThrowModifier = "0";

	} else if (wisdom.abilityScore >= 11 && wisdom.abilityScore < 12) {
		wisdom.initiativeModifier = "+2";
		wisdom.bpBonus = "1";		
		wisdom.defenseModifier = "0";
		wisdom.mentalSavingThrowModifier = "0";

	} else if (wisdom.abilityScore >= 12 && wisdom.abilityScore < 13) {
		wisdom.initiativeModifier = "+1";
		wisdom.bpBonus = "2";		
		wisdom.defenseModifier = "+1";
		wisdom.mentalSavingThrowModifier = "0";

	} else if (wisdom.abilityScore >= 13 && wisdom.abilityScore < 14) {
		wisdom.initiativeModifier = "+1";
		wisdom.bpBonus = "3";		
		wisdom.defenseModifier = "+1";
		wisdom.mentalSavingThrowModifier = "+1";

	} else if (wisdom.abilityScore >= 14 && wisdom.abilityScore < 15) {
		wisdom.initiativeModifier = "+1";
		wisdom.bpBonus = "6";		
		wisdom.defenseModifier = "+1";
		wisdom.mentalSavingThrowModifier = "+1";

	} else if (wisdom.abilityScore >= 15 && wisdom.abilityScore < 16) {
		wisdom.initiativeModifier = "0";
		wisdom.bpBonus = "10";		
		wisdom.defenseModifier = "+2";
		wisdom.mentalSavingThrowModifier = "+2";

	} else if (wisdom.abilityScore >= 16 && wisdom.abilityScore < 17) {
		wisdom.initiativeModifier = "0";
		wisdom.bpBonus = "15";		
		wisdom.defenseModifier = "+2";
		wisdom.mentalSavingThrowModifier = "+2";

	} else if (wisdom.abilityScore >= 17 && wisdom.abilityScore < 18) {
		wisdom.initiativeModifier = "0";
		wisdom.bpBonus = "21";		
		wisdom.defenseModifier = "+2";
		wisdom.mentalSavingThrowModifier = "+2";

	} else if (wisdom.abilityScore >= 18 && wisdom.abilityScore < 19) {
		wisdom.initiativeModifier = "-1";
		wisdom.bpBonus = "28";		
		wisdom.defenseModifier = "+3";
		wisdom.mentalSavingThrowModifier = "+3";

	} else if (wisdom.abilityScore >= 19 && wisdom.abilityScore < 20) {
		wisdom.initiativeModifier = "-1";
		wisdom.bpBonus = "36";		
		wisdom.defenseModifier = "+3";
		wisdom.mentalSavingThrowModifier = "+3";

	} else if (wisdom.abilityScore >= 20 && wisdom.abilityScore < 21) {
		wisdom.initiativeModifier = "-1";
		wisdom.bpBonus = "45";		
		wisdom.defenseModifier = "+3";
		wisdom.mentalSavingThrowModifier = "+3";

	} else {
		wisdom.initiativeModifier = "NA";
		wisdom.bpBonus = "NA";
		wisdom.defenseModifier = "NA";
		wisdom.mentalSavingThrowModifier = "NA";
	}
	document.getElementById("wisdomInitiativeModifier").textContent=wisdom.initiativeModifier;
	document.getElementById("wisdomBPBonus").textContent=wisdom.bpBonus;
	document.getElementById("wisdomDefenseModifier").textContent=wisdom.defenseModifier;
	document.getElementById("wisdomMentalSavingThrowModifier").textContent=wisdom.mentalSavingThrowModifier;
}
function updateConstitutionModifiers() {
	if (constitution.abilityScore >= 1 && constitution.abilityScore < 2) {
		constitution.physicalSavingThrowModifier = "-5";
	} else if (constitution.abilityScore >= 2 && constitution.abilityScore < 3) {
		constitution.physicalSavingThrowModifier = "-4";
	} else if (constitution.abilityScore >= 3 && constitution.abilityScore < 4) {
		constitution.physicalSavingThrowModifier = "-3";
	} else if (constitution.abilityScore >= 4 && constitution.abilityScore < 5) {
		constitution.physicalSavingThrowModifier = "-3";
	} else if (constitution.abilityScore >= 5 && constitution.abilityScore < 6) {
		constitution.physicalSavingThrowModifier = "-2";
	} else if (constitution.abilityScore >= 6 && constitution.abilityScore < 7) {
		constitution.physicalSavingThrowModifier = "-2";
	} else if (constitution.abilityScore >= 7 && constitution.abilityScore < 8) {
		constitution.physicalSavingThrowModifier = "-1";
	} else if (constitution.abilityScore >= 8 && constitution.abilityScore < 9) {
		constitution.physicalSavingThrowModifier = "-1";
	} else if (constitution.abilityScore >= 9 && constitution.abilityScore < 10) {
		constitution.physicalSavingThrowModifier = "0";
	} else if (constitution.abilityScore >= 10 && constitution.abilityScore < 11) {
		constitution.physicalSavingThrowModifier = "0";
	} else if (constitution.abilityScore >= 11 && constitution.abilityScore < 12) {
		constitution.physicalSavingThrowModifier = "0";
	} else if (constitution.abilityScore >= 12 && constitution.abilityScore < 13) {
		constitution.physicalSavingThrowModifier = "0";
	} else if (constitution.abilityScore >= 13 && constitution.abilityScore < 14) {
		constitution.physicalSavingThrowModifier = "+1";
	} else if (constitution.abilityScore >= 14 && constitution.abilityScore < 15) {
		constitution.physicalSavingThrowModifier = "+1";
	} else if (constitution.abilityScore >= 15 && constitution.abilityScore < 16) {
		constitution.physicalSavingThrowModifier = "+2";
	} else if (constitution.abilityScore >= 16 && constitution.abilityScore < 17) {
		constitution.physicalSavingThrowModifier = "+2";
	} else if (constitution.abilityScore >= 17 && constitution.abilityScore < 18) {
		constitution.physicalSavingThrowModifier = "+2";
	} else if (constitution.abilityScore >= 18 && constitution.abilityScore < 19) {
		constitution.physicalSavingThrowModifier = "+3";
	} else if (constitution.abilityScore >= 19 && constitution.abilityScore < 20) {
		constitution.physicalSavingThrowModifier = "+3";
	} else if (constitution.abilityScore >= 20 && constitution.abilityScore < 21) {
		constitution.physicalSavingThrowModifier = "+3";
	} else if (constitution.abilityScore >= 21 && constitution.abilityScore < 22) {
		constitution.physicalSavingThrowModifier = "+4";
	} else if (constitution.abilityScore >= 22 && constitution.abilityScore < 23) {
		constitution.physicalSavingThrowModifier = "+4";
	} else {
		constitution.physicalSavingThrowModifier = "NA";
	}
	document.getElementById("constitutionPhysicalSavingThrowModifier").textContent=constitution.physicalSavingThrowModifier;
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
	updateIntelligenceModifiers();
	updateWisdomModifiers();
	updateDexterityModifiers();
	updateConstitutionModifiers();
	updateLooksModifiers();
	updateCharismaModifiers();
	
}

updateScores();
//updateStrengthModifiers();


document.getElementById("rollButton").addEventListener("click", updateScores)
document.getElementById("darkMode").addEventListener("click", darkMode)
document.getElementById("lightMode").addEventListener("click", lightMode)
document.getElementById("greenMode").addEventListener("click", greenMode)

//document.getElementById(attributesArray[counter]).textContent=attributesArray[counter] + ":" + attribValue.toFixed(2);
//document.write("<br>"+attributesArray[counter]+":"+totalRoll+"."+d100+"<br><br><br>");

	
