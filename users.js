const allBlocks = document.getElementById("allBlocks");

function displayBlocks(data) {
  data.forEach((item) => {
    const newBlock = document.createElement("div");
    newBlock.setAttribute("id", "block");
    allBlocks.append(newBlock);
    const nameSurname = document.createElement("p");
    nameSurname.setAttribute("id", "name-surname");
    const email = document.createElement("p");
    email.setAttribute("id", "email");
    const membership = document.createElement("p");
    membership.setAttribute("id", "membership");
    newBlock.append(nameSurname, email, membership);
    nameSurname.textContent = `${item.name} ${item.surname}`;
    email.textContent = `Email Address: ${item.email}`;
    membership.textContent = `Membership: ${item.service_id}`;
  });
}

fetch("http://localhost:3000/users/Asc")
  .then((res) => res.json())
  .then((data) => displayBlocks(data));

const orderBtn = document.getElementById("btn");

orderBtn.addEventListener("click", () => {
  const sortText = document.getElementById("sortText").textContent;
  if (sortText.includes("Asc")) {
    document.getElementById("sortText").textContent = sortText.replace(
      "Asc",
      "Desc"
    );
    fetch("http://localhost:3000/users/Desc")
      .then((res) => res.json())
      .then((data) => displayBlocks(data));
  } else {
    document.getElementById("sortText").textContent = sortText.replace(
      "Desc",
      "Asc"
    );
    fetch("http://localhost:3000/users/Asc")
      .then((res) => res.json())
      .then((data) => displayBlocks(data));
  }
});
