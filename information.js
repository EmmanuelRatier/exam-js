const information = (the_name, lastName, age) => {
  let canVote = false
  let majeur = 18
  let diff = ''
  console.log(`prenom: ${the_name}`)
  console.log(`nom: ${lastName}`)
  console.log(`age: ${age}`)
  let vote = age >= majeur ? !canVote : canVote
  vote ? diff = age - majeur : diff = majeur - age
  vote ? console.log(`vous êtes majeur depuis ${diff} ans`) : console.log(`vous serez majeur dans ${diff} ans`)
}

information('Sofiane', 'Akermoun', 39)