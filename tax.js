function netSalaryCalculator() {
  const basicSalary = parseFloat(prompt("Enter the basic salary:"));
  const benefits = parseFloat(prompt("Enter the benefits:"));

  const taxRate = 0.1;
  const nhifDeductions = 0.02;
  const nssfDeductions = 0.06;

  const grossSalary = basicSalary + benefits;
  const tax = grossSalary * taxRate;
  const nhif = grossSalary * nhifDeductions;
  const nssf = grossSalary * nssfDeductions;

  const netSalary = grossSalary - (tax + nhif + nssf);

  return `Gross Salary: ${grossSalary}\nTax: ${tax}\nNHIF: ${nhif}\nNSSF: ${nssf}\nNet Salary: ${netSalary}`;
}

console.log(netSalaryCalculator());
