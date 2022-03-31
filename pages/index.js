import Head from 'next/head';

import { iconLinkedIn, iconFacebook, iconInstagram } from '../components/Icon';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mauro Vigliero</title>
      </Head>
      <div className='w-full h-full justify-center content-center'>
        <div>
          <header className='flex'>
            <img src='/mau.jpg' className='w-8 rounded-full' />
            <h1 className='text-800'>Mauro Vigliero</h1>
          </header>
          <main className='border-style: solid'>
            <div className='p-4 bg-white text-800 flex'>
              <div className='w-1/4'>E-mail</div>
              <div>mauro.vigliero@loesen.co</div>
            </div>
            <div className='p-4 bg-white text-800 flex'>
              <div className='w-1/4'>Profesion</div>
              <div>
                Developer <strong> Full-stack </strong>
              </div>
            </div>
            <div className='p-4 bg-white text-800 flex'>
              <div className='w-1/4'>Experience</div>
              <div>
                <span>Web disign</span>
                <span>Front-end</span>
                <span>Back-end</span>
              </div>
            </div>
            <div className='p-4 bg-white text-800 flex'>
              <div className='w-1/4'>Skills</div>
              <div className='flex flex-wrap'>
                <span className='p-1 bg-800 text-white m-2'>
                  Html - css - javascript
                </span>
                <span className='p-1 bg-800 text-white m-2'>
                  Mongodb - mysql
                </span>
                <span className='p-1 bg-800 text-white m-2'>
                  Bootstrap - React - Vue
                </span>
              </div>
            </div>
            <div className='p-4 bg-white text-800 flex'>
              <div className='w-1/4'>Social</div>
              <div>
                {social.map((data) => {
                  <data.icon
                    alt={`Contacto a la red social ${data.name}`}
                    href={data.href}
                  />;
                })}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

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
