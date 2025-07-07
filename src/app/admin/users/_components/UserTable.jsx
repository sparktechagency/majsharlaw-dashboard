import UserRow from "./UserRow";

const UserTable = ({ users, onView, onDelete }) => (
  <div className="overflow-x-auto">
    <table className="table-auto w-full border-separate border-spacing-y-[10px] rounded">
      <thead>
        <tr className="text-xl font-semibold text-black">
          <th>Sl. No</th>
          <th>|</th>
          <th>Name</th>
          <th>|</th>
          <th>Email</th>
          <th>|</th>
          <th>Address</th>
          <th>|</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.length === 0 ? (
          <tr>
            <td colSpan="9" className="py-4 text-center text-gray-400">
              No users found.
            </td>
          </tr>
        ) : (
          users.map((user) => (
            <UserRow
              key={user.id}
              user={user}
              onView={onView}
              onDelete={onDelete}
            />
          ))
        )}
      </tbody>
    </table>
  </div>
);

export default UserTable;
