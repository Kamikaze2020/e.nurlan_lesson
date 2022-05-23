const url = 'https://reqres.in/api';
  export const getAllPost = async () => {
    let res = await fetch(`${url}/users?page=1`);

    return await res.json()
  }

 export  const getPostId = async (id) => {
    let res = await fetch(`${url}/users/${id}`);
    return await res.json();
  }




