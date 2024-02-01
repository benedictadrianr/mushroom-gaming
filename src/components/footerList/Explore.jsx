const exploreList = [
  {
    id: "1",
    name: "About Us",
    href: "#",
  },
  {
    id: "2",
    name: "Career",
    href: "#",
  },
  {
    id: "3",
    name: "Terms and Conditions",
    href: "#",
  },
  {
    id: "4",
    name: "Blog",
    href: "#",
  },
  {
    id: "5",
    name: "Flash Sale",
    href: "#",
  },
  {
    id: "6",
    name: "Affiliate",
    href: "#",
  },
  {
    id: "207",
    name: "Seller Centre",
    href: "#",
  },
];

export const Explore = () => {
  return (
    <div className="flex flex-col w-fit">
      <h2 className="mb-4 mt-4 text-sm">Explore</h2>
      {exploreList.map((service) => (
        <a
          className="text-sm mb-1 font-thin hover:font-normal hover:text-blue-800"
          key={service.id}
          href={service.href}>
          {service.name}
        </a>
      ))}
      <hr className="border-black mt-4 block lg:hidden" />
    </div>
  );
};
