import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About", path: "" },
      { name: "Careers", path: "" },
      { name: "Logistic", path: "" },
      { name: "Privacy and Policy", path: "" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "Help/FAQ", path: "" },
      { name: "Press", path: "" },
      { name: "Affliates", path: "" },
    ],
  },
  {
    title: "More",
    links: [
      { name: "Press Centre", path: "" },
      { name: "Our Blog", path: "" },
      { name: "Low fare tips", path: "" },
    ],
  },
];
const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2">
        <Left />
        <div>
          <Right />
        </div>
      </div>
      <hr className="bg-primary h-[2px] my-5 " />
      <div className="flex justify-between">
        <p>Copyright, KiburTravel 2023. All rights reserved.</p>
        <p>terms & conditions</p>
      </div>
    </div>
  );
};

const Left = () => {
  return (
    <div className="flex flex-col gap-3 mt-5">
      <h1 className="text-xl font-semibold font-montserrat">Kibur Travel</h1>
      <p className="text-primary-text">
        Book your trip in minute, get full <br /> control for much longer.
      </p>
      <div className="flex gap-3">
        <div>
          <FaFacebookF />{" "}
        </div>{" "}
        <div>
          <FaInstagram />{" "}
        </div>{" "}
        <div>
          {" "}
          <FaTwitter />{" "}
        </div>{" "}
      </div>
    </div>
  );
};

const Right = () => {
  return (
    <div className="flex justify-between">
      {footerLinks.map((link, idx) => (
        <div key={idx}>
          <h3 className="my-5 font-semibold">{link.title}</h3>
          <p className="space-y-2 text-primary-text">
            {link.links.map((lnk, i) => (
              <div key={i}>{lnk.name}</div>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Footer;
