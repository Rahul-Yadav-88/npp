
export default function Home() {
  return (
    <div className="min-h-screen bg-white ">
      {/* Header Section */}
      <header className="bg-[#2592ad] px-16 py-16 relative overflow-hidden">
       

        <div className=" mx-auto flex items-center justify-center gap-10 ">
          {/* Left side - Illustrations */}
         <div>
          <img src="/about.png" alt="" className="w-[634px] h-96" />
         </div>

          {/* Right side - Text content */}
          <div className="flex-1 text-white"> 
            
            <h2 className="text-4xl font-bold text-center leading-tight">
              Your Partner in Precision
              <br />
              Plastic Packaging
            </h2>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 relative">
        

        <div className="space-y-12 relative z-10">
          {/* Precision in Every Package */}
          <section className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Precision in Every Package</h3>
              <p className="text-gray-700 leading-relaxed">
                Established in 2011 in Sialkot, Haseef Pack Pvt O Pack specializes over 15,000 sq. ft. of modern
                production facilities, delivering premium plastic packaging solutions with accuracy and strict adherence
                to industry standards.
              </p>
            </div>
          </section>

          {/* Driven by Quality and Innovation */}
          <section className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Driven by Quality and Innovation</h3>
              <p className="text-gray-700 leading-relaxed">
                We believe packaging should enhance your product's value. Our commitment to continuous improvement in
                products, processes, and systems ensures that every package meets the highest standards of quality,
                helping your brand stand out in the market.
              </p>
            </div>
          </section>

          {/* Serving Diverse Industries */}
          <section className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Serving Diverse Industries</h3>
              <p className="text-gray-700 leading-relaxed">
                Our expertise spans pharmaceuticals, FMCG, cosmetics, food, home care, and personal care industries. We
                also manufacture plastic storage CAN lids for golf period, expanding into chemicals, oils, lubricants,
                and agro industries to meet evolving needs.
              </p>
            </div>
          </section>

          {/* Partnership Beyond Packaging */}
          <section className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Partnership Beyond Packaging</h3>
              <p className="text-gray-700 leading-relaxed">
                At Haseef Pack O Pack, we value long-term relationships built on trust, transparency, and excellence.
                Our customer-centric approach ensures seamless communication, timely service, and solutions that align
                with your growth vision.
              </p>
            </div>
          </section>

          {/* Commitment to Excellence */}
          <section className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Commitment to Excellence</h3>
              <p className="text-gray-700 leading-relaxed">
                We don't just manufacture packaging; we deliver confidence with every product, ensuring your customers
                experience quality, reliability, and care from the first touchpoint.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
