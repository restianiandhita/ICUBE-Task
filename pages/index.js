import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Head from 'next/head'
import Header from './header/header';

function Home() {
  let [meal, setMeal] = useState({ meals: [] });
  const [query, setQuery] = useState('');
  const [input, setInput] = useState('');
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
      const fetchData = async () => {
          const result = await axios(
              `https://themealdb.com/api/json/v1/1/search.php?s=${query}`,
          );
          setMeal(result.data);
      };
      fetchData();
      const intervalId = setInterval(() => {
          setDateState(new Date());
      }, 1000);
      return () => clearInterval(intervalId);
  }, [query]);

  return <div>
  <Head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
  </Head>
  <Header />
  <div className="main">
      <h1>WELCOME to YOUR MEAL</h1>

      <p>
          {
              dateState.toString()
          }
      </p>
      
      <br></br>
          <div className="d-flex">
              <input className="form-control me-2 navbar-expand-lg"
                  width="100" type="search" placeholder="Type here to find the reciepe..."
                  aria-label="Search"
                  value={input}
                  onChange={event => setInput(event.target.value)}
                  onKeyPress={event => {
                      if (event.key === 'Enter') {
                          setQuery(input)
                      }
                  }} />
              <button className="btn btn-outline-dark" onClick={() => setQuery(input)}>Search</button>
          </div>
          <div className="main-page">
              {
                  meal.meals.map((i) => (
                      <div className="card shadow-lg p-3 mb-5 bg-body">
                          <img src={(i.strMealThumb)} className="card-img-top" alt={(i.strMeal)}></img>
                          <div className="card-body">
                              <h5 className="card-title">{(i.strMeal)}</h5>
                              <p className="card-text">{(i.strCategory)}</p>
                              {/* <Link to={{
                                  pathname: `/detail/${i.idMeal}`,
                              }} className=" btn btn-primary">
                                  View Recipes
                              </Link> */}
                          </div>
                      </div>
                  ))
              }
          </div>
   </div>
   </div>
}

export default Home;
