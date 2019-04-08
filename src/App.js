import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {

  state = {
    burgers: [],
    currentBurger: [],
  }

  componentDidMount() {
    this.burgerFetch()
  }

  burgerFetch = () => {
    return fetch('http://localhost:3001/burgers')
      .then(res => res.json())
      .then(burgerJSON => {

        this.setState({
          burgers: burgerJSON
        }, () => console.log("the start " + this.state.burgers))

      })
  }



  changeCategory = (burger) => {
    const config = {
      method: 'PATCH',
      body: JSON.stringify(burger),
      headers: {
        "Content-Type": "application/json"
      }
    }


    fetch(`http://localhost:3001/burgers/${burger.id}`, config)
  }



  handleBurgerClick = (burger) => {

    this.setState({
      currentBurger: burger
    }, () => console.log(this.state))
  }

  handleFilter = (e) => {

    console.log("it changed to Relatable")
    if (e.target.value === "Relatable") {
      console.log("it changed to Relatable")
      this.burgerFetch()
        .then(idx => {
          let state = this.state.burgers.filter(burger => burger.category === "Relatable")
          this.setState({
            burgers: state
          })
        })

    } else if (e.target.value === "Bougie") {
      this.burgerFetch()
        .then(idx => {
          let state = this.state.burgers.filter(burger => burger.category === "Bougie")
          this.setState({
            burgers: state
          })
        })
    } else {
      fetch('http://localhost:3001/burgers')
        .then(res => res.json())
        .then(burgerJSON => {
          this.setState({
            burgers: burgerJSON
          })
        })
    }
  }

  handleCategoryChange = (e) => {
    const stateCopy = [...this.state.burgers]
    let foundBurger = stateCopy.find(burger => burger.id === +e.target.id)

    if (e.target.value === "Bougie" && foundBurger) {
      foundBurger.category = "Bougie"
    } else if (e.target.value === "Relatable" && foundBurger) {
      foundBurger.category = "Relatable"
    }

    this.setState({
      burgers: stateCopy
    }, () => this.changeCategory(foundBurger))
  }




  render() {
    console.log(" hi 0 " + this.state.burgers)

    return (
      <div id="App">
        <BurgerContainer handleFilter={this.handleFilter} handleShow={this.handleBurgerClick} burgers={this.state.burgers} />
        <BurgerDisplay handleCategoryChange={this.handleCategoryChange} burger={this.state.currentBurger} />
      </div>
    );
  }
}

export default App;