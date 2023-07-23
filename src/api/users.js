// save a user to database
export const saveUser = (user) => {
    const currentUser = {
      name: user?.displayName || 'unknown',
      email: user.email,
      image: user?.photoURL,
      university: user?.university || 'unknown',
      address: user?.address || 'unknown'
    };
  
    fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };


// update a user to database
export const updateUser = async(userData) => {
  
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${userData?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
    const data = await response.json();
    return data;
  };