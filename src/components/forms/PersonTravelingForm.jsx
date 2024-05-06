import React from 'react'

export default function PersonTravelingForm ({ keyIndex }) {
  const showLabels = keyIndex === 0

  return (
    <form>
      <section className='flex'>
        <div>
          {showLabels && <label>Person Traveling</label>}
          <input
            type='text'
            name='name'
            placeholder='Piper Seneca'
            required
          />
        </div>
        <div>
          {showLabels && <label>Relationship</label>}
          <input
            type='text'
            name='relationship'
            placeholder='self'
            required
          />
        </div>
        <div>
          {showLabels && <label>M/F</label>}
          <input
            type='text'
            name='gender'
            placeholder='M or F'
            required
          />
        </div>
        <div>
          {showLabels && <label>Date of birth</label>}
          <input type='date' name='DOB' required />
        </div>
      </section>
    </form>
  )
}
