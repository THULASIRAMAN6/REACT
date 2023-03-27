import { userValidation } from './Validation';
function App() {

  const createUser = async (event)=>{
    event.preventDefault()
    let formData = {
      name : event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value
    }
    console.log(formData)
    const isValid = await userValidation.isValid(formData)
    console.log(isValid)
  }

  return (
    <div className="container">
      <form className="form" onSubmit={createUser}>
      <input type="text" placeholder="First name"/>
      <input type="text" placeholder=" Last name"/>
      <input type="text" placeholder="Roll No"/>
      <select name="Department" id="Department">
      <option value="ENTER YOUR DEPARTMENT">Enter Your Department</option>
    <option value="AIDS">AIDS</option>
    <option value="CSBS">CSBS</option>
    /
  </select>
      <input type="text" placeholder="Mail ID eg: thulasi@gmail.com"/>
      <select name="CURRENT SEMESTER" id="CURRENT SEMESTER">
      <option value="CURRENT SEMESTER">Enter Your Current Semester</option>
    <option value="I">I</option>
    <option value="II">II</option>
    <option value="III">III</option>
    <option value="IV">IV</option>
    /
  </select>/
      <input type="password" placeholder="Enter your password"/>
      <input type="date" id="birthday" name="birthday">   
      </input>
      /
      <input type="text" placeholder="courses learned"/>
      <input type="text" placeholder="languages known"/>
      <input className="submit" type="submit"/>

      
      </form>
    </div>
  );
}

export default App;