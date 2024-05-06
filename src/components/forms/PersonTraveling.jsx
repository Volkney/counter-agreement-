import AddPerson from '../buttons/AddPerson'
import PersonTravelingForm from './PersonTravelingForm'
import { useState } from 'react'

export default function PersonTraveling () {
  const [persons, setPersons] = useState([])
  function handleNewPerson () {
    const updatedPersons = [...persons,
      <PersonTravelingForm
        key={persons.length + 1}
        text='Person Traveling'
        keyIndex={persons.length + 1}
      />]
    setPersons(updatedPersons)
  }
  return (
    <>
      <h1>Persons Traveling</h1>
      <PersonTravelingForm
        key={0}
        text='Person Traveling'
        keyIndex={0}
      />
      {persons.map((person, index) => (
        <div key={index}>{person}</div>
      ))}
      <AddPerson onClick={handleNewPerson} label='add new person' />
    </>

  )
}
