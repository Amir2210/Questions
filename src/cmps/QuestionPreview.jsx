import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
export function QuestionPreview({ question }) {
  const [isShowInfo, setIsShowInfo] = useState(false)
  return (
    <article className='question'>
      <header>
        <h5>{question.title}</h5>
        <button onClick={() => setIsShowInfo(!isShowInfo)} className='question-btn'>{isShowInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
      </header>
      {isShowInfo &&
        <p>
          {question.info}
        </p>}
    </article>
  )
}