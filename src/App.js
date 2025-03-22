import React, { Component } from "react";
import Profile from "./components/Profile";
import "./App.css";
import profileImage from "./assets/profile.jpeg"; // Importation de l'image

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "BENIE SYLVESTRE",
        bio: "Développeur Full Stack passionné par JavaScript et React.",
        imgSrc: profileImage, 
        profession: "Développeur Web",
      },
      montre: false,
      timeElapsed: 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeElapsed: prevState.timeElapsed + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      montre: !prevState.montre,
    }));
  };

  render() {
    const { person, montre, timeElapsed } = this.state;

    return (
      <div className="App">
        <h1>Bienvenue sur l'Application Profil</h1>

        {/* Affichage conditionnel du profil */}
        {montre && <Profile {...person} />}

        {/* Bouton placé en bas du profil */}
        <button className="toggle-btn" onClick={this.toggleShow}>
          {montre ? "Cacher le Profil" : "Afficher le Profil"}
        </button>

        {/* Temps écoulé */}
        <p className="timer">Temps écoulé : {timeElapsed} secondes</p>
      </div>
    );
  }
}

export default App;
