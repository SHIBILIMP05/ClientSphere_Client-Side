import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface Props {
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>
}

const ProfileInfo = (props: Props) => {
  const head = useSelector((state: RootState) => state.Head)

  return (
    <div className="bg-white mt-3 p-6 rounded-md shadow-md">
     
      <div className="flex items-center space-x-6 mb-8 relative">
        {head.image ? (
          <img
            src={head.image} 
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover  border-[#6735CC] border-4"
          />) : (<img
            src={`https://ui-avatars.com/api/?name=${head.name}`}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover  border-[#6735CC] border-4"
          />)

        }
        <div>
          <h2 className="text-2xl font-semibold">{head.name}</h2>
          <p className="text-gray-600">Admin</p>
        </div>
       
        <div className="mt-8 text-right absolute right-0 ">
          <button onClick={() => props.setIsEdit(true)} className=" bg-[#4182F9] w-[86px] h-[44px] text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none">
            Edit
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700">Full Name</label>
          <input
            readOnly
            type="text"
            placeholder={head.name}
            className="mt-2 p-3 w-full  bg-[#F9F9F9] rounded-lg border border-[#ECECF1]  focus:outline-none "
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            readOnly
            type="email"
            placeholder={head.email}
            className="mt-2 p-3 w-full bg-[#F9F9F9] rounded-lg border border-[#ECECF1] focus:outline-none "
          />
        </div>
        <div>
          <label className="block text-gray-700">Phone</label>
          <input
            readOnly
            type="text"
            placeholder={head.phone}
            className="mt-2 p-3 w-full bg-[#F9F9F9] rounded-lg border border-[#ECECF1] focus:outline-none "
          />
        </div>
        <div>
          <label className="block text-gray-700">Country</label>
          <input
            readOnly
            type="text"
            placeholder={head.country}
            className="mt-2 p-3 w-full bg-[#F9F9F9] rounded-lg border border-[#ECECF1] focus:outline-none "
          />
        </div>
        <div>
          <label className="block text-gray-700">Address</label>
          <input
            readOnly
            type="text"
            placeholder={head.address}
            className="mt-2 p-3 w-full bg-[#F9F9F9] rounded-lg border border-[#ECECF1] focus:outline-none "
          />
        </div>
        <div>
          <label className="block text-gray-700">City</label>
          <input
            readOnly
            type="text"
            placeholder={head.city}
            className="mt-2 p-3 w-full bg-[#F9F9F9] rounded-lg border border-[#ECECF1] focus:outline-none "
          />
        </div>
        <div>
          <label className="block text-gray-700">Pin Code</label>
          <input
            readOnly
            type="text"
            placeholder={head.pinCode}
            className="mt-2 p-3 w-full bg-[#F9F9F9] rounded-lg border border-[#ECECF1] focus:outline-none "
          />
        </div>
      </div>
    </div>





  );
};

export default ProfileInfo;
