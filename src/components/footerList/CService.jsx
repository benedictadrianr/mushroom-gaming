const cServiceList = [
  {
    id: "1",
    name: "Help",
    href: "#",
  },
  {
    id: "2",
    name: "Payment Method",
    href: "#",
  },
  {
    id: "3",
    name: "Virtual Pay",
    href: "#",
  },
  {
    id: "4",
    name: "Coupon",
    href: "#",
  },
  {
    id: "5",
    name: "Delivery Tracking",
    href: "#",
  },
  {
    id: "6",
    name: "Contact Us",
    href: "#",
  },
];

export const CService = () => {
  return (
    <div className="flex flex-col w-fit">
      <h2 className="mb-4 mt-4 text-sm">Customer Service</h2>
      {cServiceList.map((service) => (
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
