const ReviewsCard = ({ review }) => {
  return (
    <>
      <div className="py-4 sm:py-8 md:py-16 text-center px-2 sm:px-4">
        <div className="bg-transparent border border-white/20 text-white backdrop-blur-md rounded-xl mx-auto w-full max-w-[320px] sm:max-w-[368px] h-[400px] sm:h-[500px] md:h-[700px] flex flex-col">
          <div className="flex flex-col bg-white/10 rounded-xl h-full">
            <img
              src={review.image}
              alt={review.name}
              className="w-full h-32 sm:h-48 md:h-[368px] rounded-xl object-cover mb-2 sm:mb-4"
            />
            <div className="px-3 sm:px-4 md:px-8 flex flex-col flex-1">
              <h3 className="text-base sm:text-lg md:text-2xl font-bold mb-2 sm:mb-4">
                {review.name}
              </h3>
              <div className="flex justify-center text-sm sm:text-base">
                {review.rating}
              </div>
              <p className="mt-2 sm:mt-4 italic text-xs sm:text-sm md:text-base text-white flex-1 overflow-hidden">
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
