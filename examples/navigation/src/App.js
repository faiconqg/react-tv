import React from 'react'
import ReactTV from '../../../src/ReactTVEntry'

class App extends React.Component {
  componentDidMount() {
    if (waterfall) {
      waterfall(document.querySelector('.waterfall'));
    }
  }

  render() {
    let items = []
    for (let i = 1; i <= 10; i++) {
      items.push(
        <div
          class="item"
          onFocus={() => console.log('focus ' + i)}
          onBlur={() => console.log('blur ' + i)}
          onPress={() => console.log('press ' + i)}
          focusable={(i !== 2)}
          focused={(i === 3)}
        >
          {(i !== 2) ? i : null}
        </div>
      )
    }

    return (
      <div id='container'>
        <h1>React-TV Navigation</h1>
        <div class="waterfall">
          {items}
        </div>
      </div>
    )
  }
}

ReactTV.render(<App/>, document.querySelector('#root'))
