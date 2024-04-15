async function getData() {
  const roughData = await fetch("https://fakestoreapi.com/products");
  const trueData = await roughData.json();
  console.log(trueData);
  const container = document.querySelector(".container");
  trueData.forEach((element) => {
    const title = element.title;
    const img = element.image;
    const price = element.price;

    const contentCard = document.createElement(".div");
    contentCard.innerHTML = `<h4>${title}</h4> <img src="${img}"> <p>Price:${price}</p>`;
    container.appendChild(contentCard);
  });
}

getData();
