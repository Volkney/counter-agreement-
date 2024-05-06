export default function PersonTraveling ({ text }) {
  return (
    <>
      <form>
        <h1>{text}</h1>
        <section className='flex'>
          <div>
            <label>Person Traveling</label>
            <input type='text' name='name' placeholder='Piper Seneca' required />
          </div>
          <div>
            <label>Relationship</label>
            <input type='text' name='relationship' placeholder='self' required />
          </div>
          <div>
            <label>M/F</label>
            <input type='text' name='gender' placeholder='M or F' required />
          </div>
          <div>
            <label>Date of birth</label>
            <input type='date' name='DOB' required />
          </div>
        </section>
        
      </form>
      <button>add a new person</button>
    </>

  )
}
