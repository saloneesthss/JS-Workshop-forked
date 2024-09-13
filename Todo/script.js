// const taskList=document.getElementById("task-list");
// const array=[];

// // console.log(array);

// function inputFieldfn() {
//     const input=document.getElementById("entry-field");
//     const inputtext=input.value;
//     console.log(inputtext);
//     if(inputtext){
//         console.log(array.push(inputtext));
//         array.innerHTML=`<span>${inputtext}</span>`;
//         // taskList.appendChild(array);
//         input.value='';
//     }
//     console.log(array);
//     // console.log("done");
// }
// function clearData() {
//     taskList.innerHTML="";
// }

const taskList = document.getElementById("task-list");

function inputFieldfn() {
  console.log("hello");
  const entryField = document.getElementById("entry-field");
  const task = entryField.value.trim();  //trim removes extra spaces 

  if (task) {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${task}</span>
      <span onclick="removeTask(this)">x</span>
    `;
    taskList.appendChild(li);   // inserts li inside tasklist
    entryField.value = "";
  }
}

function clearData() {
  taskList.innerHTML = "";
}

function removeTask(element) {
  element.parentElement.remove();
}
