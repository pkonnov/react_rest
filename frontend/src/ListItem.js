import React, { Component } from "react";
import { render } from "react-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classnames from "classnames";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: new Array(20).fill(0),
      isListShown: false,
      counter: 0
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { counter, items, isListShown } = this.state;
    if (isListShown && prevState.isListShown !== isListShown) {
      const interval = setInterval(() => {
        if (counter >= items.length) {
          clearInterval(interval);
          return;
        }
        this.setState(({ counter }) => ({ counter: ++counter }));
      }, 200);
    }
  }

  render() {
    const { isListShown, items, counter } = this.state;

    const itemsToRender = items.slice(0, counter).map((item, i) => (
      <div className="item" id={i} key={i}>
        {`Item ${i}`}
      </div>
    ));

    return (
      <main className="main-content">
        <div className={classnames("btn-container", isListShown && "hidden")}>
          <button
            className="btn-show"
            onClick={() => this.setState({ isListShown: true, counter: 0 })}
          >
            Show list
          </button>
        </div>
        <header>
          <button
            className="btn-close"
            onClick={() => this.setState({ isListShown: false })}
          >
            +
          </button>
        </header>
        <ReactCSSTransitionGroup
          transitionName="item"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
        >
          {isListShown && itemsToRender}
        </ReactCSSTransitionGroup>
      </main>
    );
  }
}

render(<App />, document.getElementById("root"));
export default App;
