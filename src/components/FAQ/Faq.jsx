import Button from '../Button/Button';
import Subtitle from '../Subtitle/Subtitle';
import QACard from './QACard';
import classes from './Faq.module.css';

const Faq = () => {
  // sample data
  const questionsAnswers = [
    {
      id: 'q1',
      question: 'What happens after I order?',
      answer:
        'After you place your order, we get to work! Based on the questions you answered in the quiz, we’ll craft your personal plan to your level with recomendations on how to improve.',
    },
    {
      id: 'q2',
      question: 'Where I can access my plan?',
      answer:
        'Your plan will be accessible in Positive Yogas web app with a special link generated after your purchase.',
    },
    {
      id: 'q3',
      question: 'How can I cancel my subscription?',
      answer: 'You can manage or cancel your subscription by writing our customer support hello@positiveyoga.app',
    },
    {
      id: 'q4',
      question: 'Why this program is paid?',
      answer:
        'We are aiming to offer our clients the best experience, which comes with a lot of work.  The entire yoga program is developed by our large team of experts that work long hours to prepare effective, trustworthy and enjoyable content and workouts that can help you to reach your goals. The program is also completely free of ads and is constantly being updated based on your feedback! ',
    },
  ];

  return (
    <section className={classes.faq}>
      <Subtitle>Frequently Asked Questions</Subtitle>
      <div>
        {questionsAnswers.map((QAObj) => (
          <QACard QA={QAObj} key={QAObj.id} />
        ))}
      </div>
      <Button>Get my plan</Button>
    </section>
  );
};

export default Faq;
