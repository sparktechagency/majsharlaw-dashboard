const DeleteConfirmModal = ({
  isOpen,
  onCancel,
  onConfirm,
  message = "Are you sure you want to delete this item?",
  icon = "⚠️",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm relative">
        <div className="flex items-start gap-2">
          <span className="text-yellow-500 text-2xl">{icon}</span>
          <p className="text-lg font-medium text-gray-800">{message}</p>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100 cursor-pointer"
            onClick={onCancel}
          >
            No
          </button>
          <button
            className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 cursor-pointer"
            onClick={onConfirm}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
