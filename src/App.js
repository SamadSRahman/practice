import axios from "axios";
import { useEffect, useState, useContext } from "react";
import "./App.css";
import React from "react";

const UserContext = React.createContext();
const useDetails = () => {
  return useContext(UserContext);
};
function App() {
  const [users, setUsers] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [userId, setUserID] = useState(0);
  const [userTitle, setUserTitle] = useState("");
  const [userBody, setUserBody] = useState("");

  useEffect(() => {
    axios.get(url).then((response) => {
      setUsers(response.data);
    });
  }, []);

  const handleClick = (index) => {
    const target = users.filter((ele, ind) => ind == index);
    setUserBody(target[0].body);
    setUserTitle(target[0].title);
    setUserID(target[0].id);
  };

  const value = {
    users,
    userBody,
    userTitle,
    userId,
    handleClick,
  };


  return (
    <div className="App">
      <UserContext.Provider value={value}>
        <PostList />
        <PostDetails />
      </UserContext.Provider>
    </div>
  );
}

export default App;

function PostList() {
  const { users, handleClick } = useDetails();
  return (
    <div className="listWrapper">
      <div className="headingWrapper">
      <h1 className="heading">Post List</h1>
      </div>
      {users.map((user, index) => (
        <div className="titleWrapper" onClick={() => handleClick(index)}>
          <p>{user.title}</p>
        </div>
      ))}
    </div>
  );
}

function PostDetails() {
  const {userBody, userTitle, userId } = useDetails();
  return (
    <div className="detailsWrapper">
      <h1 className="headDetails">Post Details</h1>
      <h2>Id: {userId}</h2>
      <h3></h3>
      <h2>Title: {userTitle}</h2>
      <h3></h3>
      <h2>Body:</h2>
      <h3>{userBody}</h3>
    </div>
  );
}
