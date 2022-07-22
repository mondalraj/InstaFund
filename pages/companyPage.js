import Head from 'next/head';
import Image from 'next/image';
import { Icon } from '@iconify/react';

export default function Company() {
  return (
    <div className="w-full h-screen flex overflow-hidden">
        <Head>
        <title>Company Name</title>
        </Head>
        <div className="w-1/6 h-full flex flex-col items-center">
            <div className="p-4 m-4 max-w-md max-h-fit">
              <Image src="/Company_Logo.png" alt="Company Logo" width="150" height="150"/>
            </div>
            <div className="my-5 bg-slate-500 h-full p-2 w-4/5 mx-auto rounded-md drop-shadow-xl">
              <h1 class="text-xl p-1">Company Name</h1>
              <div class="my-3">
                <div className="mb-2">
                  <h1 class="font-bold text-lg">Website</h1>
                  <h2>discordapp.com</h2>
                </div>
                <div className="mb-2">
                  <h1 class="font-bold text-lg">Location</h1>
                  <h2>California</h2>
                </div>
                <div className="mb-2">
                  <h1 class="font-bold text-lg">Company Size</h1>
                  <h2>100-200 people</h2>
                </div>
                <div className="mb-2">
                  <h1 class="font-bold text-lg">Total raised</h1>
                  <h2>$478.3 M</h2>
                </div>
                <div className="mb-2">
                  <h1 class="font-bold text-lg">Company Type</h1>
                  <h2 class="badge badge-secondary text-base py-4 mt-2">Technology</h2>
                </div>
                <div className="mb-2">
                  <h1 class="font-bold text-lg">Markets</h1>
                  <div class="flex flex-wrap gap-2">
                    <h2 class="badge badge-secondary">Video Games</h2>
                    <h2 class="badge badge-primary">Gaming</h2>
                    <h2 class="badge badge-accent">AR/VR</h2>
                    <h2 class="badge badge-error text-white">BlockChain</h2>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="w-5/6 h-full my-4">
          <div className="px-10 w-full my-2">
            <div class="flex justify-between items-center">
              <h1 className="text-3xl">Company Name</h1>
              <button className='btn btn-outline btn-success rounded-full text-white px-10'>Invest Now</button>
            </div>
            <p class="m-4 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, enim iste. A maxime tenetur ipsam nihil, obcaecati nobis! Hic, corporis!</p>
            <div className="flex justify-between items-center">
              <h2 class="text-lg">Founded in 2001</h2>
              <div className="flex justify-between items-center gap-x-3">
                <Icon icon="akar-icons:linkedin-v1-fill" color="#0e76a8" class="text-2xl" />
                <Icon icon="bxl:twitter" color="#1da1f2" class="text-2xl" />
                <Icon icon="fe:facebook" color="#4267b2" class="text-2xl" />
                <Icon icon="entypo:link" color="black" class="text-2xl" />
              </div>
            </div>
            <div class="divider"></div> 
          </div>
        </div>
    </div>
  )
}