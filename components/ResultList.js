import ResultBox from './ResultBox'

const ResultList = ({ results }) => {
  console.log(results)
  return (
    <div className="grid sm:grid md:grid-cols-2 xl:grid-cols-3">
      {results.map((result) => {
        return <ResultBox key={result.key} result={result} />
      })}
    </div>
  )
}

export default ResultList
