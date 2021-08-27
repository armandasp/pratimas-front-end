document.forms.add.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target.elements.username.value.trim();
  const surname = e.target.elements.lastname.value.trim();
  const email = e.target.elements.email.value.trim();
  const service_id = e.target.elements.choose.value;
  console.log(name, surname, email, service_id);
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, surname, email, service_id }),
  })
    .then((res) => res.json())
    .then((data) => {
      alert("data added successfully");
      document.forms.add.reset();
    })
    .catch((e) => console.log(e));
});
