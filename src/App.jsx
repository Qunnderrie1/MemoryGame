import './App.css';
import { Component } from 'react';
import Card from './Cards';
import Header from './Header';


class App extends Component {
  constructor(props){
    super(props)

    const best = localStorage.getItem("best");

    this.state = {
      score: 0,
      bestScore: best ? best : 0,
      images : [
        {
          image: "./frog1.gif",
          description: "Frog",
          wasViewed: false
        },
        {
          image: "./frog2.gif",
          description: "Frog With A Bell",
          wasViewed: false
        },
        {
          image: "./love.gif",
          description: "Love Heart",
          wasViewed: false
        },
        {
          image: "./loveflower.gif",
          description: "Love Flower",
          wasViewed: false
        },
        {
          image: "./PizzaGuy.gif",
          description: "Pizza Guy",
          wasViewed: false
        },
        {
          image: "./CatRunning.gif",
          description: "Cat Running",
          wasViewed: false
        },
      ]
    }
    this.handler = this.handler.bind(this)

  }

  handler(imageItem , userAnswer){

    if(imageItem.wasViewed === userAnswer){

      let incrementedScore = this.state.score + 1;

      if(incrementedScore === 10){
        // User wins conditions

        alert("Congrats You have won!!!")

        localStorage.setItem("best", incrementedScore)
        this.setState({
          score: 0,
          bestScore : incrementedScore,
          images: this.state.images
        })
        
      }else{
        // KEEP PLAYING CONDITIONS
        this.state.images.map((item) =>{    // eslint-disable-next-line
          if(item.image === imageItem.image){
             item.wasViewed = true;
          }
        });

        const newBest = this.state.bestScore > incrementedScore ? this.state.bestScore : incrementedScore;

        localStorage.setItem("best", newBest)

        this.setState({
          score:incrementedScore,
          bestScore: newBest,
          images: this.state.images
        })
        
      }

    }else{
      // Reset Game
      this.state.images.forEach((item) => {
        item.wasViewed = false;
      });

      console.log(this.state.images)

      this.setState({
        score: 0,
        best: this.state.bestScore > this.state.score ? this.state.bestScore : this.state.score,
        images: this.state.images
      })
    }

  }

  render(){
    const randomIndex = Math.floor(Math.random () * this.state.images.length);
    const selectedImages = this.state.images[randomIndex];

    return (
      <div className="App">
        <Header  title="React Memory Game" 
        objective="Objective: Answer the questions to test your memory. Highest score is 10!"
        score={this.state.score}
        bestScore={this.state.bestScore}/>
        <Card image={selectedImages.image} text={selectedImages.description} />
        <h1 className='headerText'>Have you seen this image?</h1>
        <div className='buttonContainer' >
        <button id='yes' onClick={() => this.handler(selectedImages, true )} className='btn btn-success yesButton'>Yes</button>
        <button id='no' onClick={() => this.handler(selectedImages, false  )} className='btn btn-danger noButton'>No</button>
        </div>
      </div>
    );
  }
}

export default App;
