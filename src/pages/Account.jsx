import React, { useEffect, useState } from "react";
import AccountDetails from "../components/AccountDetails";
import AccountSettings from "../components/AccountSettings";
import Addresses from "../components/Addresses";
import Orders from "../components/Orders";
import { useQuery } from "../utils/useQuery";
export default function Account() {
  const [accountTab, setAccountTab] = useState("account");
  const query = useQuery();

  const getActiveTab = (type) => {
    if (type === accountTab) {
      return `w-full text-left p-4 text-lg font-medium `;
    } else {
      return `w-full text-left p-4 text-lg `;
    }
  };

  useEffect(() => {
    if (query.get("from")) {
      setAccountTab("order");
    }
  }, [query]);

  const getActiveComponent = () => {
    if (accountTab === "account") {
      return <AccountDetails />;
    } else if (accountTab === "setting") {
      return <AccountSettings />;
    } else if (accountTab === "order") {
      return <Orders />;
    } else if (accountTab === "address") {
      return <Addresses />;
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto pb-20">
      <h1 className="uppercase italic text-3xl font-medium text-center py-10">
        My Account
      </h1>
      <hr />
      <div className="grid grid-cols-4 pt-10">
        <div className="col-span-4 md:col-span-1 bg-gray-200 py-5">
          <ul>
            <li className="border-b-2 border-gray-300">
              <button
                onClick={() => setAccountTab("account")}
                className={getActiveTab("account")}
              >
                Account
              </button>
            </li>
            <li className="border-b-2 border-gray-300">
              <button
                onClick={() => setAccountTab("order")}
                className={getActiveTab("order")}
              >
                My Orders
              </button>
            </li>

            <li className="border-b-2 border-gray-300">
              <button
                onClick={() => setAccountTab("address")}
                className={getActiveTab("address")}
              >
                Addresses
              </button>
            </li>
            <li>
              <button
                onClick={() => setAccountTab("setting")}
                className={getActiveTab("setting")}
              >
                Settings
              </button>
            </li>
          </ul>
        </div>
        <div className="col-span-4 md:col-span-3 bg-white">
          {getActiveComponent()}
        </div>
      </div>
    </div>
  );
}
