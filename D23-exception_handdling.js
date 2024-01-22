function myFunc() {
  try {
    const data = new Promise((resolve, reject) => {
      setTimeout(() => {
        let res = false;
        if (res) resolve(1);
        reject("Error ");
      }, 3000);
    });
    return data;
  } catch (err) {
    console.log(err);
  } finally {
    console.log("finally code executed");
  }
}

async function getData() {
    let res=await myFunc();
    console.log(res);
}

getData();