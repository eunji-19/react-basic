/**
 * Context(컨텍스트)
 * - 컴포넌트 트리를 넘어서 데이터를 공유할 수 있는 방법
 */
import React, { Component } from "react";
import { ThemeContext, themes } from "./ThemeContext";
import ThemedButton from "./ThemedButton";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { theme: themes.light };
    this.toggleTheme = () => {
      this.setState((prev) => ({
        theme: prev.theme === themes.dark ? themes.light : themes.dark,
      }));
    };
  }

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemedButton changeTheme={this.toggleTheme} />
          <ThemeContext.Consumer>
            {(theme) => (
              <div
                style={{
                  height: 300,
                  width: 300,
                  backgroundColor: theme.background,
                }}
              ></div>
            )}
          </ThemeContext.Consumer>
        </ThemeContext.Provider>
        <ThemedButton />
      </div>
    );
  }
}

export default Example;
