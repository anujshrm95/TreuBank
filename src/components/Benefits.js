import React from "react";
import BenefitItem from "./BenefitItem";
import { CheckIcon } from "@heroicons/react/solid";

function Benefits() {
  return (
    <section className="container mt-24 space-y-24">
      <BenefitItem
        image="./images/benefit-1.svg"
        heading1="Effortless Validation for"
        heading2="Management"
        description="The admin portal gives you a stable and daily activities about any transactions made"
        Content={() => (
          <div>
            <h5 className="mt-6 mb-2 font-semibold">Accessory makers</h5>
            <p>
              A new and enhanced way to Run and Rule the Management at the same time
            </p>
            <h5 className="mt-6 mb-2 font-semibold">Solutionists</h5>
            <p>
              If you are looking for a new way to organize your Customers Data,
              and Enhance security systems
            </p>
          </div>
        )}
      />

      <BenefitItem
        image="./images/benefit-2.svg"
        heading1="Easier decision making for"
        heading2="Customer Support"
        description="The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person. "
        Content={() => (
          <div className="flex flex-col space-y-6">
            <CheckedItem
              bgColor="#FF9900"
              text="Never worry about overpaying for your energy again."
            />
            <CheckedItem
              bgColor="#F03E3D"
              text="We will only switch you to energy companies that we trust and will treat you right"
            />
            <CheckedItem
              bgColor="#4D8DFF"
              text="We track the markets daily and know where the savings are."
            />
          </div>
        )}
      />

      <BenefitItem
        image="./images/benefit-3.svg"
        heading1="Optimisation for"
        heading2="Collaborative"
        description="We are toally platform based Solutionists, Integration TreuBank with just one Click."
        Content={() => (
          <div>
            <h5 className="mt-6 mb-2 font-semibold">security</h5>
            <p>
              TreuBank offers a high secruity with reliability 
            </p>
            <h5 className="mt-6 mb-2 font-semibold">Alterationists</h5>
            <p>
              If you are looking for a new way to promote your business that
              won’t cost you more money,
            </p>
          </div>
        )}
      />
    </section>
  );
}

export default Benefits;

function CheckedItem({ bgColor, text }) {
  return (
    <div>
      <div className="flex items-center space-x-6">
        <div style={{ background: `${bgColor}` }} className="rounded-xl p-1.5">
          <CheckIcon className="h-8 text-white" />
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}
