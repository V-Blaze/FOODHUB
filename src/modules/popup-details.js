export const fetchFoodDetails = async (id) => {
    const baseUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`;

    try {
        const respose = await fetch(`${baseUrl}${id}`)
        const data = await respose.json()

        if(!respose.ok) {
            return data
        }

        console.log(data.meals)
        return data.meals
    } catch (error) {
        return error
    }
}

const closePopUp = () => {
    const closeBtn = document.querySelector('.close-btn')
    closeBtn.addEventListener('click', ()=> {
        const PopUpDiv = document.querySelector('.pop-up')
        PopUpDiv.style.display = 'none'
    })


}

export const creatPopUp = ({
    strMeal,
    strMealThumb,
    strCategory,
    strSource,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8
}) => {
   
    let newstrMealThumb = strMealThumb.replaceAll("\\", "");

    let PopUpContent = document.createElement('div') 
    PopUpContent.className = 'pop-up-content'
    PopUpContent.innerHTML = `
                <i class="fa-solid fa-circle-xmark close-btn"></i>
                <div class="popUp-top-section">
                    <div>
                        <div class="popUp-image">
                            <img src="${newstrMealThumb}" alt="${strMeal}" class="popUp-item-image">
                        </div>
                            <h3 class="food-name"><span>Name:</span><span>${strMeal}</span> </h3>
                            <h5 class="category"><span>Category:</span>${strCategory}<span></span>  </h5>
                    </div>
                        <div class="ingridients-and-measurments">
                            <div class="ingridients">
                                <h5 class="popUp-item-sub-title">Ingridients</h5>
                                <ol class="ing-list">
                                    <li class="ing-item">${strIngredient1}</li>
                                    <li class="ing-item">${strIngredient2}</li>
                                    <li class="ing-item">${strIngredient3}</li>
                                    <li class="ing-item">${strIngredient4}</li>
                                    <li class="ing-item">${strIngredient5}</li>
                                    <li class="ing-item">${strIngredient6}</li>
                                    <li class="ing-item">${strIngredient7}</li>
                                    <li class="ing-item">${strIngredient8}</li>
                                </ol>
                            </div>
                            <div class="measurments">
                                <h5 class="popUp-item-sub-title">Measurements</h5>
                                <ul class="measure-list">
                                    <li class="measure-item">${strMeasure1}</li>
                                    <li class="measure-item">${strMeasure2}</li>
                                    <li class="measure-item">${strMeasure3}</li>
                                    <li class="measure-item">${strMeasure4}</li>
                                    <li class="measure-item">${strMeasure5}</li>
                                    <li class="measure-item">${strMeasure6}</li>
                                    <li class="measure-item">${strMeasure7}</li>
                                    <li class="measure-item">${strMeasure8}</li>
                                </ul>
                            </div>
                        </div>
                </div>
                    <div class="instructions">
                        <h5 class="popUp-item-sub-title">How to Prepare</h5>
                        <h3 class="instruction-text">${strInstructions}</h3>
                    </div>
                    <div class="food-source">
                        <h5 class="source-text">
                           <span>Source:</span> <a href="${strSource}" target="_blank">${strSource}</a>
                        </h5>
                    </div>
    `

    return PopUpContent
}

export const displayPopUp = async (id) => {
     const PopUpDiv = document.querySelector('.pop-up')
     PopUpDiv.innerHTML = ``

     let foodDetails = await fetchFoodDetails(id)
     PopUpDiv.append(creatPopUp(foodDetails[0]))
     PopUpDiv.style.display = 'block'
     closePopUp()
}
