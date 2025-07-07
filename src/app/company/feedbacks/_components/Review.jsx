"use client";

export default function ReviewCard({ review }) {
  const defaultReview = [
    {
      name: "Md. Abid Hasan",
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur. Risus proin leo aliquet elit blandit morbi. Blandit vitae ornare nibh amet habitasse id sagittis eget interdum. Fusce egestas lobortis ut mattis. Etiam congue mauris faucibus est id magna. Tristique suspendisse aliquam nunc mattis pharetra leo egestas posuere. Libero pellentesque varius nisl dapibus eget mauris imperdiet amet ipsum. Scelerisque proin sed suspendisse faucibus pellentesque tincidunt aliquet in. Mollis aenean sociis nulla pretium id. Risus sed odio quis pellentesque vel dui.",
      avatar: "/assets/user.png",
    },
    {
      name: "Md. Abid Hasan",
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur. Risus proin leo aliquet elit blandit morbi. Blandit vitae ornare nibh amet habitasse id sagittis eget interdum. Fusce egestas lobortis ut mattis. Etiam congue mauris faucibus est id magna. Tristique suspendisse aliquam nunc mattis pharetra leo egestas posuere. Libero pellentesque varius nisl dapibus eget mauris imperdiet amet ipsum. Scelerisque proin sed suspendisse faucibus pellentesque tincidunt aliquet in. Mollis aenean sociis nulla pretium id. Risus sed odio quis pellentesque vel dui.",
      avatar: "/assets/user.png",
    },
    {
      name: "Md. Abid Hasan",
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur. Risus proin leo aliquet elit blandit morbi. Blandit vitae ornare nibh amet habitasse id sagittis eget interdum. Fusce egestas lobortis ut mattis. Etiam congue mauris faucibus est id magna. Tristique suspendisse aliquam nunc mattis pharetra leo egestas posuere. Libero pellentesque varius nisl dapibus eget mauris imperdiet amet ipsum. Scelerisque proin sed suspendisse faucibus pellentesque tincidunt aliquet in. Mollis aenean sociis nulla pretium id. Risus sed odio quis pellentesque vel dui.",
      avatar: "/assets/user.png",
    },
    {
      name: "Md. Abid Hasan",
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur. Risus proin leo aliquet elit blandit morbi. Blandit vitae ornare nibh amet habitasse id sagittis eget interdum. Fusce egestas lobortis ut mattis. Etiam congue mauris faucibus est id magna. Tristique suspendisse aliquam nunc mattis pharetra leo egestas posuere. Libero pellentesque varius nisl dapibus eget mauris imperdiet amet ipsum. Scelerisque proin sed suspendisse faucibus pellentesque tincidunt aliquet in. Mollis aenean sociis nulla pretium id. Risus sed odio quis pellentesque vel dui.",
      avatar: "/assets/user.png",
    },
    {
      name: "Md. Abid Hasan",
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur. Risus proin leo aliquet elit blandit morbi. Blandit vitae ornare nibh amet habitasse id sagittis eget interdum. Fusce egestas lobortis ut mattis. Etiam congue mauris faucibus est id magna. Tristique suspendisse aliquam nunc mattis pharetra leo egestas posuere. Libero pellentesque varius nisl dapibus eget mauris imperdiet amet ipsum. Scelerisque proin sed suspendisse faucibus pellentesque tincidunt aliquet in. Mollis aenean sociis nulla pretium id. Risus sed odio quis pellentesque vel dui.",
      avatar: "/assets/user.png",
    },
    {
      name: "Md. Abid Hasan",
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur. Risus proin leo aliquet elit blandit morbi. Blandit vitae ornare nibh amet habitasse id sagittis eget interdum. Fusce egestas lobortis ut mattis. Etiam congue mauris faucibus est id magna. Tristique suspendisse aliquam nunc mattis pharetra leo egestas posuere. Libero pellentesque varius nisl dapibus eget mauris imperdiet amet ipsum. Scelerisque proin sed suspendisse faucibus pellentesque tincidunt aliquet in. Mollis aenean sociis nulla pretium id. Risus sed odio quis pellentesque vel dui.",
      avatar: "/assets/user.png",
    },
  ];

  const reviewData = review || defaultReview;

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ));
  };

  return (
    <div className="space-y-6 p-4">
      {reviewData.map((reviewData, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-lg p-6 w-full "
        >
          <div className="flex items-start space-x-4">
            <img
              src={reviewData.avatar || "/placeholder.svg"}
              alt={reviewData.name}
              className="w-12 h-12 rounded-full flex-shrink-0"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {reviewData.name}
                </h3>
                <div className="flex items-center space-x-1">
                  {renderStars(reviewData.rating)}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{reviewData.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
