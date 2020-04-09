const solution = require('./submit')

describe('Test Submission of inputs', ()=>{
  it('should test for result of one input', ()=>{
    expect(solution('Tom')).toMatchObject({
      person: {
        firstName: 'Tom',
        lastName: 'Apple',
        phoneNumber: '222-222-222',
        address: '2 Main Ave, City, State', 
        personId: '1001',
        org: {title: 'Team Lead', organization: 'Product Engineering'}
      }
    })
  })
  it('should test for result of two inputs', ()=>{
    expect(solution('Tom', 'Apple')).toMatchObject({
      person: {
        firstName: 'Tom',
        lastName: 'Apple',
        phoneNumber: '222-222-222',
        address: '2 Main Ave, City, State', 
        personId: '1001',
        org: {title: 'Team Lead', organization: 'Product Engineering'}
      }
    })
  })
  it('should test for result of manager two inputs', ()=>{
    expect(solution('John', 'Doe')).toMatchObject({
      person: {
        firstName: 'John',
        lastName: 'Doe',
        phoneNumber: '111-111-111',
        address: '1 Main Ave, City, State', 
        personId: '1000',
        org: {title: 'Manager', organization: 'Product Engineering'}
      },
      managing: [
        {
          firstName: 'Tom',
          lastName: 'Apple',
          phoneNumber: '222-222-222',
          address: '2 Main Ave, City, State', 
          personId: '1001',
          org: {title: 'Team Lead', organization: 'Product Engineering'}
        },
        {
          firstName: 'Harry',
          lastName: 'Orange',
          phoneNumber: '333-333-333',
          address: '3 Main Ave, City, State', 
          personId: '1002',
          org: {title: 'Developer', organization: 'Product Engineering'}
        }
      ]
    })
  })
  // wasn't able to test this but should be included
  /*
  it('should test for no inputs', ()=>{
    expect(solution()).toBe(undefined)
  })
  */
})
