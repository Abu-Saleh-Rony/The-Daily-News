const loadCategories = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    displayCategory(data.data.news_category);
}

const displayCategory = categories => {
    const categoryContainer = document.getElementById('category-div');
    categories.forEach(category => {
        const categoryDiv = document.createElement('ul');
        categoryDiv.setAttribute('class', 'd-lg-flex d-md-flex flex-sm-column flex-lg-row flex-md-row align-items-center  justify-content-center')
        categoryDiv.innerHTML = ` 
        <li class="list-group-item mx-3"><a href="#">${category.category_name}</a></li>
        `
        categoryContainer.appendChild(categoryDiv);

    });
}

loadCategories();