//student grade generator challenge

const marks = prompt("Enter the student's marks (0-100):");

const marksNumber = parseInt(marks);

if (isNaN(marksNumber) || marksNumber < 0 || marksNumber > 100) {
    console.log("Invalid input. Please enter a number between 0 and 100.");
  } else {

  let grade;
  if (marksNumber > 79) {
    grade = "A";
  } else if (marksNumber >= 60) {
    grade = "B";
  } else if (marksNumber >= 50) {
    grade = "C";
  } else if (marksNumber >= 40) {
    grade = "D";
  } else {
    grade = "E";
  }

   console.log(`Grade: ${grade}`);
}




// speed detector challenge

const speed = prompt("Enter the car's speed:");

const speedNumber = parseInt(speed);

if (isNaN(speedNumber) || speedNumber < 0) {
    console.log("Invalid input. Please enter a positive number.");
  } else {

    let demeritPoints = 0;
    if (speedNumber > 70) {
      demeritPoints = Math.floor((speedNumber - 70) / 5);
    }

    console.log(`Points: ${demeritPoints}`);

    if (demeritPoints >= 12) {
        console.log("License suspended");
      }
    }




    // Net salary calculator challenge

    const basicSalary = prompt("Enter the basic salary:");
const benefits = prompt("Enter the benefits:");

const basicSalaryNumber = parseFloat(basicSalary);
const benefitsNumber = parseFloat(benefits);

if (isNaN(basicSalaryNumber) || isNaN(benefitsNumber) || basicSalaryNumber < 0 || benefitsNumber < 0) {
    console.log("Invalid input. Please enter positive numbers.");
  } else {

    const grossSalary = basicSalaryNumber + benefitsNumber;

    const taxableIncome = grossSalary - 24000; // KES 24,000 is the tax-free amount
    let payee = 0;
    if (taxableIncome > 0 && taxableIncome <= 12298) {
      payee = taxableIncome * 0.1;
    } else if (taxableIncome > 12298 && taxableIncome <= 23885) {
      payee = 1229.8 + (taxableIncome - 12298) * 0.15;
    } else if (taxableIncome > 23885 && taxableIncome <= 35472) {
      payee = 3064.7 + (taxableIncome - 23885) * 0.20;
    } else if (taxableIncome > 35472 && taxableIncome <= 47059) {
      payee = 5529.4 + (taxableIncome - 35472) * 0.25;
    } else if (taxableIncome > 47059) {
      payee = 11006.5 + (taxableIncome - 47059) * 0.30;
    }


    let nhifDeductions = 0;
    if (grossSalary >= 6000 && grossSalary <= 7999) {
      nhifDeductions = 150;
    } else if (grossSalary >= 8000 && grossSalary <= 11999) {
      nhifDeductions = 300;
    } else if (grossSalary >= 12000 && grossSalary <= 14999) {
      nhifDeductions = 400;
    } else if (grossSalary >= 15000 && grossSalary <= 19999) {
      nhifDeductions = 500;
    } else if (grossSalary >= 20000 && grossSalary <= 24999) {
      nhifDeductions = 600;
    } else if (grossSalary >= 25000 && grossSalary <= 29999) {
      nhifDeductions = 750;
    } else if (grossSalary >= 30000 && grossSalary <= 34999) {
      nhifDeductions = 850;
    } else if (grossSalary >= 35000 && grossSalary <= 39999) {
      nhifDeductions = 900;
    } else if (grossSalary >= 40000 && grossSalary <= 44999) {
      nhifDeductions = 950;
    } else if (grossSalary >= 45000 && grossSalary <= 49999) {
      nhifDeductions = 1000;
    } else if (grossSalary >= 50000 && grossSalary <= 59999) {
      nhifDeductions = 1100;
    } else if (grossSalary >= 60000 && grossSalary <= 69999) {
    }
}

