import { useState } from 'react';
import classes from './QACard.module.css';

const QACard = (props) => {
  const [answerState, setAnswerState] = useState(false);
  const { question, answer } = props.QA;

  const answerShowHandler = () => {
    setAnswerState(!answerState);
  };

  return (
    <div className={classes.card}>
      <div>
        <h3>{question}</h3>
        <i className={!answerState ? 'fa fa-angle-down' : 'fa fa-angle-up'} onClick={answerShowHandler}></i>
      </div>
      <p className={answerState ? classes.open : classes.closed}>{answer}</p>
    </div>
  );
};

export default QACard;
