import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchTxt: ''
  }

  componentDidMount() {
    this.fetchPokemons()
  }

  addPokemon = (pokeInfo) => {
    fetch("http://localhost:3000/pokemon",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify( pokeInfo )
      })
      .then(res => res.json())
      .then(data => this.setState({
        pokemons: [...this.state.pokemons, data]
      }))

  }

  fetchPokemons = () => {
    fetch("http://localhost:3000/pokemon")
      .then(res => res.json())
      .then(data => this.setState({
        pokemons: data
      }))
  }

  searchPokes = (e) => {
    this.setState({
      searchTxt: e.target.value,
      pokemons: this.state.pokemons
    })
  }

  render() {

    
    const wantedPokes = this.state.pokemons.filter(poke => poke.name.includes(this.state.searchTxt))


    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search searchPokes={this.searchPokes}/>
        <br />
        <PokemonCollection pokemons={wantedPokes} />
      </Container>
    )
  }
}

export default PokemonPage
