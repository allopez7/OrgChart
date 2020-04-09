const personal = require('./data/personal.json')
const organization = require('./data/organization.json')
const team = require('./data/team.json')

const  submit = (firstName, lastName)=>{
  const firstN = firstName && firstName.toLowerCase()
  const lastN = lastName && lastName.toLowerCase()

  const person = personal.find((e)=>{
    return (e.firstName.toLowerCase() === firstN) || (e.lastName.toLowerCase() === lastN)
  })
  if(!person) return res.json({message: "User does not exist"})
  const org = organization[person && person.personId]
  const manageHash = {} 
  const managed = Object.entries(team).filter(([key, value])=>{
    let check = value === (person && person.personId)
    if(check) manageHash[key] = true
    return check 
  }) 
  if(org){
    person['org'] = org
  }
  const response = {
    person: person,
  }
  if(managed.length){
    const manRes = personal.filter((e)=>{
      return manageHash[e.personId] 
    })
    const manResOrg = manRes.map((e)=>{
      if(organization[e.personId]){
        e['org'] = organization[e.personId]
        return e
      }
      return e
    })
    response['managing'] = manResOrg
  }
  return response
}

module.exports = submit 
