const categoriesApi = "https://dummyjson.com/products/categories";

const displayCategories = document.querySelector(".categories");

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

//display categories on web screen
const showCategories = (categories) => {
  displayCategories.innerHTML = categories
    .map(
      (item) =>
        `<a href ="#" class = "text-zinc-700 mr-4 capitalize"> ${item.name}</a>`
    )
    .join("");
};

getCategories();
