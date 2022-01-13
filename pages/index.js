import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CheckOut from './comps/CheckOut'
import {useEffect} from 'react'
import React from 'react'
import Link from 'next/link';
export default function Home() {

  return (
    <div>
        {/* <style jsx>{`
                @font-face {
                  font-family: 'iranyekan !important';
                  src: url('../fonts/BYekan.eot');
                }
              
        `}</style>  */}
      <CheckOut/>
    </div>
  )
}
