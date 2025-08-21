const ReviewsCard = ({ review }) => {
  return (
    <>
      <div className="py-16 text-center">
        <div className="bg-transparent border border-white/20 text-white backdrop-blur-md rounded-xl w-full max-w-[95vw] sm:max-w-[368px] h-[90vh] sm:h-[700px] flex flex-col">
          <div className="flex flex-col bg-white/10 rounded-xl h-full">
            <img
              src={review.image}
              alt={review.name}
              className="w-full h-[50vh] sm:w-[368px] sm:h-[368px] rounded-xl object-cover mb-4"
            />
            <div className="px-8 flex flex-col flex-1 sm:h-[280px]">
              <h3 className="text-3xl sm:text-2xl font-bold mb-4">
                {review.name}
              </h3>
              <div className="flex justify-center text-2xl sm:text-base">
                {review.rating}
              </div>
              <p className="mt-4 italic text-lg sm:text-md text-white flex-1 overflow-hidden">
                {review.review}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewsCard;
