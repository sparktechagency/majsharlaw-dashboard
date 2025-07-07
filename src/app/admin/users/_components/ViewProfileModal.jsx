const ViewProfileModal = ({ user, onClose }) => (
  <div className="fixed inset-0 z-50 flex justify-center items-center">
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative z-10">
      <div className="flex flex-col items-center gap-3">
        <img
          src={user.avatar}
          alt="Avatar"
          className="w-25 h-25 rounded-full object-cover"
        />
        <h2 className="text-xl font-semibold mb-10">{user.name}</h2>
        <div className="flex justify-between gap-20 text-xl">
          <div className="flex flex-col gap-5">
            <p>Email:</p>
            <p>Address:</p>
            <p>Service Booked:</p>
            <p>Reordered:</p>
          </div>
          <div className="flex flex-col font-medium gap-5 items-end">
            <p>{user.email}</p>
            <p>{user.Adress}</p>
            <p>5 times</p>
            <p>3 times</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="bg-[#4B5320] w-full rounded-lg py-2 my-5 text-white text-xl font-semibold cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  </div>
);

export default ViewProfileModal;
