import { MdPhone } from "react-icons/md";

const TopBar = () => {
  return (
    <div className="bg-blue-custom text-white p-4">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex items-center">
          <MdPhone className="text-red-custom text-2xl cursor-pointer" />
          <p className="text-xs font-bold ml-1">(11) 5549-7175 (Barueri)</p>
        </div>
        <div className="flex items-center ml-4">
          <MdPhone className="text-red-custom text-2xl cursor-pointer" />
          <p className="text-xs font-bold ml-1">(11) 5549-7175 (São Paulo)</p>
        </div>
        <div className="flex items-center ml-4">
          <MdPhone className="text-red-custom text-2xl cursor-pointer" />
          <p className="text-xs font-bold ml-1">(11) 5549-7175 (ABC)</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
