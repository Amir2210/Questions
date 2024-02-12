import { useState } from 'react'
import data from './data'
import { QuestionsList } from './cmps/QuestionsList'

const App = () => {
  const [questions, setQuestions] = useState(data)
  return (
    <main>
      <QuestionsList questions={questions} />
    </main>
  )
}
export default App
