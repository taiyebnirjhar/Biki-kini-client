import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/FireAuthContext";
import DashUserRow from "./DashUserRow";

function DashUser() {
  const { user } = useContext(AuthContext);

  const url = `${import.meta.env.VITE_API_URL}/selling?UID=${user.uid}`;

  const { data: selling = [] } = useQuery({
    queryKey: ["selling", user.uid],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("biki-kini-token")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  // console.log(selling);

  return (
    <div className="max-w-[1536px] mx-auto px-8 py-6">
      <div>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  <span className="">Image</span>
                </th>
                <th scope="col" className="py-3 px-6">
                  Product
                </th>
                <th scope="col" className="py-3 px-6">
                  Location
                </th>
                <th scope="col" className="py-3 px-6">
                  Price
                </th>
                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {selling.map((items, index) => {
                return <DashUserRow key={index} rowData={items} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashUser;
