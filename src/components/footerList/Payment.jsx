const paymentList = [
  {
    id: "301",
    src: "https://down-id.img.susercontent.com/file/49656d7100598b911a1f247dec64fda4",
    alt: "bca",
  },
  {
    id: "302",
    src: "https://down-id.img.susercontent.com/file/e7865f5fb066b8b5e73f9d5c36fc7154",
    alt: "bni",
  },
  {
    id: "303",
    src: "https://down-id.img.susercontent.com/file/59185c096964e1892e9122ceaae2609d",
    alt: "bri",
  },
  {
    id: "304",
    src: "https://down-id.img.susercontent.com/file/0cf8caa250763eefc3d79bb1f8c08e73",
    alt: "mandiri",
  },
  {
    id: "305",
    src: "https://down-id.img.susercontent.com/file/b228c4523a9d1261e4606e9bf3a4882f",
    alt: "visa",
  },
];

export const Payment = () => {
  return (
    <div className="flex flex-col w-fit">
      <h2 className="mb-4 mt-4 text-sm">Payment</h2>
      {paymentList.map((service) => (
        <div key={service.id}>
          <img src={service.src} alt={service.alt} />
        </div>
      ))}
      <hr className="border-black mt-4 block lg:hidden" />
    </div>
  );
};
