export default function EmployeeInfo ({ text }) {
  return (
    <form>
      <h1>
        {text}
      </h1>
      <div>
        <label>Name</label>
        <input type='text' name='name' required />
      </div>
      <div>
        <label>Employee Number</label>
        <input type='text' name='EE' required />
      </div>
      <div>
        <label>Position</label>
        <input type='text' name='position' placeholder='Ops' required />
      </div>
      <div>
        <label>Date of hire</label>
        <input type='date' name='DOH' required />
      </div>
      <div>
        <label>Phone</label>
        <input type='tel' name='phone' placeholder='123-4567-8901' required />
      </div>
      <div>
        <label>Email</label>
        <input type='text' name='email' placeholder='piper.seneca@wnco.com' required />
      </div>
      <div>
        <label>Date of birth</label>
        <input type='date' name='DOB' required />
      </div>
    </form>
  )
}
