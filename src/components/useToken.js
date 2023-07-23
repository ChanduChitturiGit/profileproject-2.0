import { useState } from 'react';

function useToken() {

  function getToken() {
    const userToken = localStorage.getItem('token');
    return userToken && userToken
  }

  function getId() {
    const userId = localStorage.getItem('id');
    return userId && userId
  }

  const [token, setToken] = useState(getToken());
  const [id, setId] = useState(getId());

  function saveToken(userToken) {
    localStorage.setItem('token', userToken);
    setToken(userToken);
  };

  function saveId(userId) {
    localStorage.setItem('id',userId);
    setId(userId);
  }

  function removeToken() {
    localStorage.removeItem("token");
    setToken(null);
  }

  function removeId(){
    localStorage.remove("id");
    setId(null);
  }

  return {
    setToken: saveToken,
    token,
    removeToken,
    setId : saveId,
    id,
    removeId

  }

}

export default useToken;