import Head from 'next/head'
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '/styles/Home.module.css';
import Link from 'next/link';
import toast from 'react-hot-toast';

import Loader from '../components/Loader';

export default function Home() {
  return (
    <>
      <div>
        <Loader show />
      </div>
      <button onClick={() => toast.success('hello toast!')}>
        Toast Me!
      </button>
    </>
  );
}
