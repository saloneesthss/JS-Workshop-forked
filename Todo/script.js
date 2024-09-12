const array=[];

// console.log(array);

function inputFieldfn() {
    const input=document.getElementById("entry-field");
    const inputtext=input.value;
    console.log(inputtext);
    if(input.value!=''){
        console.log(array.push(inputtext));
    }
    console.log(array);
    // console.log("done");
    input.value='';
}
