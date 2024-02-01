import { useState } from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Gaming Headset",
    type: "headphone",
    href: "#",
    imageSrc:
      "https://media.istockphoto.com/id/93339674/vector/online-gaming-headset.jpg?s=612x612&w=0&k=20&c=Hg65VjUisQyMr5S7JPaCmD4JwKliq2_vxKAhbucejJI=",
    imageAlt: "preview of the gaming headset.",
    price: "$35",
    color: "Black and White",
  },
  {
    id: 2,
    name: "Gaming Keyboard",
    type: "keyboard",
    href: "#",
    imageSrc:
      "https://row.hyperx.com/cdn/shop/products/hyperx_alloy_origins_ko_1_top_down_2048x2048.jpg?v=1663982727",
    imageAlt: "preview of the gaming keyboard.",
    price: "$35",
    color: "RGB",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    type: "mouse",
    href: "#",
    imageSrc:
      "https://images-cdn.ubuy.co.in/633d1ed5dc341b272b2cbd08-rgb-gaming-mouse-wired-pc-gaming-mouse.jpg",
    imageAlt: "preview of the gaming mouse.",
    price: "$35",
    color: "RGB",
  },
  {
    id: 4,
    name: "Gaming Headset",
    type: "headphone",
    href: "#",
    imageSrc:
      "https://media.istockphoto.com/id/93339674/vector/online-gaming-headset.jpg?s=612x612&w=0&k=20&c=Hg65VjUisQyMr5S7JPaCmD4JwKliq2_vxKAhbucejJI=",
    imageAlt: "preview of the gaming headset.",
    price: "$35",
    color: "Black and White",
  },
  {
    id: 5,
    name: "Gaming Mouse",
    type: "mouse",
    href: "#",
    imageSrc:
      "https://images-cdn.ubuy.co.in/633d1ed5dc341b272b2cbd08-rgb-gaming-mouse-wired-pc-gaming-mouse.jpg",
    imageAlt: "preview of the gaming mouse.",
    price: "$35",
    color: "RGB",
  },
  {
    id: 6,
    name: "Gaming Keyboard",
    type: "keyboard",
    href: "#",
    imageSrc:
      "https://row.hyperx.com/cdn/shop/products/hyperx_alloy_origins_ko_1_top_down_2048x2048.jpg?v=1663982727",
    imageAlt: "preview of the gaming keyboard.",
    price: "$35",
    color: "RGB",
  },
  {
    id: 7,
    name: "Gaming Keyboard",
    type: "keyboard",
    href: "#",
    imageSrc:
      "https://row.hyperx.com/cdn/shop/products/hyperx_alloy_origins_ko_1_top_down_2048x2048.jpg?v=1663982727",
    imageAlt: "preview of the gaming keyboard.",
    price: "$35",
    color: "RGB",
  },
  {
    id: 8,
    name: "Gaming Mouse",
    type: "mouse",
    href: "#",
    imageSrc:
      "https://images-cdn.ubuy.co.in/633d1ed5dc341b272b2cbd08-rgb-gaming-mouse-wired-pc-gaming-mouse.jpg",
    imageAlt: "preview of the gaming mouse.",
    price: "$35",
    color: "RGB",
  },
  {
    id: 9,
    name: "Gaming Chair",
    type: "chair",
    href: "#",
    imageSrc:
      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//93/MTA-8246262/b-g_bg_sport_kursi_gaming_-_gaming_chair_model_e-02s_-_white_-_full01_rwz24yft.jpg",
    imageAlt: "preview of the gaming headset.",
    price: "$35",
    color: "Black and White",
  },
  {
    id: 10,
    name: "Gaming Mouse",
    type: "mouse",
    href: "#",
    imageSrc:
      "https://images-cdn.ubuy.co.in/633d1ed5dc341b272b2cbd08-rgb-gaming-mouse-wired-pc-gaming-mouse.jpg",
    imageAlt: "preview of the gaming mouse.",
    price: "$35",
    color: "RGB",
  },
  {
    id: 11,
    name: "Gaming Chair",
    type: "chair",
    href: "#",
    imageSrc:
      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//93/MTA-8246262/b-g_bg_sport_kursi_gaming_-_gaming_chair_model_e-02s_-_white_-_full01_rwz24yft.jpg",
    imageAlt: "preview of the gaming headset.",
    price: "$35",
    color: "Black and White",
  },
  {
    id: 12,
    name: "Gaming Keyboard",
    type: "keyboard",
    href: "#",
    imageSrc:
      "https://row.hyperx.com/cdn/shop/products/hyperx_alloy_origins_ko_1_top_down_2048x2048.jpg?v=1663982727",
    imageAlt: "preview of the gaming keyboard.",
    price: "$35",
    color: "RGB",
  },
  {
    id: 13,
    name: "Gaming Chair",
    type: "chair",
    href: "#",
    imageSrc:
      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//93/MTA-8246262/b-g_bg_sport_kursi_gaming_-_gaming_chair_model_e-02s_-_white_-_full01_rwz24yft.jpg",
    imageAlt: "preview of the gaming headset.",
    price: "$35",
    color: "Black and White",
  },
  {
    id: 14,
    name: "Gaming Chair",
    type: "chair",
    href: "#",
    imageSrc:
      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//93/MTA-8246262/b-g_bg_sport_kursi_gaming_-_gaming_chair_model_e-02s_-_white_-_full01_rwz24yft.jpg",
    imageAlt: "preview of the gaming headset.",
    price: "$35",
    color: "Black and White",
  },
  {
    id: 15,
    name: "Gaming Chair",
    type: "chair",
    href: "#",
    imageSrc:
      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//93/MTA-8246262/b-g_bg_sport_kursi_gaming_-_gaming_chair_model_e-02s_-_white_-_full01_rwz24yft.jpg",
    imageAlt: "preview of the gaming headset.",
    price: "$35",
    color: "Black and White",
  },
  {
    id: 16,
    name: "Gaming Chair",
    type: "chair",
    href: "#",
    imageSrc:
      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//93/MTA-8246262/b-g_bg_sport_kursi_gaming_-_gaming_chair_model_e-02s_-_white_-_full01_rwz24yft.jpg",
    imageAlt: "preview of the gaming headset.",
    price: "$35",
    color: "Black and White",
  },
];

export const Product = () => {
  const { productType } = useParams();
  const [showAll, setShowAll] = useState(false);

  const shouldFilter = productType && productType.trim() !== "";
  const filteredItems = shouldFilter
    ? products.filter((product) => product.type === productType)
    : products;

  const itemCount = filteredItems.length > 8;

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 8);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex flex-col">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Check out our catalouge
        </h2>

        <div className="my-6 gap-x-6 gap-y-10 xl:gap-x-8 flex flex-wrap justify-center">
          {displayedItems.map((product) => (
            <div
              key={product.id}
              className="group relative border-2 hover:border-blue-800 p-2">
              <div className=" overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 h-60 md:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <div className="flex gap-1 flex-col">
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {!showAll && (
          <button
            className={`p-2 w-36 mx-auto shadow-md border-2 bg-gray-100 hover:bg-blue-500 hover:text-white rounded-md transition-all ${
              !itemCount ? "hidden" : ""
            }`}
            onClick={() => setShowAll(true)}>
            Show All
          </button>
        )}
        {showAll && (
          <button
            className={`p-2 w-36 mx-auto shadow-md border-2 bg-gray-100 hover:bg-blue-500 hover:text-white rounded-md transition-all ${
              !itemCount ? "hidden" : ""
            }`}
            onClick={() => setShowAll(false)}>
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};
