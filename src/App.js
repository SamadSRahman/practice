
import './cards.css';
import { UserOne, UserTwo } from './cards';

function App() {
  const User1 = {
    name: "Amit",
    image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg",
    designation: "Graphic Designer",
    description: "Highly creative and multitalented Graphic Designer with extensive experience in multimedia, marketing, and print design."
  }
  const User2 = {
    name: "Ruhi",
    image: "https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "perform a variety of music for recordings and live audiences. They audition for positions in choruses, orchestras, bands, plays, 				and other types of music groups. ",
    designation: "Singer"
  }

  return (
    <div className="App">

      <UserOne image={User1.image} name={User1.name} designation={User1.designation} description={User1.description} />
      <UserTwo image={User2.image} name={User2.name} designation={User2.designation} description={User2.description} />

    </div>
  );
}

export default App;
