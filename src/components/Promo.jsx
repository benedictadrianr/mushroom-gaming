export const Promo = () => {
  return (
    <section className="relative overflow-hidden bg-white mt-4">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40 bg-[url('./img/promoBackground.jpg')] bg-cover bg-right">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Get your gear before holiday!
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This year, our new summer collection will boost your gaming
              performance to Ultrakill!
            </p>
          </div>
          <div>
            <div className="mt-10">
              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
