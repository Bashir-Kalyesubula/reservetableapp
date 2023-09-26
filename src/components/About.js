import mario from "/Users/bashirbinbash/frontend/reservetableapp/src/images/Mario and Adrian A.jpg";

function About() {
    return (
        <>
        <h1>About Little Lemon</h1>
        <p>Little Lemon is a family owned Mediterranean restarant,focused on traditional
          recipes served with a modern twist</p>
          <div className="image-container">
          <img className="mario-image" src={mario} alt="mario's image"/>
          </div>
        </>
    )
}
export default About;