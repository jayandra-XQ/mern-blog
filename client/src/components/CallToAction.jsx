

import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about new Technology?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these resources with Wired......
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.wired.com/" target='_blank' rel='noopener noreferrer'>
                    WIRED
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://imgs.search.brave.com/0OVTpcEu-DeDmThrFYBBaLfK0-h23XSuQR4faPAGtFo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzE0Lzg2LzM4/LzM2MF9GXzMxNDg2/Mzg3NV9pTWVsTVlY/TURIUzRMTzBSV0J2/ZXI0RDRKZXVvaGJW/Ri5qcGc" />
        </div>
    </div>
  )
}