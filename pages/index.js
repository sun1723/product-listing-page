import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import clientPromise from "../lib/mongodb";
import React, {useState, useEffect} from 'react';
import {SearchBox, ProductList, PopoverFilter} from './pagePartial';

export default function Home({restaurants}) {  
  const [searchKey, setSearchKey] = useState('');
  const [products, setProducts] = useState(restaurants);
  const [menuList, setMenuList] = useState([]);
  const [menuKey, setMenuKey] = useState('');

  useEffect (() => {
    //get all type
    getAllType();
  },[])

  useEffect(() => {
    searchHandler();
  },[searchKey,menuKey])

  //getAllType: get all types from list
  const getAllType = () => {
    let newList = [];
    products.map(pro => {
      if(!newList.includes(pro.type_of_food))
        newList.push(pro.type_of_food);
    });
    setMenuList(newList);
  }

  //onChange Event for the search Input field
  const onChangeSearch = (val) => {
    setSearchKey(val);
  }

  const refreshProducts =  () => {
    setProducts(products);
  }

  const onChangeValue = (val)=> {
    console.log(val)
    setMenuKey(val)
  }

  const searchHandler = () => {
    console.log(searchKey," -------", menuKey)
    let newList = [];
    newList = restaurants.map(item => item).filter(item => item.name.includes(searchKey));
    if(menuKey ){
      newList = newList.filter(item => item.type_of_food == menuKey)
    }
    setProducts(newList);
  }

  return (
    <div className="container">
      {console.log(products)}
      <Head>
        <title>properties</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="properties" />
      <main style={{width: '100%',padding: '0 0',}}>
        <div style={{display: "flex", width: '80%', justifyContent: 'center', alignItems: 'center'}}>
          <SearchBox 
          value={searchKey}
          onChangeEvent={onChangeSearch}
          />
          <PopoverFilter menuList={menuList} onChangeValue={onChangeValue} />
        </div>
        <ProductList
          products= {products}
        />
      </main>

      <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {
  const client = await clientPromise;

  const db = client.db("hotels");

  let hotels = await db.collection("hotels").find({}).toArray();
  hotels = JSON.parse(JSON.stringify(hotels));
  let restaurants = await db.collection("restaurants").find({}).toArray();
  restaurants = JSON.parse(JSON.stringify(restaurants));

  let items = {
    hotels: hotels,
    restaurants: restaurants
  }

  return {
    props: { restaurants },
  };
}
