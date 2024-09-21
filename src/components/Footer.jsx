import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 my-10 text-sm">
        <div>
          <img className="mb-5 w-32" src={assets.logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            reiciendis corrupti deserunt omnis recusandae. Sed minus tenetur
            corrupti asperiores suscipit ipsam quod facere nisi error
            voluptatibus iusto, quasi praesentium deserunt.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-15">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>PrivacyPolicy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              {/* Mail and tel link */}
              <a href="tel:+9779812345678">+9779812345678</a>
            </li>
            <li>
              <a href="mailto:abc@def.com">abc@def.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-center text-sm">
          Copyright 2024 @shopnow.com. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
