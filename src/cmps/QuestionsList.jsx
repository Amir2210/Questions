import { QuestionPreview } from './QuestionPreview';
export function QuestionsList({ questions }) {
  return (
    <section className='container'>
      <h1>Questions</h1>
      {questions.map((question) => <QuestionPreview key={question.id} question={question}></QuestionPreview>)}
    </section>
  )
}
