function placeOrder(order) {
  return new Promise((resolve, reject) => {
    if (order === "coffee") resolve("Order has been accepted");
    reject("Order has been rejected for "+ order);
  });
}
function orderProcessing(process) {
  return new Promise((resolve, reject) => {
    console.log("Order is being Processed ");
    resolve(process + " is served");
  });
}
placeOrder("coffee")
  .then((response) => {
    console.log(response);
    return orderProcessing(response);
  })
  .then((res) => {
    console.log(res);
  }).catch((e)=>console.log(e))
