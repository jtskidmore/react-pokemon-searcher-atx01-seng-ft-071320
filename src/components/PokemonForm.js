import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state = {
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: ""
    }
  }

  handleSubmit = () => {
    this.props.addPokemon(this.state)
  }

  changeState = (e) => {
    if (e.target.name === "front") {
      this.setState({
        sprites: {
          front: e.target.value,
          back: this.state.sprites.back
        }
      })
    } else if (e.target.name === "back") {
      this.setState({
        sprites: {
          front: this.state.sprites.front,
          back: e.target.value
        }
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  } 



  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={() => this.handleSubmit()}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.changeState}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.changeState}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="front" onChange={this.changeState}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="back" onChange={this.changeState}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
