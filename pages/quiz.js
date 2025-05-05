
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
const questions = [{
  question: "what is the capital of France?",
  options: ["London", "Paris", "Madrid", "Berlin"],
  answer: "Paris"
}, {
  question: "Which planet is known as the Red Planet?",
  options: ["Earth", "Jupiter", "Mars", "Venus"],
  answer: "Mars"

}, {
  question: "Who was the first President of the United States?",
  options: ["George Washington", "Abraham Lincoln", "thomas Jefferson", "John Adams"],
  answer: "George Washington"
},
{
  question: "Which ocean is the largest in the world?",
  options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
  answer: "Pacific Ocean",
},
{
  question: "What is the chemical symbol for water?",
  options: ["WO", "O2", "H2O", "HO2"],
  answer: "H2O",
},
{
  question: "In which year did World War II end?",
  options: ["1940", "1945", "1950", "1939"],
  answer: "1945",
},
{
  question: "Which country is famous for the Great Wall?",
  options: ["India", "China", "Egypt", "Brazil"],
  answer: "China",
},
{
  question: "What gas do plants absorb from the atmosphere?",
  options: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
  answer: "Carbon Dioxide",
},
{
  question: "How many continents are there on Earth?",
  options: ["5", "6", "7", "8"],
  answer: "7",
},
{
  question: "Who wrote the play 'Romeo and Juliet'?",
  options: ["Leo Tolstoy", "William Shakespeare", "Charles Dickens", "Mark Twain"],
  answer: "William Shakespeare",
},
]
function quiz() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [count, setCount] = useState(0)


  const question = questions[current]

  const router = useRouter()


  const answerHandle = () => {
    if (selected === question.answer) {
      setScore(prev => prev + 1);
    }
    setSelected(null)
    if (current + 1 < questions.length) {
      setCurrent(prev => prev + 1);
    } else {
      setShowScore(true)
    }
  }

  useEffect(() => {
    if (count >= 60) {
      router.push("/timeOut")
      return
    }

    const Interval = setInterval(() => {
      setCount(prev => {
        if (count < 60) {
          return prev + 1
        }
      })
    }, 1000);


    return () => clearInterval(Interval)
  }, [count]


  )
  console.log("???????", count)



  console.log("yyyyyyyyy", question)

  if (showScore) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <p className="text-xl text-gray-700">Your Score: {score} / {questions.length}</p>

      </div>
    )
  }


  return (
    <div className='min-h-screen'>
      <h2>{question.question}</h2>
      <div className=''>
        <div className='text-xl bg-blue-50 '>Timer:{count}</div>

      </div>
      <div className='space-y-4 mb-6 rounded-md'>
        {
          question.options.map((option, idx) => (
            <button key={idx}
              onClick={() => setSelected(option)}
              className={`block w-20 px-4 py-2 border rounded ${selected == option ? 'bg-blue-500 text-white' : 'bg-white'}`
              }>
              {option}
            </button>
          ))
        }
      </div>
      <button onClick={answerHandle}
        className={`w-full py-2 rounded-lg font-semibold ${selected
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
      >          {current + 1 === questions.length ? "Finish Quiz" : "Next"}
      </button>

    </div>
  )
}

export default quiz