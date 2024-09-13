// const fetchData = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => console.log(json));

//   console.log("response: ", response);

//   return response;
// };

async function fetchData0() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
}

const data = fetchData0();
console.log(data);