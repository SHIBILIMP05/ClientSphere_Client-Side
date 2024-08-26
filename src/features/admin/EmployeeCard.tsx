import React from 'react';
import { blockEmploye } from '../../services/apis/adminApi';
import { Bounce, toast } from 'react-toastify';

interface EmployeeCardProps {
  name: string;
  phone: string;
  email: string;
  imageUrl: string;
  id: string;
  is_restricted:boolean
  is_block: boolean
  setIs_block: React.Dispatch<React.SetStateAction<boolean>>,
}


const EmployeeCard: React.FC<EmployeeCardProps> = ({ name, phone, email, imageUrl, id,is_restricted, is_block, setIs_block }) => {

  const handleBlock = (id: string) => {
    const status =  blockEmploye(id)
    status.then((data:{restriction:{status:number,is_restricted:boolean,message:string}}) => {
      if (data.restriction.status === 200) {
        console.log("data.restriction", data.restriction.is_restricted);
        toast.success(data.restriction.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setIs_block(!is_block)
      } else {
        toast.error(data.restriction.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    })
  }


  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center">
      {imageUrl ? <img src={imageUrl} alt={name} className="w-24 h-24 rounded-full mb-4 object-cover" /> : <img src={`https://ui-avatars.com/api/?name=${name}&background=random`} alt={name} className="w-24 h-24 rounded-full mb-4 object-cover" />}
      <div className="font-bold text-lg">{name}</div>
      <div className="text-sm text-gray-500">{phone}</div>
      <div className="text-sm text-gray-500">{email}</div>
      {!is_restricted ? (
        <button onClick={() => handleBlock(id)} className="mt-4 bg-orange-400 hover:bg-orange-500 text-white py-1 px-4 rounded-full transition-colors duration-300 ease-in-out">
          Restrict Action
        </button>
      ) : (
        <button onClick={() => handleBlock(id)} className="mt-4 bg-green-400 hover:bg-green-500 text-white py-1 px-4 rounded-full transition-colors duration-300 ease-in-out">
          Allow Action
        </button>
      )}

    </div>
  );
};

export default EmployeeCard;
