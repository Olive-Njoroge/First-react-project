import profilePic from './assets/WhatsApp Image 2024-09-25 at 09.57.29_b8974a82.jpg'

function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="profile picture"></img>
            <h2>Olive Njoroge</h2>
            <p>I am a student at JKUAT taking Mathematics and Computer Science</p>
        </div>
    );
}
export default Card