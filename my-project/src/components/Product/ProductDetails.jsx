export default function ProductDetails() {
  return (
    <section className="flex flex-col gap-6 h-full ">
      <header className="space-y-2">
        <h1 className="text-pretty text-2xl font-semibold">
          Pharma Dry Syrup Bottles (10ml)
        </h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span aria-label="rating" title="4.8 out of 5">
            ★★★★★
          </span>
          <span className="text-foreground/80">(49 reviews)</span>
        </div>
      </header>

      <p className="max-w-prose leading-relaxed text-foreground">
        Durable and hygienic bottles specially designed for safe storage of dry syrups...
      </p>

      <details className="rounded-md border p-4">
        <summary className="cursor-pointer text-base font-medium">
          Product Specifications
        </summary>
        <div className="mt-3 text-sm leading-6">
          • Food-grade material • Tamper-evident cap • Standard neck size • Recyclable
        </div>
      </details>

      <details className="rounded-md border p-4">
        <summary className="cursor-pointer text-base font-medium">
          Product Size
        </summary>
        <div className="mt-3 text-sm leading-6">
          10ml (custom sizes available on request)
        </div>
      </details>

      {/* Push button to bottom */}
      <div className="mt-auto">
        <button className="inline-flex items-center justify-center  bg-[#2592AD] px-5 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 w-full sm:w-auto">
          SEND INQUIRY
        </button>
      </div>
    </section>
  )
}
