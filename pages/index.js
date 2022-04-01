/* eslint-disable react/jsx-key */
import Head from 'next/head';
import Favicons from './../components/Favicons';
import { iconLinkedIn, iconFacebook, iconInstagram } from '../components/Icon';

const social = [
  {
    name: 'instagram',
    href: 'https://www.instagram.com/maurook789/',
    icon: iconInstagram,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/maurovigliero/',
    icon: iconLinkedIn,
  },
  {
    name: 'facebook',
    href: 'https://www.facebook.com/mvigliero/',
    icon: iconFacebook,
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Mauro Vigliero</title>
        <Favicons />
      </Head>
      <div className='w-full h-screen flex justify-center items-center bg-gray '>
        <div className='h-max w-1/2 border-t-2 border-l-2 border-r-2 border-white rounded-t-lg'>
          <header className='flex items-center  py-6'>
            <div className='mx-4'>
              <img src='/mau.jpg' className='w-16 rounded-full' />
            </div>
            <h1 className='text-white text-lg'>Mauro Vigliero</h1>
          </header>
          <main>
            <div className='py-6 bg-white flex p-6 border-b-2 border-gray'>
              <div className='w-1/2 font-semibold'>E-mail</div>
              <div>mauro.vigliero@loesen.co</div>
            </div>
            <div className='py-6 bg-white flex p-6 border-b-2 border-gray'>
              <div className='w-1/2 font-semibold'>Profesion</div>
              <div>
                Developer <strong> Full-stack </strong>
              </div>
            </div>
            <div className='py-6 bg-white flex p-6 border-b-2 border-gray'>
              <div className='w-1/2 font-semibold flex items-center'>
                <span>Experience</span>
              </div>
              <div>
                <p>Web disign</p>
                <p>Front-end</p>
                <p>Back-end</p>
              </div>
            </div>
            <div className='py-6 bg-white flex p-6 border-b-2 border-gray'>
              <div className='w-1/2 font-semibold flex items-center'>
                <span>Skills</span>
              </div>
              <div className='flex'>
                <div>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>Javascript</p>
                </div>
                <div className='px-8'>
                  <p>React</p>
                  <p>javascript</p>
                  <p>Bootstrap</p>
                </div>
              </div>
            </div>
            <div className='bg-white flex p-6'>
              <div className='w-1/2 font-semibold'>Social</div>
              <div className='flex justify-center items-center'>
                {social.map((Data) => (
                  <a href={Data.href} target='_blank'>
                    <Data.icon className='text-black h-8 mr-6 text-center' />
                  </a>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
