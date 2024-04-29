import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default function View({ id, onClose }) {
    // State to manage form data
    const [data, setFormData] = useState({
        FirstName: '',
        LastName: '',
        Department: '',
        Gender: '',
        Age: ''
    });

    console.log(id)

    // Fetch user data with the provided ID
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/user/${id}`);
                const userData = response.data;
                // Set form data with user data
                setFormData({
                    FirstName: userData.FirstName,
                    LastName: userData.LastName,
                    Department: userData.Department,
                    Gender: userData.Gender,
                    Age: userData.Age
                });
                console.log(data)
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchData();
    }, []);


    return (
        <div className="fixed top-0 right-0 h-screen w-screen bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg relative">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-4">Details</h2>
            <table className={`px-10 w-fit "block" mx-auto border-collapse rounded-lg`}>
              <tbody>
                <tr>
                  <td className="bg-gray-200 py-3 px-4 text-[#212B36] text-base sm:text-sm font-normal whitespace-nowrap border border-gray-300">Name:</td>
                  <td className="bg-gray-100 py-3 px-4 border border-gray-300">
                    {`${data.FirstName.charAt(0).toUpperCase()}. ${data.LastName.toUpperCase()}`}
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
                  <td className=" bg-gray-200  py-3 px-4 text-[#212B36] text-base sm:text-sm font-normal whitespace-nowrap border border-gray-300">Department:</td>
                  <td className="bg-gray-100 py-3 px-4 text-center border border-gray-300">{data.Department}</td>
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
          </div>
        </div>
      );
}
