// @flow
import React from "react"
import Input from "../components/Input/styled"
import Topbar from "../layout/topbar"

import empty from "../assets/illustration-empty-state@2x.png"
import Flex from "../layout/Flex"

import omdbApi from "../constants/omdbApi"

type PropsType = {
  term: string,
  results: []
}

type StateType = {
  term: string,
  results: []
}

class App extends React.Component<StateType, PropsType> {
  constructor() {
    super()
    this.state = {
      term: "",
      results: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (e: SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault()
    this.loadMovies()
  }

  loadMovies = async () => {
    const { term } = this.state

    const url = `${omdbApi.BASE_URL}${omdbApi.API_KEY}&s=${term}`
    const res = await fetch(url)
    const data = await res.json()

    this.setState({ results: data || [] })
    console.log(data)
  }

  render() {
    const { term } = this.state
    const { results } = this.state

    return (
      <Flex>
        <Flex width={1180}>
          <Topbar />
          <form onSubmit={this.handleSubmit}>
            <Input
              width={1}
              type="text"
              value={term}
              onChange={(e: SyntheticEvent<HTMLInputElement>) =>
                this.setState({ term: e.currentTarget.value })
              }
              placeholder="Search for movies"
            />
          </form>

          {results.length === 0 && (
            <Flex>
              <img width={396} src={empty} alt="Empty state" />
              <p>Don’t know what to search?</p>
              <p>Here’s an offer you can’t refuse</p>
            </Flex>
          )}
        </Flex>
      </Flex>
    )
  }
}

export default App
