export default function CoreValuesPage() {
  return (
    <div className="px-6 md:px-16 lg:px-24 py-12 font-sans text-gray-900 bg-white space-y-16">
      
      {/* Core Values */}
      <section className="text-center">
        <h2 className="text-xl font-bold mb-10">Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Excellence",
              desc: "Striving for the highest standards.",
              img: "Excellence.png",
            },
            {
              title: "Trust & Reliability",
              desc: "Building confidence with every delivery.",
              img: "trust.png",
            },
            {
              title: "Mutual Growth",
              desc: "Growing with our customers and partners.",
              img: "growth.png",
            },
            {
              title: "Creativity & Innovation",
              desc: "Driving improvement through fresh ideas.",
              img: "innovation.png",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg h-60 flex flex-col items-center justify-center p-8 text-center shadow-sm border transition-all duration-300 hover:border-black"
              style={{ boxShadow: "inset 0 0 0 0 transparent" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "inset 0 0 20px rgba(0,0,0,0.6)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "inset 0 0 0 0 transparent")
              }
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-16 h-16 object-contain mx-auto mb-4"
              />
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Beliefs & Key Values */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Beliefs */}
        <div>
          <h2 className="text-lg font-bold text-center mb-6">Beliefs</h2>
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm min-h-[200px] flex items-center">
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2"><strong>O</strong></span>
                <span><strong>“We believe in professionalism and ethics.”</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2"><strong>O</strong></span>
                <span><strong>“We add value to every customer’s needs.”</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2"><strong>O</strong></span>
                <span><strong>“We act with positivity and vision.”</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2"><strong>O</strong></span>
                <span><strong>“We nurture long-term relationships built on respect and trust.”</strong></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Key Values */}
        <div>
          <h2 className="text-lg font-bold text-center mb-6">Key Values</h2>
          <div className="bg-gray-50 rounded-lg p-6 border shadow-sm min-h-[200px] flex items-center">
            <div className="grid grid-cols-2 divide-x divide-y text-sm text-gray-700 text-center border w-full">
              <div className="p-3"><span><strong>Desire for excellence</strong></span></div>
              <div className="p-3"><span><strong>Innovation and teamwork</strong></span></div>
              <div className="p-3"><span><strong>Trust and faith build-up</strong></span></div>
              <div className="p-3"><span><strong>Transparency with customers</strong></span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Mission */}
        <div>
          <h2 className="text-lg font-bold text-center mb-6">Mission</h2>
          <div className="bg-gray-50 rounded-lg p-6 border shadow-sm text-center min-h-[160px] flex items-center">
            <p className="text-sm text-gray-600 leading-relaxed">
              Our mission is to set new standards of quality and perfection by
              combining innovation, transparency, and reliability, ensuring every
              package adds value and builds customer trust.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div>
          <h2 className="text-lg font-bold text-center mb-6">Vision</h2>
          <div className="bg-gray-50 rounded-lg p-6 border shadow-sm text-center min-h-[160px] flex items-center">
            <p className="text-sm text-gray-600 leading-relaxed">
              Our vision is to be a globally trusted leader in plastic packaging,
              known for uncompromising quality, efficiency, and customer
              satisfaction, while continuously innovating to meet the evolving
              needs of diverse industries.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
