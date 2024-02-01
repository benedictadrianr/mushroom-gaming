import facebookIcon from "./icon/facebook.png";
import xIcon from "./icon/twitter.png";
import instaIcon from "./icon/instagram.png";
import tiktokIcon from "./icon/tik-tok.png";

const mediaList = [
  {
    id: "401",
    name: "Facebook",
    icon: facebookIcon,
    href: "",
    iconAlt: "facebook",
  },
  {
    id: "402",
    name: "X",
    icon: xIcon,
    href: "",
    iconAlt: "x",
  },
  {
    id: "403",
    name: "Instagram",
    icon: instaIcon,
    href: "",
    iconAlt: "instagram",
  },
  {
    id: "404",
    name: "TikTok",
    icon: tiktokIcon,
    href: "",
    iconAlt: "tiktok",
  },
];

export const Media = () => {
  return (
    <div className="flex flex-col w-fit">
      <h2 className="mb-4 mt-4 text-sm">Media</h2>
      {mediaList.map((service) => (
        <a
          className="text-sm mb-1 font-thin hover:font-normal hover:text-blue-800 flex gap-1"
          key={service.id}
          href={service.href}>
          <img className="w-5" src={service.icon} alt={service.iconAlt} />
          {service.name}
        </a>
      ))}
      <hr className="border-black mt-4 block lg:hidden" />
    </div>
  );
};
