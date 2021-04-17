import React, { useState, useEffect } from 'react';

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [data, setData] = useState([])

  const getData = async () => {
    const result = await fetch(
      'https://api.github.com/users/hacktivist123/received_events'
    )
    const res = await result.json()
    console.log(res)
    setData(res)
  }

  const clearData = () => {
    setData([])
  }

  const submit = () => {
    console.log(data)
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <label>
        Username:
          <input type="text" value={username}
          onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
          <input type="password"
          value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button onClick={() => submit()}>
        Submit
        </button>

      <div>
        TEST:
        <br />
        <button onClick={() => getData()}>
          Get data
        </button>
        <br />
        <button onClick={() => clearData()}>
          Clear data
        </button>
        <br />
        {
          data.map((item, index) => {
            return <ul key={index}>{item.repo.name}</ul>
          })
        }
      </div>
    </div>
  );
}

export default Login;