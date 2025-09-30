"use client";
import React from "react";
import { motion } from "framer-motion";

export default function CoreValuesPage() {
  const coreValues = [
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
  ];

  const beliefs = [
    "We believe in professionalism and ethics.",
    "We add value to every customer's needs.",
    "We act with positivity and vision.",
    "We nurture long-term relationships built on respect and trust.",
  ];

  const keyValues = [
    { img: "Desier.png", title: "Desire for excellence" },
    { img: "teamwork.png", title: "Innovation and teamwork" },
    { img: "build.png", title: "Trust and faith build-up" },
    { img: "customer.png", title: "Transparency with customers" },
  ];

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-gray-50 to-white">
     

      {/* Main Content */}
      <div className="px-6 md:px-16 lg:px-32 py-20 space-y-28">
        {/* Core Values */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-3 tracking-wide">
              Core Values
            </h2>
            <div className="w-16 h-0.5 bg-[#3799B0] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {coreValues.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                // whileHover={{ y: -3 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-12 h-12 object-contain transition-transform duration-200 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="font-semibold text-xl text-gray-800 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Beliefs & Key Values */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Beliefs */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-3 tracking-wide">
                Beliefs
              </h2>
              <div className="w-16 h-0.5 bg-[#3799B0] mx-auto"></div>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
              <ul className="space-y-6">
                {beliefs.map((belief, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-start group"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#3799B0] mt-2 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="text-gray-700 leading-relaxed font-light">
                      {belief}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Key Values */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mt-20 md:mt-0">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-3 tracking-wide">
                Key Values
              </h2>
              <div className="w-16 h-0.5 bg-[#3799B0] mx-auto mb-10"></div>
            </div>
            <div className="bg-white rounded-2xl p-3 shadow-xl border border-gray-100 ">
              <div className="grid grid-cols-2 gap-4">
                {keyValues.map((kv, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center text-center space-y-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
                  >
                    <div className="">
                      <img
                        src={kv.img}
                        alt={kv.title}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <span className="font-medium text-gray-800 text-sm leading-snug">
                      {kv.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Mission & Vision */}
        <section className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group "
            >
              <div className="text-center ">
                <h2 className="text-3xl md:text-4xl font-light text-gray-800  tracking-wide">
                  Mission
                </h2>
                <div className="w-16 h-0.5 bg-[#3799B0] mx-auto mt-3"></div>
              </div>
              <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 flex items-center mt-10 h-[300px]">
                <p className="text-base text-gray-700 leading-loose font-light text-center">
                  Our mission is to set new standards of quality and perfection by
                  combining innovation, transparency, and reliability, ensuring
                  every package adds value and builds customer trust.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group "
            >
              <div className="text-center ">
                <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-3 tracking-wide">
                  Vision
                </h2>
                <div className="w-16 h-0.5 bg-[#3799B0] mx-auto"></div>
              </div>
              <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500  flex items-center mt-10 h-[300px]">
                <p className="text-base text-gray-700 leading-loose font-light text-center">
                  Our vision is to be a globally trusted leader in plastic
                  packaging, known for uncompromising quality, efficiency, and
                  customer satisfaction, while continuously innovating to meet the
                  evolving needs of diverse industries.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}