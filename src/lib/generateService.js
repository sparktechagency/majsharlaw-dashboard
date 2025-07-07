// Dummy data generation
// This code generates dummy service requests for a home service application
export const servicesList = ["Cleaning", "Moving", "Remodeling"];
export const statuses = ["Pending", "Ongoing", "Completed"];
export const userStatuses = ["In progress", "Completed"];

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandomCost = () => Math.floor(Math.random() * 1500) + 200;
const getRandomDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + Math.floor(Math.random() * 30));
  return date;
};

// This function generates dummy service requests
export function generateDummyServiceRequests(count, type) {
  const requests = [];

  for (let i = 1; i <= count; i++) {
    const serviceType = getRandomElement(servicesList);
    const baseDetails = {
      id: `00${i}`,
      status: type === "service" ? getRandomElement(statuses) : getRandomElement(userStatuses),
      zipCode: "19801",
      houseSize: `${1000 + Math.floor(Math.random() * 2000)} sqft`,
      date: getRandomDate(),
      time: "02:00 PM",
      cost: getRandomCost(),
    };

    let details = {};

    switch (serviceType) {
      case "Cleaning":
        details = {
          rooms: `Bedroom-${Math.floor(Math.random() * 3) + 1}, Kitchen-${
            Math.floor(Math.random() * 2) + 1
          }`,
        };
        break;
      case "Moving":
        details = {
          houseLocation: "Dhaka",
          movingType: "Packing & Moving",
          movingArea: "2-4 Bedrooms",
          movingTo: "Chittagong",
          movingZip: "4000",
          movingLocation: "Chittagong",
        };
        break;
      case "Remodeling":
        details = {
          propertyType: "Single Family",
          budgetLevel: ["Low", "Mid", "High"][Math.floor(Math.random() * 3)],
          propertyOwner: "Yes",
          planningToRenovate: "Kitchen, Bathroom",
          workingWithAnyone: "No",
          propertyAddress: "123 Main St, Dhaka",
          AreasToRenovate: "Kitchen, Bathroom, Living Room",
        };
        break;

      default:
        break;
    }
    if (type === "service") {
      const request = {
        user: {
          id: `00${i}`,
          name: "Md. Abid",
          email: "example@gmail.com",
          avatar: "/assets/user.png",
        },
        serviceType,
        ...baseDetails,
        details,
      };
      requests.push(request);
    }
    if (type === "provider") {
      const request = {
        id: `00${i}`,
        name: "Md. Abid",
        email: "example@gmail.com",
        avatar: "/assets/user.png",
        service: {
          serviceType,
          ...baseDetails,
          details,
        },
      };

      requests.push(request);
    }
  }

  return requests;
}
// Service:
// Zip Code:
// House Size:
// Rooms:
// Date:
// Time:
// Cost:

// Service:
// Zip Code:
// Property Type:
// Property Owner:
// Planning to renovate:
// Areas to renovate:
// Size of house:
// Working with anyone:
// Level of budget:
// Property address:
// Date:
// Time:
// Cost:

// Service:
// Zip Code:
// House Location:
// Moving Type:
// Moving Area:
// Moving TO:
// Moving Location:
// Date:
// Time:
// Cost: