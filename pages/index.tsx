import React from 'react';
import Link from 'next/link';
import MyLogo from '../components/Icons/MyLogo'

const IndexPage = () => {
  return (
    <div className='text-white flex flex-col items-center justify-center h-screen'>
      <MyLogo width={200} height={200}  />
      <br/>
      {/* <h1 className="text-7xl font-bold mb-12">Futbol Concepts</h1> */}
      {/* <p className="text-2xl mb-16">Start exploring:</p> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 flex w-max flex-center">
        <Link href="/airpods">
          <button className=" pointer z-10 mt-6  rounded-lg border border-[1px] border-[#888888 ]bg-transparent hover:bg-[#fff]  p-4 rounded-lg text-[#fff] hover:text-[#000] transition duration-100 ease-in-out text-center"
                  style={{ width: '200px' }}
          >
            Airpods Concepts
          </button>
        </Link>
        <Link href="/cleats">
          <button className=" pointer z-10 mt-6 rounded-lg border border-[1px] border-[#888888 ]bg-transparent hover:bg-[#fff]  p-4 rounded-lg text-[#fff] hover:text-[#000] transition duration-100 ease-in-out text-center"
                  style={{ width: '200px' }}
          >
            Cleats Concepts
          </button>
        </Link>
        <Link href="/ps5">
          <button className=" pointer z-10 mt-6 rounded-lg border border-[1px] border-[#888888 ]bg-transparent hover:bg-[#fff]  p-4 rounded-lg text-[#fff] hover:text-[#000] transition duration-100 ease-in-out text-center"
                  style={{ width: '200px' }}
          >
            PS5 Concepts
          </button>
        </Link>
        <Link href="/kits">
          <button className=" pointer z-10 mt-6  rounded-lg border border-[1px] border-[#888888 ]bg-transparent hover:bg-[#fff]  p-4 rounded-lg text-[#fff] hover:text-[#000] transition duration-100 ease-in-out text-center"
                  style={{ width: '200px' }}
          >
            Kits Concepts
          </button>
        </Link>
        <Link href="/iphones">
        <button className=" pointer z-10 mt-6 rounded-lg border border-[1px] border-[#888888 ]bg-transparent hover:bg-[#fff]  p-4 rounded-lg text-[#fff] hover:text-[#000] transition duration-100 ease-in-out text-center"
                  style={{ width: '200px' }}
          >
            iPhone Concepts
          </button>
        </Link>
        <Link href="/fifa">
        <button className=" pointer z-10 mt-6  rounded-lg border border-[1px] border-[#888888 ]bg-transparent hover:bg-[#fff]  p-4 rounded-lg text-[#fff] hover:text-[#000] transition duration-100 ease-in-out text-center"
                  style={{ width: '200px' }}
          >
            FIFA Concepts
          </button>
        </Link>

      </div>
    </div>
  );
};

export default IndexPage;