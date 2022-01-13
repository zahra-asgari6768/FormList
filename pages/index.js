import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CheckOut from './comps/CheckOut'
import {useEffect} from 'react'
import React from 'react'
import Link from 'next/link';
import Document from 'next/document'
export default function Home() {
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "code": "123456",
  "name": "zahra",
  "family": "asgari",
  "email": "zahra.as.6769@mail.com",
  "national_code": "1190249111",
  "mobile": "09331969300",
  "flag": "IR",
  "password": "2221630z",
  "confirmed": "2221630z",
  "reagent_code": "15456452454"

});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://ws.armanbroker.ir/api/v1/user/register", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  return (
     <div>
      
      <CheckOut/>
   </div>
  )
}
