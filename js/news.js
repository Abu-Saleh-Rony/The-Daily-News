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
        <li class="list-group-item mx-3"><a onclick="loadnewsdetails(${category.category_id})" href="#">${category.category_name}</a></li>
        `
        categoryContainer.appendChild(categoryDiv);

    });
}

const loadnewsdetails = async (category_id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/0${category_id}`;
    const res = await fetch(url);
    const data = await res.json();
    displaynews(data.data);
}

const displaynews = portalnews => {
    const newsContainer = document.getElementById('news-portal');
    newsContainer.innerHTML = '';
    portalnews.forEach(news => {

        const portalElement = document.getElementById('category-news-found');
        portalElement.innerHTML = ` <p>
        ${portalnews.length} Items found for this Category.</p> `

        const newsDiv = document.createElement('div');
        newsDiv.setAttribute('class', 'row')
        newsDiv.innerHTML = ` 
        <div class="col-md-4">
        <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${news.title}</h5>
            <p class="card-text">${news.details.slice(0, 200)}...</p>


    <div class="d-flex align-items-center justify-content-between">

        <div class="d-flex align-items-center">

            <div>
                <img src="${news.author.img}"
                    alt="Generic placeholder image" class="img-fluid rounded-circle border border-dark border-3"
                    style="width: 70px;">
            </div>

            <div>
                <p class="card-text"><small class="text-muted">${news.author.name}</small></p>
                <p class="card-text"><small class="text-muted">${news.author.published_date}</small></p>
            </div>


        </div>

        <div>
            <i class="fa-solid fa-eye">${news.total_view}</i>
        </div>

        <div>
            <button type="button" class="btn btn-primary">Details News</button>
        </div>


    </div
           
            
        </div >
    </div >
    `
        newsContainer.appendChild(newsDiv);
    })

}

//sloadnewsdetails();


loadCategories();