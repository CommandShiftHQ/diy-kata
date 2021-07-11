const { getEmployerRole } = require("../src");
const { employees } = require("../src/data");


describe("getEmployerRole", () => {

test('get employee role',()=>{

  

  expect(getEmployerRole('Satti', employees)).toBe('Developer')

})


  

    
});
