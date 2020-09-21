import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: false
  }

  renderImage = () => {
    if (this.state.clicked) {
      return this.props.pokemon.sprites["back"]
    } else {
      return this.props.pokemon.sprites["front"]
    }
  }

  render() {
    const pokemon = this.props.pokemon
    console.log(pokemon)
    return (
      <Card>
        <div>
          <div className="image" onClick={() => this.setState(prev => { return {clicked: !prev.clicked }})}>
            <img alt="oh no!" src={this.renderImage()}/>
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
