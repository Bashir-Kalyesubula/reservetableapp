import salad from "/Users/bashirbinbash/frontend/reservetableapp/src/images/greek salad.jpg";
import tacos from "/Users/bashirbinbash/frontend/reservetableapp/src/images/Bruschetta copy.jpg";

function Menu() {
    return(
        <>
        <h1>Our Menu Items</h1>
        <h3>Greek Salad</h3>
        <h6>$10.95</h6>
        <p>fresh lettuce,tomatoes,olives,mixed veggies and your choice of protein</p>
        <div className="image-container">
        <img className="mario-image" src={salad} alt="salad-image"/>
        </div>
        <h3>Avacado Tacos</h3>
        <h6>$5.99</h6>
        <p>Fresh Jicama “Tortilla” Shells Filled with Crispy Avocado, Tomatillo Slaw and Cilantro</p>
        <div className="image-container">
        <img className="mario-image" src={tacos} alt="tacos-image"/>
        </div>
        </>
    )
}
export default Menu;