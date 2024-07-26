function calculateSalary() {
    const basicSalary = parseFloat(prompt("Enter basic salary:"));
    const benefits = parseFloat(prompt("Enter benefits:"));
  
    const NHIF = 500;
    const NSSF = 200;
  
    const grossSalary = basicSalary + benefits;
  
    let payee = 0; 
    const netSalary = grossSalary - NHIF - NSSF - payee;
  
    console.log("Gross Salary: " + grossSalary);
    console.log("NHIF Deductions: " + NHIF);
    console.log("NSSF Deductions: " + NSSF);
    console.log("Payee (Tax): " + payee);
    console.log("Net Salary: " + netSalary);
  }
  
  calculateSalary();
  