const allBlocks = document.getElementById("allBlocks");

fetch("http://localhost:3000/memberships")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      const newBlock = document.createElement("div");
      newBlock.setAttribute("id", "block");
      allBlocks.append(newBlock);
      const blockTop = document.createElement("div");
      blockTop.setAttribute("id", "block-top");
      const deleteButton = document.createElement("div");
      deleteButton.setAttribute("id", "delete");
      newBlock.append(blockTop, deleteButton);
      const priceTitle = document.createElement("div");
      priceTitle.setAttribute("id", "price-title");
      const description = document.createElement("p");
      description.setAttribute("id", "description");
      blockTop.append(priceTitle, description);
      const price = document.createElement("p");
      price.setAttribute("id", "price");
      const title = document.createElement("p");
      title.setAttribute("id", "title");
      priceTitle.append(price, " ", title);
      const icon = document.createElement("i");
      icon.setAttribute("class", "fas fa-trash");
      icon.setAttribute("id", "icon");
      deleteButton.append(icon);
      price.textContent = `$ ${item.price}`;
      title.textContent = item.name;
      description.textContent = item.description;
      icon.addEventListener("click", () => {
        const delConfim = confirm("Do you want to delete this item?");
        if (delConfim) {
          fetch("http://localhost:3000/memberships/" + item._id, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              newBlock.remove();
            });
        }
      });
    });
  });
