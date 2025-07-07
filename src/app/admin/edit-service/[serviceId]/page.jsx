import EditService from "../_components/EditService";

const EditServicePage = async ({ params }) => {
  const { serviceId } = await params;
  return (
    <div>
      <EditService />
    </div>
  );
};

export default EditServicePage;
