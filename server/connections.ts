

export async function getAllCars(){
    const response = await fetch(`http://10.0.0.103:4000/cars`);
    if(!response.ok){
      throw new Error("Someting wnt wrong");
    }
    const Data = await response.json();

    return Data;

}

export async function getSingleCar(id:string){
    const response = await fetch(`http://10.0.0.103:4000/cars?id=${id}`);
    if(!response.ok){
      throw new Error("Someting wnt wrong");
    }
    const Data = await response.json();

    return Data;
}