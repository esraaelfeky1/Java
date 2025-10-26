const container = document.getElementById("product-container");
const filterButtons = document.querySelectorAll(".filters button");

function displayProducts(items) {
  container.innerHTML = "";

  items.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3 class="product-title">${product.title}</h3>
      <p class="product-desc">${product.description}</p>
      <p class="price">$${product.price}</p>
      <div class="badges">
        ${getBadges(product)}
      </div>
    `;

    container.appendChild(card);
  });
}

function getBadges(product) {
  let badges = "";

  if (product.price < 100) {
    badges += `<span class="badge big-discount">special offer</span>`;
  }

  if (product.title.includes("Jacket") || product.title.includes("Premium")) {
    badges += `<span class="badge special-offer">Special Offer</span>`;
  }

  if (!product.inStock) {
    badges += `<span class="badge not-available">غير متاح الأن</span>`;
  }

  switch (product.category) {
    case "men's clothing":
      badges += `<span class="badge one-year-warranty">خصم 20% على الملابس</span>`;
      break;
    case "electronics":
      badges += `<span class="badge new-product">ضمان سنه كاملة </span>`;
      break;
    case "tools":
      badges += `<span class="badge new-product">شحن مجاني </span>`;
      break;
    case "أي فئه أخرى ":
      badges += `<span class="badge new-product">منتج جديد</span>`;
      break;
  }

  return badges;
}

displayProducts(products);

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;

    if (category === "all") {
      displayProducts(products);
    } else {
      const filtered = products.filter(p => p.category === category);
      displayProducts(filtered);
    }
  });
});
