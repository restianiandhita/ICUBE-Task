import { useEffect, useState } from "react";
import axios from 'axios'
import Head from "next/head";
import Link from "next/link";
import Header from "./header/header";

function Category() {
    let [categ, setCat] = useState({ categories: [] });
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://www.themealdb.com/api/json/v1/1/categories.php',
            );
            setCat(result.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <Header />
        
        <div className="category">
        <Head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
  </Head>
            {
                categ.categories.map((i, idCategory) => (
                    <div className="card shadow-lg p-3 mb-5 bg-body">
                        <img src={(i.strCategoryThumb)} className="card-img-top" alt={(i.strMeal)}></img>
                        <div className="card-body">
                            {
                                (idCategory % 2 === 0) ?
                                    <h5 className="card-title" style={{ fontStyle: 'italic' }}>{(i.strCategory)}</h5>
                                    :
                                    <h5 className="card-title" style={{ fontWeight: 'bolder' }}>{(i.strCategory)}</h5>
                            }
                            <p className="card-text">{(i.strCategoryDescription.substring(0, 250) + " ...")}</p>
                            <a className="btn  btn-outline-success"> <Link as={`/category/${i.strCategory}`} href={`/category/${i.idCategory}`}>
                                View More
                            </Link></a>
                        </div>
                    </div>
                ))
            }
        </div>
        </div>
    );
}

export default Category;