import './style.css';
import {fetchFoodDetails, displayPopUp} from './modules/popup-details.js'

const button = document.querySelector('.see-more')
button.addEventListener('click', (e) => {
    e.preventDefault()
    displayPopUp(button.id)
})
// window.onload = () =>{
//     fetchFoodDetails('52994')
// }
