import {
  ClockIcon,
  CursorClickIcon,
  HeartIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import React from "react";
import Feature from "./FeatureItem";

function Features() {
  return (
    <section className="container mt-24 flex flex-col items-center">
      <h2 className="text-[32px] font-bold text-center sm:text-left">
        Product was Built Specifically for You
      </h2>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

      <Feature
        Icon={CursorClickIcon}
        title="Customer Management Portal"
        iconBgColor="#02897A"
        description="While most people enjoy casino gambling,"
      />
      <Feature
        Icon={UsersIcon}
        iconBgColor="#4D8DFF"
        title="358 days in a year System Uptime"
        description="While most people enjoy casino gambling,"
      />
      <Feature
        Icon={HeartIcon}
        iconBgColor="#740A76"
        title="20 K+ Active Accounts"
        description="While most people enjoy casino gambling,"
      />
      <Feature
        Icon={ClockIcon}
        iconBgColor="#F03E3D"
        title="Admin Protal"
        description="While most people enjoy casino gambling,"
      />
      </div>

      <button className="primary-button mt-14">Sign up Now</button>

    </section>
  );
}

export default Features;
