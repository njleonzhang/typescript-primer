export interface People {
  firstName: string,
  givenName?: string
}

export default function callPeople(people: People) {
  console.log(`${people.firstName} ${people.givenName}`)
}

export namespace ts {
  export let x = 1
  export let y = '2'
}
