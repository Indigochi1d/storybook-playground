import './App.css'
import TagList from './components/TagList'

function App() {

  return (
    <div className='bg-primary w-screen h-screen'>
      <TagList
      tagList={["1~2명", "3~5명", "6~10명"]}
      onTagClick={console.log}
    />
    </div>
  )
}

export default App
