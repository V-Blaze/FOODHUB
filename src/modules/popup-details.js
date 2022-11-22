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



