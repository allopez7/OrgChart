const firstName = document.querySelector('.firstname')
const lastName = document.querySelector('.lastname')
const submit = document.querySelector('.submit')
let display = document.querySelector('.display')

let firstN, lastN 
firstName.oninput = (e)=>{
  firstN = e.target.value
}
lastName.oninput = (e)=>{
  lastN = e.target.value
}
submit.onclick = async ()=>{
  if(!firstN && !lastN) return display.innerHTML = `<h3>Please enter a first or last name</h3>`
  try{
    let res = await fetch('/submit', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({firstName: firstN, lastName: lastN})
    })
    firstName.value = ''
    lastName.value = ''
    const resJson = await res.json()
    if(resJson.message === 'User does not exist') return display.innerHTML = `<h3>User does not exist</h3>`
    const {person, managing} = resJson.response
    if(managing && managing.length){
      managing.unshift(person)
      display.innerHTML = managing.reduce((acc, cv)=>{
        return acc + `
          <h3>${cv.firstName} ${cv.lastName} ${cv.org.title} ${cv.org.organization} ${cv.phoneNumber}</h3>
          `
      }, '')
    }else{
      display.innerHTML = `<h3>${person.firstName} ${person.lastName} ${person['org'].title} ${person['org'].organization} ${person.phoneNumber}</h3>`
    }
  }catch(err){
    console.log('failed to submit first or last name', err)
  }
}
