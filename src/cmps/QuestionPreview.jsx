export function QuestionPreview({ question }) {
  return (
    <article className='question'>
      <header>
        <h5>{question.title}</h5>
      </header>
    </article>
  )
}