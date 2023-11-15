import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gif: ''
    };
  }

  componentDidMount() {
  }

  componentDidUpdate() {
    fetch('https://api.giphy.com/v1/gifs/random?api_key=FSHnaiOlYd2NXPdn06Qdh64qxmGRVM69&tag=&rating=g')
      .then(response => response.json())
      .then(data => {
        this.setState({
          gif: data.data.image_url
        });
      });
  }

  render() {
    let contenido;

    if (this.state.gif === '') {
      contenido = <h3>Cargando...</h3>;
    } else {
      contenido = <img src={this.state.gif} alt="GIF"></img>;
    }
    return (
      <div>
        {contenido}
        <button>Haz click aquí para ver un gif!</button>
      </div>
    );
  }
}

export default Gif;