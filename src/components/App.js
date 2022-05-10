// create your App component here
import react, { useState, useEffect } from "react";

const App = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(resp => resp.json())
    .then(data => setImage(data.message))
  }, [])

  if (!image) {return <p>Loading...</p>}

  return(
    <div>
      <h1>My Dog App</h1>
      <img src={image} alt="A Random Dog"></img>
    </div>
  );
}

export default App;