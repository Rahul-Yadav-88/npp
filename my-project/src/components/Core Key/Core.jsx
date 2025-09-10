export default function Core() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white h-[300px] md:h-[400px] lg:h-[450px]"
      style={{
        backgroundImage: "url('core.png')", // apni image ka path daal
      }}
    >
      {/* Text Content - Top Positioned */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-center px-4 w-full">
        <h1 className="text-2xl md:text-3xl font-bold mb-5">
          Our Values, Vision & Beliefs
        </h1>
        <p className="text-sm md:text-base lg:text-lg font-medium max-w-3xl mx-auto">
          Excellence, Trust, and Growth guide everything we do at Neelam Print O Pack.
        </p>
      </div>
    </section>
  );
}
