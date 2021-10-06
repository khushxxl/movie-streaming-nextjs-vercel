import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import ResultList from '../components/ResultList'
import Scroller from '../components/Scroller'
import requests from '../utils/requests'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import DetailPage from '../components/DetailPage'

export default function Home({ results }) {
  console.log(results)
  return (
    <div className="">
      <Head>
        <title>Watch Now</title>
      </Head>
      <Navbar />
      <Scroller />
      <ResultList results={results} key={results.id} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    } `,
  ).then((res) => res.json())
  return {
    props: {
      results: request.results,
    },
  }
}
