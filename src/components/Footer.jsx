import { CService } from "./footerList/CService";
import { Explore } from "./footerList/Explore";
import { Payment } from "./footerList/Payment";
import { Media } from "./footerList/Media";
import { Download } from "./footerList/Download";

export const Footer = () => {
  return (
    <footer className="w-full bg-blue-50 flex justify-around align-middle p-8 flex-col lg:flex-row">
      <CService />
      <Explore />
      <Payment />
      <Media />
      <Download />
    </footer>
  );
};
