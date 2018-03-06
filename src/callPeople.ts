export interface People {
  firstName: string,
  givenName?: string
}

export default function callPeople(people: People) {
  console.log(`${people.firstName} ${people.givenName}`)
}
