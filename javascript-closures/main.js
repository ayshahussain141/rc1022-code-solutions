
function graduate(credentials) {
return function(fullName){
  return fullName + ' ' +credentials;
}
}

const medicalSchool = graduate('M.D.')
const lawSchool = graduate('Esq.')

console.log(medicalSchool('Aysha Hussain'));
console.log(lawSchool('Aysha Hussain'));
