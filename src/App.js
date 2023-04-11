import {useRecoilState, useRecoilValue} from 'recoil'
import { useState } from "react";
import { atomData, atomAge,atomCity, atomEmail,atomName } from './const data/atomData';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Input />
      <LiveUpdate />
      <Display/>
    </div>
  )
}
export default App;

function Input() {
  const [data, setData] = useRecoilState(atomData)
  const [name, setName] = useRecoilState(atomName)
  const [age, setAge] = useRecoilState(atomAge)
  const [email, setEmail] = useRecoilState(atomEmail)
  const [city, setCity] = useRecoilState(atomCity)

  function handleOnClick() {
    setData([...data, {
      name:name, age:age, email:email, city:city
    }])
    setName('')
    setAge('')
    setEmail('')
    setCity('')
  }
  return (
    <div className='inputContainer'>
    Name:<input value={name} onChange={(e)=> setName(e.target.value)} />
    Age:<input type='number' value={age} onChange={(e)=> setAge(e.target.value)} />
    Email:<input value={email} onChange={(e)=> setEmail(e.target.value)}/>
      City:<input value={city} onChange={(e)=> setCity(e.target.value)}/>
      <button className='addBtn' onClick={handleOnClick}>Add User</button>
    </div>
  )
}

function LiveUpdate() {
  
  const [name] = useRecoilState(atomName)
  const [age] = useRecoilState(atomAge)
  const [email] = useRecoilState(atomEmail)
  const [city] = useRecoilState(atomCity)
  return (
  <div className='inputContainer'>
      <p>Name: {name}</p>
  <p>Age: {age}</p>
  <p>Email: {email}</p>
  <p>City: {city}</p>

    </div>
  )

}
function Display() {
  const [data, setData] = useRecoilState(atomData)
  function removeUser(i) {
    const newData = [...data]
    newData.splice(i, 1)
    setData([...newData])
  }
 
  return (
    <div className='displayDiv'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
      
      {
        data.map((user, index) =>(
          <tr>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.email}</td>
            <td>{user.city}</td>
            <td><button onClick={() => removeUser(index)}>❌</button></td>
            </tr>
        ))
        }
        </table>
  </div>
)
}
