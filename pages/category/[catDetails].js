import { useEffect, useState } from "react";
import axios from 'axios'
import Head from "next/head";
import Link from "next/link"
import { useRouter } from 'next/router'
import Header from "../header/header";

function CategoryDetails() {
  const router = useRouter()
  console.log(router);
    let [meal, setMeal] = useState({ meals: [] });
   
    
    useEffect(() => {
        if (router.query.catDetails){
            fetchData(router.query.catDetails);
        }
    }, [router.query]);

    const fetchData = async (cate) => {
        const result = await axios(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cate}`,
        );
        setMeal(result.data);
    };
    

    
    return (
        <div>
        <Header />
        <div className="main">
        <Head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
  </Head>
            <div className="main-page">
             {
                    meal.meals.map((i) => (
                        <div className="card shadow-lg p-3 mb-5 bg-body">
                            <img src={(i.strMealThumb)} className="card-img-top" alt={(i.strMeal)}></img>
                            <div className="card-body">
                                <h5 className="card-title">{(i.strMeal)}</h5>
                                <p className="card-text">{(router.query.catDetails)}</p>
                                <Link className=" btn  btn-outline-success" as={`/category/menu/${i.idMeal}`} href={`/category/${i.idCategory}/menu/${i.idMeal}`}>
                                    View Recipes
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </div>
    );
}

export default CategoryDetails;