const studentName = "  aHmAd fAuZaN  ";
const ageText = "17 tahun";
const scoreText = "85.678";
const registrationText = "21-08-2026";

// PART 1 - CLEAN NAME

const cleanName = studentName
    .trim()
    .toLowerCase()
    .split(" ");

cleanName[0] = cleanName[0].toUpperCase();
cleanName[1] = cleanName[1].toUpperCase();

const finalName = cleanName.join(" ");

const username = finalName
    .toLowerCase()
    .split(" ")
    .join(".");

// PART 2 - ANALYZE NAME

const containsAhmad = finalName.includes("Ahmad");
const firstFive = finalName.slice(0, 5);
const replacement = finalName.replace("Ahmad", "Budi");

// PART 3 - AGE

const age = parseInt(ageText);

const currentYear = new Date().getFullYear();
const birthYear = currentYear - age;

// PART 4 - SCORE

const score = parseFloat(scoreText);

const formattedScore = score.toFixed(2);
const roundScore = Math.round(score);
const floorScore = Math.floor(score);
const ceilScore = Math.ceil(score);


// PART 5 - GRADE

let grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "E";
}

// PART 6 - REGISTRATION DATE

const registration = registrationText.split("-");

const day = Number(registration[0]);
const month = Number(registration[1]);
const year = Number(registration[2]);


// PART 7 - CURRENT DATE & TIME

const now = new Date();

const reportYear = now.getFullYear();
const reportMonth = now.getMonth() + 1;
const reportDate = now.getDate();
const reportDay = now.getDay();
const hours = now.getHours();
const minutes = now.getMinutes();


// PART 8 - FORMAT DATE

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear());

    return day + "/" + month + "/" + year;
}


// PART 9 - LUCKY DIC

const dice = Math.floor(Math.random() * 6) + 1;

let diceResult;

if (dice === 6) {
    diceResult = "🔥 JACKPOT!";
} else if (dice === 1) {
    diceResult = "💀 BAD LUCK!";
} else {
    diceResult = "😎 GOOD LUCK!";
}


// BONUS - STATUS

let status;

if (score >= 75) {
    status = "LULUS";
} else {
    status = "BELUM LULUS";
}


// FINAL REPORT

console.log("====================================");
console.log("     🎓 STUDENT DATA PROCESSOR");
console.log("====================================");

console.log("");
console.log("👤 STUDENT");
console.log("------------------------------------");
console.log('Original Name : "' + studentName + '"');
console.log("Clean Name    : " + finalName);
console.log("Username      : " + username);

console.log("");
console.log("🔎 NAME ANALYSIS");
console.log("------------------------------------");
console.log("Contains Ahmad : " + containsAhmad);
console.log("First 5 chars  : " + firstFive);
console.log("Replacement    : " + replacement);

console.log("");
console.log("🎂 AGE");
console.log("------------------------------------");
console.log("Age Text       : " + ageText);
console.log("Age            : " + age);
console.log("Birth Year     : " + birthYear);

console.log("");
console.log("📊 SCORE");
console.log("------------------------------------");
console.log("Original Score : " + scoreText);
console.log("Formatted      : " + formattedScore);
console.log("Round          : " + roundScore);
console.log("Floor          : " + floorScore);
console.log("Ceil           : " + ceilScore);
console.log("Grade          : " + grade);

console.log("");
console.log("📅 REGISTRATION");
console.log("------------------------------------");
console.log("Day            : " + day);
console.log("Month          : " + month);
console.log("Year           : " + year);

console.log("");
console.log("🕐 REPORT GENERATED");
console.log("------------------------------------");
console.log("Year           : " + reportYear);
console.log("Month          : " + reportMonth);
console.log("Date           : " + reportDate);
console.log("Day            : " + reportDay);
console.log("Time           : " + hours + ":" + minutes);

console.log("");
console.log("📅 Report Date : " + formatDate(now));

console.log("");
console.log("🎲 LUCKY DICE");
console.log("------------------------------------");
console.log("Dice           : " + dice);
console.log("Result         : " + diceResult);

console.log("");
console.log("🏆 STATUS");
console.log("------------------------------------");
console.log("Status         : " + status);

console.log("");
console.log("====================================");
console.log("       🚀 PROCESS COMPLETE!");
console.log("====================================");