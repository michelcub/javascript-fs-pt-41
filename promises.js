const myPromise = (firstNumber, secondNumber) => {
    return new Promise((resolve, reject) => {
        const result = firstNumber + secondNumber;

        if (
            typeof firstNumber !== 'number' ||
            typeof secondNumber !== 'number'
        ) {
            reject('Alguno de los parámetros proporcionados no es un número')
            }

        resolve(result);
    });
}

// myPromise(1, 'a')
//     .then((result) => {
//         console.log(result);
//     })
//     .catch(err => {
//         console.log('ERROR! ', err)
//     });

const fakeApiCall = (ms, label) => {
    return new Promise((resolve) => {
        console.log(label, 'Acabamos de lanzar la llamada')
        setTimeout(() => {
            console.log(label, 'Hemos obtenido la información')
            resolve("Este es el usuario número " + label);
        }, ms);
    });
}

const myApiCalls = [
    {
        timeout: 1000,
        label: 1
    },
    {
        timeout: 2300,
        label: 2
    },
    {
        timeout: 2450,
        label: 3
    },
    {
        timeout: 500,
        label: 4
    },
];

const postResource = (id, body) => {
    return fetch('asdfasdf', {
        method: 'POST',
        body: JSON.stringify(body)
    });
}

const makeManyApiCalls = async () => {
    const users = await Promise.all(
        myApiCalls.map(
            call => postResource(call.timeout, call.label)
        )
    );

    console.log(users)
}


makeManyApiCalls();

// PARALELO -> NO TENEMOS
// SECUENCIAL
// CONCURRENTE