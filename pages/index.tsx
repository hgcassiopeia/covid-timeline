import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="px-8 mt-20 text-center">
      <Head>
        <title>COVID Timeline Generator</title>
        <meta name="description" content="COVID Timeline Generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto">
        <h1 className="text-yellow text-3xl pb-20">COVID Timeline Generator</h1>

        <div className="">
          <div className="flex justify-between py-5">
            <h2 className="flex items-center text-yellow text-2xl">Patient Information</h2>
            <button className="flex
                bg-red
                items-center
                space-x-1
                py-2
                px-3
                text-white
                rounded
                border border-gray-700
                hover:text-gray-900 hover:bg-gray-200
                transition
                duration-300">Remove Patient</button>
          </div>

          <div className="grid md:grid-cols-4 grid-cols-2 gap-4 border rounded border-white p-6 text-left">
              <div>
                <p className="text-white">Gender</p>
                <select className="w-full border rounded p-2">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div>
                <p className="text-white">Age</p>
                <input type="number" className="w-full border rounded p-2" />
              </div>
              <div className="col-span-2">
                <p className="text-white">Occupation</p>
                <input type="text" className="w-full border rounded p-2" />
              </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between py-5">
            <h2 className="flex items-center text-yellow text-2xl">Timeline</h2>
          </div>
          <div className="grid md:grid-cols-7 grid-cols-1 md:gap-4 gap-6">
            <div className="md:col-span-4 border rounded border-yellow p-5">
              <div className="flex justify-center mb-10">
                <div className="bg-yellow rounded-full py-3 px-12">
                  <p className="text-xs">Female</p>
                  <p className="text-2xl">32 Years old</p>
                  <p className="text-xs">Software Engineer</p>
                </div>
              </div>
              <div>
                {/* <div className="flex items-center">
                  <h3 className="text-font-color mr-5">Classroom</h3>
                  <div className="border-l-2 mt-10">
                    <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                      <div className="w-5 h-5 bg-blue absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                      <div className="w-10 h-1 bg-blue absolute -left-10 z-0"></div>
                      <div className="flex-auto">
                        <h1 className="text-lg">Day 1</h1>
                        <h1 className="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
                        <h3>Classroom</h3>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="flex items-center">
                  <ul>
                    <li>
                      <span></span>
                      <div className="title">comment #01</div>
                      <div className="info">the best animation , the best toturials you would ever see .</div>
                      <div className="name">- dr. mohamed -</div>
                      <div className="time">
                        <span>JUN, 17<sup>th</sup></span>
                        <span>12:00 AM</span>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* <div className="flex items-center">
                  <h3 className="text-yellow text-sm mr-5">11/01/2022</h3>
                  <div className="border-l-2">
                    <div className="mb-5 transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue text-white rounded flex-col md:flex-row space-y-4 md:space-y-0">
                      <div className="w-3 h-3 bg-blue absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                      <div className="w-10 h-1 bg-blue absolute -left-10 z-0"></div>
                      <div className="flex-auto">
                        <h1 className="text-lg">Day 1</h1>
                        <h1 className="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
                        <h3>Classroom</h3>
                      </div>
                    </div>
                  </div>
                </div> */}
                
              </div>
              <div className="text-left mt-16">
                <h2 className="text-yellow text-lg mb-3">Visited Places</h2>
                <p className="text-white text-sm">Central Rama III</p>
              </div>
            </div>
            <div className="md:col-span-3 border rounded border-white p-5">
              <div className="grid md:grid-cols-3 grid-cols-1 gap-4 text-left">
                <div className="md:col-span-2">
                  <p className="text-white">From</p>
                  <input type="datetime-local" className="w-full border rounded p-2"/>
                </div>
                <div>
                  <p className="text-white">To</p>
                  <input type="time" className="w-full border rounded p-2" />
                </div>
                <div className="md:col-span-3">
                  <p className="text-white">Detail</p>
                  <textarea className="w-full border rounded p-2"></textarea>
                </div>
                <div>
                  <p className="text-white">Location Type</p>
                  <select className="w-full border rounded p-2">
                    <option value="Indoor">Indoor</option>
                    <option value="Outdoor">Outdoor</option>
                    <option value="Home">Home</option>
                    <option value="Travelling">Travelling</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <p className="text-white">Location Name</p>
                  <input type="text" className="w-full border rounded p-2" />
                </div>
                <div className="md:col-span-3 mt-5">
                  <button className="flex
                      justify-center
                      items-center
                      space-x-1
                      bg-yellow
                      py-2
                      px-3
                      rounded
                      w-full
                      border border-gray-700
                      hover:text-gray-900 hover:bg-gray-200
                      transition
                      duration-300">+ Add Entry</button>
                </div>
              </div>
            </div>
          </div>
        </div>
{/* 
        <div className={styles.content}>
          <div className={styles.patient}>
            <div className={styles.subtitle}>
              <h2>Patient Information</h2>
              <div>
                <a>Remove Patient</a>
              </div>
            </div>
            <div className={styles.information}>
              <div>
                <p>Gender</p>
                <select>
                  <option>A</option>
                  <option>B</option>
                </select>
              </div>
              <div>
                <p>Age</p>
                <input type="text" />
              </div>
              <div>
                <p>Occupation</p>
                <input type="text" />
              </div>
            </div>
          </div>

          <div className={styles.patient}>
            <div className={styles.subtitle}>
              <h2>Timeline</h2>
            </div>
            <div className={styles.information}>
      
            </div>
          </div>

        </div> */}
      </main>
    </div>
  )
}

export default Home
