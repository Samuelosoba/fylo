const productApi = "https://dummyjson.com/products";
const searchApi = "https://dummyjson.com/products/search?q=";
const categoriesApi = "https://dummyjson.com/products/categories";

const displayCategories = document.querySelector(".categories");
const displayProducts = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const searcResult = document.querySelector(".searchResult");

//async await is an easier way to await the return of an api result. It usually returns a promise that we resolve which can either be fulfilled or rejected. The await keyword can only be used in an async function, and it makes the function to pause the execution and wait for a promise(api result) before it continues

const getCategories = async () => {
  await fetch(categoriesApi)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error status: ${res.status}`);
      }
      console.log(res);

      return res.json();
    })
    .then((data) => {
      console.log(data);

      showCategories(data);
    });
};
const getProducts = async () => {
  await fetch(productApi)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error status: ${res.status}`);
      }
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      showProducts(data.products);
    });
};

const searchProducts = async () => {
  searchInput.addEventListener("keydown", async (e) => {
    const searchQuery = e.target.value.toLowerCase();
    await fetch(searchApi + searchQuery)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error fetching data! status: ${res.status} `);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        showSearchResults(data?.products);
      });
  });
};

//display categories on web screen
const showCategories = (categories) => {
  displayCategories.innerHTML = categories
    .map(
      (item) =>
        `<a href ="#" class = "text-zinc-700 mr-4 capitalize"> ${item.name}</a>`
    )
    .join("");
};

const showProducts = (products) => {
  displayProducts.innerHTML = products
    .map(
      (item) => `
      <div class"w-[220px]"> 
      <img src="${item.images[0]}" alt="${item.title} class" w-full h-[160px]"/>
      <div class"flex flex-col">
      <p class"text-gray-500 text-sm">${item.price}</p>
      <h3 class"text-md">${item.title}</h3>
      </div>
      </div>
     `
    )
    .join("");
};

const showSearchResults = (products) => {
  searcResult.innerHTML = products
    .map(
      (item) => `
    <div class"mt-6 w-[220px] text-start">
    <img src"${item.images[0]}" alt="${item.title}" class= "w-full h-[160px] border border-2 mb-3">
<div class="flex flex-col"> 
<p class="text-sm text-gray-500">${item.price}</p>
<h3 class = "text-md">${item.title}</h3>
</div>

    </div>`
    )
    .join("");
};

getCategories();
getProducts();
searchProducts();
