"use client";

export default function NotificationsList() {
  const notifications = [
    {
      id: 1,
      type: "appointment",
      title: "New Appointment",
      description: "An user booked an appointment.",
      action: "Tap to view",
      date: "05-04-2025",
      time: "05:50 PM",
    },
    {
      id: 2,
      type: "feedback",
      title: "New Feedback",
      description: "An user left a feedback.",
      action: "Tap to view",
      date: "05-04-2025",
      time: "05:50 PM",
    },
    {
      id: 3,
      type: "appointment",
      title: "New Appointment",
      description: "An user booked an appointment.",
      action: "Tap to view",
      date: "05-04-2025",
      time: "05:50 PM",
    },
    {
      id: 4,
      type: "feedback",
      title: "New Feedback",
      description: "An user left a feedback.",
      action: "Tap to view",
      date: "05-04-2025",
      time: "05:50 PM",
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case "appointment":
        return "border-l-yellow-500";
      case "feedback":
        return "border-l-blue-500";
      default:
        return "border-l-gray-500";
    }
  };

  return (
    <div className="w-full mx-auto bg-white">
      <div className="space-y-1">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`border-l-4 ${getTypeColor(
              notification.type
            )} bg-white p-4 hover:bg-gray-50 cursor-pointer transition-colors`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-start justify-between w-full">
                <div className="w-1/3 flex items-center justify-start">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {notification.title}
                  </h3>
                  <p className="text-gray-600 mb-1">
                    {notification.description}{" "}
                    <span className="text-gray-400">{notification.action}</span>
                  </p>
                </div>
                <div className="flex items-center justify-center space-x-4 ml-4 w-1/3">
                  <div className="text-right">
                    <div className="flex items-center text-gray-500 mb-1">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-sm">{notification.date}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-sm">{notification.time}</span>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 flex items-center justify-end">
                  <button className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
