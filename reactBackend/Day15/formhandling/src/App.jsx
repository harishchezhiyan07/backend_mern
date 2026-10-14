
import { useEffect, useState } from "react";

const App = () => {
  const [saveData, setSaveData] = useState({
    name: "",
    email: "",
    age: ""
  });
  
  

  const [showData, setShowData] = useState([]);

  // Handle input changes
  const valueTake = (event) => {
    const { name, value } = event.target;

    setSaveData({
      ...saveData,
      [name]: value
    });
  };

  // Handle form submission
  const addData = (e) => {
    e.preventDefault();

    if (
      !saveData.name.trim() ||
      !saveData.email.trim() ||
      !saveData.age.trim()
    ) {
      alert("Please fill all the fields");
      return;
    }

    const takeObj = { ...saveData };

    const addArr = [...showData, takeObj];

    setShowData(addArr);
  
    

    // Save data to localStorage
    localStorage.setItem("mydatas", JSON.stringify(addArr));



    alert("Successfully Added");

    // Clear the form
    setSaveData({
      name: "",
      email: "",
      age: ""
    });


    const getData= ()=>{
      const datas=JSON.parse(localStorage.getItem("mydatas"))
    }
    
  };
 useEffect(() => {
  getData();
}, []);


  return (
    <div>
      <h1>Registration Form</h1>

      <form onSubmit={addData}>
        <input
          type="text"
          name="name"
          value={saveData.name}
          placeholder="Enter the Name"
          onChange={valueTake}
        />

        <input
          type="email"
          name="email"
          value={saveData.email}
          placeholder="Enter the Email"
          onChange={valueTake}
        />

        <input
          type="number"
          name="age"
          value={saveData.age}
          placeholder="Enter the Age"
          onChange={valueTake}
        />

        <button type="submit">Register</button>
      </form>

      <h2>Registered Users</h2>

      {showData.map((item, index) => (
        <div key={index}>
          <p>Name: {item.name}</p>
          <p>Email: {item.email}</p>
          <p>Age: {item.age}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default App;
