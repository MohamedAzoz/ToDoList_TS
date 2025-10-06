interface ITask{
  id:number,
  name: string,
  start: Date,
  end: Date
}
interface ITask2{
  name: string,
  start: Date,
  end: Date
}



fetch("https://todolistapi2025.runasp.net/api/Task",{
    method:"GET"
})
.then(res=>res.json())
.then(data=>{
    data.forEach((element: ITask) => {
        document.getElementById("Data")!.innerHTML+=`<tr>
            <td>${element.name}</td>
            <td>${element.start}</td>
            <td>${element.end}</td>
            <td><a onclick="Delete(${element.id})" class="btn btn-danger">Delete</a></td>
        </tr>`;  
        
    });
});

  const nameInput = document.getElementById("name") as HTMLInputElement;
    const startInput = document.getElementById("start") as HTMLInputElement;
    const endInput = document.getElementById("end") as HTMLInputElement;

    async function Add() {
    const Data:ITask2 = {
        name: nameInput.value,
        start: new Date(startInput.value),
        end:new Date(endInput.value)
    };
    console.log(JSON.stringify(Data));
    const result=await fetch(`https://todolistapi2025.runasp.net/api/Task`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(Data)
        });
        
        if (result.ok) {
            console.log("if (result.ok) is true");
            window.location.reload();
        }else{
            console.log(result.status);
            console.log(result.statusText);
            
        }
}

async function Delete(id:number) {
    const result=await fetch(`https://todolistapi2025.runasp.net/api/Task/${id}`,{
         method:"DELETE"
        });
        if (result.ok) {
            window.location.reload();
        }
}
