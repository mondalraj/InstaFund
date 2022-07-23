import { Icon } from "@iconify/react";
import Image from "next/image";

export default function Investor(){
    return (
        <div className="w-full h-screen flex flex-col">
            <div className="h-1/3 w-2/3 mx-auto py-8">
                <div className="flex justify-center items-center">
                    <div className="w-1/4 flex flex-col justify-center items-center ">
                        <div className="w-full max-h-fit px-12">
                            <Image src="/Company_Logo.png" alt="Image" width="150" height="150" className='rounded-full'/>
                        </div>
                        <h1 className="text-xl font-medium">Designation</h1>
                    </div>
                    <div className="flex flex-col w-3/4">
                        <div className="flex gap-x-12">
                            <h1 className="text-4xl text-white font-bold">Investor Name</h1>
                            <div className="flex justify-between items-center gap-x-3">
                                <Icon icon="eva:linkedin-fill" className="text-3xl cursor-pointer text-black" />
                                <Icon icon="bxl:twitter" className="text-3xl cursor-pointer text-black" />
                                <Icon icon="bxl:discord" className="text-3xl cursor-pointer text-black" />
                            </div>
                        </div>
                        <p className="text-lg my-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iusto mollitia, in voluptas necessitatibus similique vero possimus, 
                            temporibus quibusdam, impedit ipsum quidem dolore natus autem quisquam distinctio consequatur pariatur. Rem perspiciatis non porro
                        </p>
                        <div className="flex gap-x-4">
                            <div className="flex justify-center gap-x-2">
                                <Icon icon="ci:tag" className="text-black text-2xl" />
                                <h3 className="text-md capitalize text-white">entrepreneur</h3>
                            </div>
                            <div className="flex justify-center gap-x-2">
                                <Icon icon="ci:location" className="text-black text-2xl" />
                                <h3 className="text-md capitalize text-white">los angeles</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full h-2/3 bg-base-200">
                <div className="w-1/5">
                    <h1 className="text-2xl font-medium p-5">Team Members</h1>
                    <div className="">
                        
                    </div>
                </div>
                <div className="divider lg:divider-horizontal text-white"></div>
                <div className="w-4/5">
                    <h1 className="text-2xl font-medium px-10 py-5">Investments</h1>
                    <div className="grid grid-cols-3 gap-16 px-10">
                        <div className="flex items-center p-2 bg-base-300 shadow-xl rounded-md">
                            <div className="max-h-fit px-2">
                                <Image src="/Company_Logo.png" alt="Company Logo" width="90" height="90" className='rounded-full'/>
                            </div>
                            <div className="pl-3">
                                <h2 className="text-xl text-white">Company Name</h2>
                                <h3 className="text-xs -mt-0.5 ml-1">Invested in 2001</h3>
                                <div>
                                    <h3 className="text-[0.9rem]">Total fund invested</h3>
                                    <h5 className="text-sm font-bold ml-1 text-white">100 Tez</h5>
                                </div>
                                <div>
                                    <h3 className="text-[0.9rem]">Equity Owned</h3>
                                    <h5 className="text-sm font-bold ml-1 text-white">10%</h5>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center p-2 bg-base-300 shadow-xl rounded-md">
                            <div className="max-h-fit px-2">
                                <Image src="/Company_Logo.png" alt="Company Logo" width="90" height="90" className='rounded-full'/>
                            </div>
                            <div className="pl-3">
                                <h2 className="text-xl text-white">Company Name</h2>
                                <h3 className="text-xs -mt-0.5 ml-1">Invested in 2001</h3>
                                <div>
                                    <h3 className="text-[0.9rem]">Total fund invested</h3>
                                    <h5 className="text-sm font-bold ml-1 text-white">100 Tez</h5>
                                </div>
                                <div>
                                    <h3 className="text-[0.9rem]">Equity Owned</h3>
                                    <h5 className="text-sm font-bold ml-1 text-white">10%</h5>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center p-2 bg-base-300 shadow-xl rounded-md">
                            <div className="max-h-fit px-2">
                                <Image src="/Company_Logo.png" alt="Company Logo" width="90" height="90" className='rounded-full'/>
                            </div>
                            <div className="pl-3">
                                <h2 className="text-xl text-white">Company Name</h2>
                                <h3 className="text-xs -mt-0.5 ml-1">Invested in 2001</h3>
                                <div>
                                    <h3 className="text-[0.9rem]">Total fund invested</h3>
                                    <h5 className="text-sm font-bold ml-1 text-white">100 Tez</h5>
                                </div>
                                <div>
                                    <h3 className="text-[0.9rem]">Equity Owned</h3>
                                    <h5 className="text-sm font-bold ml-1 text-white">10%</h5>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center p-2 bg-base-300 shadow-xl rounded-md">
                            <div className="max-h-fit px-2">
                                <Image src="/Company_Logo.png" alt="Company Logo" width="90" height="90" className='rounded-full'/>
                            </div>
                            <div className="pl-3">
                                <h2 className="text-xl text-white">Company Name</h2>
                                <h3 className="text-xs -mt-0.5 ml-1">Invested in 2001</h3>
                                <div>
                                    <h3 className="text-[0.9rem]">Total fund invested</h3>
                                    <h5 className="text-sm font-bold ml-1 text-white">100 Tez</h5>
                                </div>
                                <div>
                                    <h3 className="text-[0.9rem]">Equity Owned</h3>
                                    <h5 className="text-sm font-bold ml-1 text-white">10%</h5>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center p-2 bg-base-300 shadow-xl rounded-md">
                            <div className="max-h-fit px-2">
                                <Image src="/Company_Logo.png" alt="Company Logo" width="90" height="90" className='rounded-full'/>
                            </div>
                            <div className="pl-3">
                                <h2 className="text-xl text-white">Company Name</h2>
                                <h3 className="text-xs -mt-0.5 ml-1">Invested in 2001</h3>
                                <div>
                                    <h3 className="text-[0.9rem]">Total fund invested</h3>
                                    <h5 className="text-sm font-bold ml-1 text-white">100 Tez</h5>
                                </div>
                                <div>
                                    <h3 className="text-[0.9rem]">Equity Owned</h3>
                                    <h5 className="text-sm font-bold ml-1 text-white">10%</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}