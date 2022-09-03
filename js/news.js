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

const loadnewsdetails = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/01`
    const res = await fetch(url);
    const data = await res.json();
    displaynews(data.data);
}

const displaynews = portalnews => {
    const newsContainer = document.getElementById('news-portal');
    portalnews.forEach(news => {
        const newsDiv = document.createElement('div');
        newsDiv.setAttribute('class', 'row gy-5')
        newsDiv.innerHTML = ` 
        <div class="col-md-4">
        <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${news.title}</h5>
            <p class="card-text">${news.details}</p>
            <p class="card-text"><small class="text-muted">${news.author.name}</small></p>
            <p class="card-text"><small class="text-muted">${news.author.published_date}</small></p>
        </div>
    </div>
        `
        newsContainer.appendChild(newsDiv);
    })

}

loadnewsdetails();


loadCategories();