const { getEmployerRole } = require("../src");  
  const employees = [{
    name: 'Satti',
    role: 'Developer'
}, {
    name: 'Jenny',
    role: 'Sales Associate'
}, {
    name: 'Javid',
    role: 'Human Recommended Reading Assistant'
}]

describe("getEmployerRole", () => {
  test("returns the employee's role in the company", () => {
    expect(getEmployerRole('Javid', employees)).toBe('Human Recommended Reading Assistant');
    expect(getEmployerRole('Satti', employees)).toBe('Developer');
    expect(getEmployerRole('Jenny', employees)).toBe('Sales Associate'); 
  });     
});



