import Link from 'next/link'
import { CiFacebook, CiInstagram, CiLinkedin } from 'react-icons/ci'

export default function BottomFooter() {
    return (
        <>
            <div className="w-full flex flex-col bg-sH text-white justify-center 
            items-center p-4 text-xs">
                <h2 className='text-3xl text-pH font-bold '>FIN INFOLIB</h2>
                <div className=' w-full p-4 flex justify-center items-center pt-6 pb-6 md:flex-col'>
                    <div className='flex text-[14px] text-gray-400 flex-col  w-full gap-y-3 list-none md:flex md:flex-row
                    md:gap-x-10 md:pl-14 md:pr-10 justify-center items-center
                   
                   '>
                        <li><Link href={'/about'}>About</Link></li>
                        <li><Link href={'/itservices'}>It Services</Link></li>
                        <li><Link href={'/outsourcing'}>Out Sourcing</Link></li>
                        <li><Link href={'/customer-support'}>Customer Support </Link></li>
                    </div>
                    <div className='flex text-[14px] text-gray-400 flex-col  w-full gap-y-3 list-none justify-center items-center
                    md:flex md:flex-row
                    md:gap-x-10 md:pl-10 md:pr-10 md:pt-6'>
                        <li><Link href={'/accessibility'}>Accessibility</Link></li>
                        <li><Link href={'/disclaimer'}>Disclaimer</Link></li>
                        <li><Link href={'/privacy-policy'}>Privacy Policy</Link></li>
                        <li><Link href={'/terms-conditions'}>Terms Conditions</Link></li>
                    </div>

                </div>


                <div className="w-2/5 pb-4 lg:w-1/6">
                    <ul className='flex justify-between'>

                        <a className='text-white bg-gray-800 rounded-md w-fit h-fit px-1 py-1 text-3xl font-bold'><CiFacebook /></a>
                        <a className='text-white bg-gray-800 rounded-md w-fit h-fit px-1 py-1 text-3xl font-bold'><CiInstagram /></a>
                        <a className='text-white bg-gray-800 rounded-md w-fit h-fit px-1 py-1 text-3xl font-bold'><CiLinkedin /></a>
                    </ul>

                </div>
                <label className='text-center text-zinc-300 mt-2'>Copyright © 2023 | All Rights Reserved</label>
            </div>
        </>
    )
}