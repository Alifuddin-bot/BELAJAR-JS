const reportDate = new Date();

const students = [
    {
        name: "Ahmad",
        className: "X IPA 1",
        scores: [80, 90, 85],
        attendance: 90,
        hasViolation: false
    },
    {
        name: "Budi",
        className: "X IPA 2",
        scores: [70, 75, 72],
        attendance: 85,
        hasViolation: false
    },
    {
        name: "Candra",
        className: "X IPA 3",
        scores: [60, 65, 68],
        attendance: 70,
        hasViolation: true
    }
];

console.log(`
==============================
🎓 HSI STUDENT REPORT CARD
==============================
Tanggal : ${reportDate.toLocaleString()}
`);

for (let i = 0; i < students.length; i++) {

    const student = students[i];

    let total = 0;

    for (let j = 0; j < student.scores.length; j++) {
        total += student.scores[j];
    }

    const average = total / student.scores.length;

    let grade;

    if (average >= 90) {
        grade = "A";
    } else if (average >= 80) {
        grade = "B";
    } else if (average >= 70) {
        grade = "C";
    } else {
        grade = "D";
    }

    let status;

    if (
        average >= 75 &&
        student.attendance >= 80 &&
        !student.hasViolation
    ) {
        status = "LULUS";
    } else {
        status = "BELUM LULUS";
    }

    console.log(`
📘 Student #${i + 1}
Nama        : ${student.name}
Kelas       : ${student.className}
Nilai       : ${student.scores.join(", ")}
Total       : ${total}
Rata-rata   : ${average.toFixed(2)}
Grade       : ${grade}
Kehadiran   : ${student.attendance}%
Pelanggaran : ${student.hasViolation ? "Ya" : "Tidak"}
Status      : ${status}
-----------------------------------
`);
}