import { useEffect, useState } from "react";
import axios from 'axios'
import Head from "next/head";
import { useRouter } from 'next/router'
import Header from "../../header/header";


function MenuDetails () {
    const router = useRouter()
    console.log(router);
    let [meal, setMeal] = useState({ meals: [] });
   
    
    useEffect(() => {
        if (router.query.menuDetails){
            fetchData(router.query.menuDetails);
        }
    }, [router.query]);

    const fetchData = async (cate) => {
        const result = await axios(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${cate}`,
        );
        setMeal(result.data);
    };

    return (
    <div>
    <Header/>
    <Head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
  </Head>
    <div className="main">
            <div className="main-page-details">
                {
                    meal.meals.map((i) => (
                        <div className="card-newrecipe shadow-lg p-3 mb-5 bg-body">
                            <img src={(i.strMealThumb)} className="card-img-top" alt={(i.strMeal)}></img>
                            <div className="card-body">
                                <h5 className="card-title">{(i.strMeal)}</h5>
                                <p className="card-text">{(i.strCategory)}</p>
                            </div>
                        </div>
                    ))
                }
                <div className="main main-details card-details shadow-lg p-3 mb-5 bg-body">
                    {
                        meal.meals.map((i) => (
                            <div>
                                <div className="cars-details">
                                    <h4 className="card-details-title">ID {(i.idMeal)} - {(i.strMeal)} - {(i.strCategory)} - {(i.strArea)}</h4>
                                    <h6 className="card-details-title">Ingredients :</h6>
                                    <p className="card-details-text">
                                        {(i.strIngredient1) ? ` - ${(i.strIngredient1)} : ${(i.strMeasure1)}` : ''}<br></br>
                                        {(i.strIngredient2) ? ` - ${(i.strIngredient2)} : ${(i.strMeasure2)}` : ''}<br></br>
                                        {(i.strIngredient3) ? ` - ${(i.strIngredient3)} : ${(i.strMeasure3)}` : ''}<br></br>
                                        {(i.strIngredient4) ? ` - ${(i.strIngredient4)} : ${(i.strMeasure4)}` : ''}<br></br>
                                        {(i.strIngredient5) ? ` - ${(i.strIngredient5)} : ${(i.strMeasure5)}` : ''}<br></br>
                                        {(i.strIngredient6) ? ` - ${(i.strIngredient6)} : ${(i.strMeasure6)}` : ''}<br></br>
                                        {(i.strIngredient7) ? ` - ${(i.strIngredient7)} : ${(i.strMeasure7)}` : ''}<br></br>
                                        {(i.strIngredient8) ? ` - ${(i.strIngredient8)} : ${(i.strMeasure8)}` : ''}<br></br>
                                        {(i.strIngredient9) ? ` - ${(i.strIngredient9)} : ${(i.strMeasure9)}` : ''}<br></br>
                                    </p>
                                    <h6 className="card-details-title">Instructions :</h6>
                                    <p className="card-details-text">{(i.strInstructions)}</p>
                                    <h6 className="card-details-title">Another Reference :</h6>
                                    <a className="card-details-text-a" href={(i.strYoutube)}>Watch Here ~</a>
                                    <br></br><br></br><br></br>
                                    <h6 className="card-details-title">Tags :</h6>
                                    <p className="card-details-text">{(i.strTags)}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        </div>
        );
}

export default MenuDetails;