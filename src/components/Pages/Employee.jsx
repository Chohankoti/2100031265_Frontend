import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Employee = () => {

  const [Users, SetUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/user")
      .then((response) => SetUsers(response.data))
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/user/${id}`);
      // Filter out the deleted user from the state
      SetUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Error deleting user. Please check console for details.');
    }
  };


  const TableRows = ({ data }) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <tr className="cursor-pointer">
          <td
            className={`py-9 px-2 text-base  font-normal flex items-center justify-center h-full border-t`}
          >
            <svg
              className={`text-black w-6 h-6 z-40  ${open ? "rotate-180" : "rotate-0"
                }`}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => setOpen(!open)}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </td>
          <td
            className={`py-2 px-3 font-normal text-base border-t whitespace-nowrap`}
          >
            {data?.id}
          </td>
          <td
            className={`py-2 px-3 font-normal text-base border-t whitespace-nowrap`}
          >
            {data?.FirstName}
          </td>
          <td
            className={`py-2 px-3 font-normal text-base border-t whitespace-nowrap`}
          >
            {data?.LastName}
          </td>
          <td
            className={`py-2 px-3 text-base  font-normal border-t whitespace-nowrap`}
          >
            {data?.Department}
          </td>
          <td
            className={`py-2 px-3 text-base  font-normal border-t min-w-[250px]`}
          >
            <Link to={`../edit/${data.id}`} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-2 mr-2">Edit</Link>
            <button onClick={() => handleDelete(data.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2">Delete</button>
          </td>
        </tr>
        <tr>
          <td colSpan={6} className="pl-10">
            <h1 className={`text-xl ${open ? "block" : "hidden"}`}>Custom Fields</h1>
          </td>
        </tr>
        <tr
          className={`w-full overflow-hidden transition-[max-height] delay-1000 duration-1000 ease-in-out  ${open ? "max-h-20" : "max-h-0"
            }`}
        >
          <td colSpan={10}>
            <table className={`px-10 w-fit ${open ? "block" : "hidden"} mx-auto border-collapse rounded-lg`}>
              <tbody>
                <tr>
                  <td className="bg-gray-200 py-3 px-4 text-[#212B36] text-base sm:text-sm font-normal whitespace-nowrap border border-gray-300">Name:</td>
                  <td className="bg-gray-100 py-3 px-4 border border-gray-300">
                    {"$ "+`${data.FirstName.charAt(0).toUpperCase()}. ${data.LastName.toUpperCase()}`}
                  </td>
                </tr>
                <tr>
                  <td className="bg-gray-200  py-3 px-4 text-[#212B36] text-base sm:text-sm font-normal whitespace-nowrap border border-gray-300">Age:</td>
                  <td className="bg-gray-100  py-3 px-4 text-center border border-gray-300">{data.Age}</td>
                </tr>
                <tr>
                  <td className=" bg-gray-200  py-3 px-4 text-[#212B36] text-base sm:text-sm font-normal whitespace-nowrap border border-gray-300">Gender:</td>
                  <td className="bg-gray-100 py-3 px-4 text-center border border-gray-300">{data.Gender}</td>
                </tr>
                <tr>
                  <td className="bg-gray-200  py-3 px-4 text-[#212B36] text-base sm:text-sm font-normal whitespace-nowrap border border-gray-300">Position:</td>
                  <td className="bg-gray-100  py-3 px-4 text-center border border-gray-300">
                    {data.Age > 40 ? "Senior" : "Junior"}
                  </td>
                </tr>
                <tr>
                  <td className="bg-gray-200  py-3 px-4 text-[#212B36] text-base sm:text-sm font-normal whitespace-nowrap border border-gray-300">Salary:</td>
                  <td className="bg-gray-100  py-3 px-4 text-center border border-gray-300">
                    {"$ " + (data.Age > 40 ? data.Age * 10 + 50.000 : data.Age * 5 + 50.000)}
                  </td>
                </tr>
              </tbody>
            </table>

          </td>
        </tr>
      </>
    );
  };
  return (
    <div className="bg-white flex flex-col items-center justify-center py-10 ">
      <div className="w-full max-w-4xl px-2">
        <div className="flex justify-between items-center w-full">
          <div>
            <h1 className="text-2xl font-medium">Employee Table</h1>
          </div>
          <div>
            <Link to='../add' className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2">Add</Link>
          </div>
        </div>


        <div className="w-full overflow-x-scroll md:overflow-auto  max-w-7xl 2xl:max-w-none mt-2">
          <table className="table-auto overflow-scroll md:overflow-auto w-full text-left font-inter border-separate border-spacing-y-0 borer ">
            <thead className="bg-[#222E3A]/[6%] rounded-lg text-base text-white font-semibold w-full">
              <tr className="">
                <th className=""></th>
                <th className="py-3 px-3 text-[#212B36] sm:text-base font-bold whitespace-nowrap">
                  Id
                </th>
                <th className="py-3 px-3 text-[#212B36] sm:text-base font-bold whitespace-nowrap">
                  First Name
                </th>
                <th className="py-3 px-3 text-[#212B36] sm:text-base font-bold whitespace-nowrap">
                  Last Name
                </th>
                <th className="py-3 px-3 text-[#212B36] sm:text-base font-bold whitespace-nowrap">
                  Department
                </th>
                <th className="py-3 px-3 text-[#212B36] sm:text-base font-bold whitespace-nowrap  ">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {Users?.map((data, index) => (
                <TableRows key={index} data={data} />
              ))}
              <tr>
                <td colSpan={6} className="border-t"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Employee;
