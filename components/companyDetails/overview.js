import { Icon } from "@iconify/react"
import Image from "next/image"
export default function Overview() {
    return (
        <>
            <div className="text-white font-medium">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut neque quo modi veritatis nam enim deleniti deserunt! Exercitationem reiciendis nisi iusto numquam distinctio, asperiores iste laborum quis! Quos quo saepe aliquam. Cumque quidem amet harum nam hic. 
                A culpa iste illo architecto rem nihil sit, ut rerum deleniti velit, 
                quam mollitia dolores quidem illum repellendus voluptatem! Repudiandae, mollitia magnam. Error expedita ducimus quod rem, impedit et, ab sequi accusamus nisi iure odio provident unde. 
                Excepturi libero maxime inventore iusto labore dicta ibus quam! Consequatur, odio. 
                Commodi ex iusto cupiditate. Voluptate natus a officiis corporis, voluptatibus, aliquid eius eaque laboriosam libero facere quibusdam alias aperiam eos aspernatur ex, earum necessitatibus exercitationem hic voluptatem! Quaerat praesentium vero inventore doloremque error, 
                deserunt voluptatibus sit iusto consectetur ad recusandae illo iste doloribus totam ea aliquam similique dolor laudantium voluptates!
                </p>
            </div>
            <div>
              <h1 className='text-3xl font-semibold my-5'>Founders</h1>
              <div className="flex items-center justify-items-start gap-x-20">
                  <div className="w-1/3 bg-base-200 h-full flex items-center gap-x-3 p-5 rounded-md">
                    <div className="max-w-md max-h-fit">
                      <Image src="/Company_Logo.png" alt="Company Logo" width="120" height="120" className='rounded-full'/>
                    </div>
                    <div>
                      <h2 className='text-xl font-semibold text-white'>Founder's Name</h2>
                      <h3 className='text-md'>Designation at company</h3>
                      <div className="flex items-center gap-x-3 py-3">
                        <Icon icon="akar-icons:linkedin-v1-fill" color="#0e76a8" className="text-2xl cursor-pointer" />
                        <Icon icon="bxl:twitter" color="#1da1f2" className="text-2xl cursor-pointer" />
                      </div>
                    </div>
                  </div>
                  <div className="w-1/3 bg-base-200 h-full flex items-center gap-x-3 p-5 rounded-md">
                    <div className="max-w-md max-h-fit">
                      <Image src="/Company_Logo.png" alt="Company Logo" width="120" height="120" className='rounded-full'/>
                    </div>
                    <div>
                      <h2 className='text-xl font-semibold text-white'>Founder's Name</h2>
                      <h3 className='text-md'>Designation at company</h3>
                      <div className="flex items-center gap-x-3 py-3">
                        <Icon icon="akar-icons:linkedin-v1-fill" color="#0e76a8" className="text-2xl cursor-pointer" />
                        <Icon icon="bxl:twitter" color="#1da1f2" className="text-2xl cursor-pointer" />
                      </div>
                    </div>
                  </div>
              </div>
            </div>
        </>
    )
}