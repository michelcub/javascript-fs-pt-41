const user = {
    name: "morpheus",
    job: "leader"
}

fetch('https://reqres.in/api/users/395', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
        'Content-type': 'application/json'
    }
})
    .then(res => {
        console.log(res.ok);
        console.log(res.status);

        if (res.status !== 200) {
            // Lógica de error
        }

        return res.json();
    })
    .then(parsedResponse => {
        console.log(parsedResponse);
    });

let users = [];

// ASYNC - AWAIT
const fetchUsers = async () => {
    const serverResponse = await fetch('https://reqres.in/api/users');
    const parsedResponse = await serverResponse.json();
    users = parsedResponse;
    console.log(users);
}

// fetchUsers();