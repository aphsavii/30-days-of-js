// When an async function is called, it returns a Promise. The Promise will be in a pending state until the async function completes execution.
// When the await keyword is encountered, it pauses the execution of the async function, allowing other tasks in the event loop to proceed.
// When the Promise provided to await is resolved, the async function resumes execution from where it was paused.

// Note:- THings inside an async function must be wrappes insd=ide a try catch block so that it can catch any eeror that amy happen .

function myFunc() {
    const data = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1);
      }, 3000);
    });
    return data;
  }
  
  let data;
  
  async function setData() {
    data = await myFunc();
    console.log(data);
    console.log(2);
  }
  
  setData();