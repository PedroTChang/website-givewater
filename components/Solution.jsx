import React from 'react'

const Solution = (React.FC = () => (
  <section className="bg-white min-h-screen flex flex-col justify-center gap-16 md:gap-32">
    <div className="p-20 flex flex-col justify-left items-left">
      <h3 className="text-3xl mb-10 font-bold">
        {/* <span className='whitespace-nowrap'>Our Solution:</span>{' '} */}
        {/* <span className='whitespace-nowrap'>Borehole Well Method</span> */}
      </h3>

      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-6xl">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img
              class="h-48 w-full object-cover md:h-full md:w-48"
              src="https://i.imgur.com/Ax8CSW5.jpg"
              alt="Man looking at item at a store"
            />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Solution
            </div>
            <a
              href="https://en.wikipedia.org/wiki/Borehole#:~:text=Typically%2C%20a%20borehole%20used%20as,drawing%20in%20sand%20and%20sediment."
              class="block mt-1 text-3xl leading-tight font-medium text-black hover:underline"
            >
              Borehole Method
            </a>
            <p class="mt-2 text-slate-500">
              Getting a new business off the ground is a lot of hard work. Here
              are five ideas you can use to find your first customers.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </section>
))

export default Solution
