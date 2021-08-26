document.forms.add.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target.elements.name.value.trim();
  const price = Number(e.target.elements.price.value);
  const description = e.target.elements.descr.value.trim();

  fetch("http://localhost:3000/memberships", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, price, description }),
  })
    .then((res) => res.json())
    .then((data) => {
      alert("data added successfully");
      document.forms.add.reset();
    })
    .catch((e) => console.log(e));
});
