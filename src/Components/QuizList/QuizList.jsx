import React, { Component } from "react";
import styles from "./QuizList.module.scss";

export default class QuizList extends Component {
  state = {
    keyWord: "pizza",
    answer: false,
  };
  handleChange = (e) => {
    if (e.target.value.toLowerCase() === this.state.keyWord) {
      this.setState({ answer: true });
    } else this.setState({ answer: false });
  };
  render() {
    return (
      <React.Fragment>
        <div className={styles.quizlist}>
          <p>What is the most popular italian food?</p>
          <p>(hint:pizza)</p>
          <p>Type your answer </p>
          <input className={styles.answerBox}
            type="text"
            onChange={this.handleChange}
          />
          {this.state.answer ? <p className={styles.answer}>Correct answer</p> : <p>Incorrect answer</p>}
        </div>
      </React.Fragment>
    );
  }
}