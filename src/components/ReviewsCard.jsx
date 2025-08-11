const ReviewsCard = ({ review }) => {
  return (
    <>
      <div className="py-8 sm:py-12 md:py-16 text-center px-4">
        <div className="bg-transparent border border-white/20 text-white backdrop-blur-md rounded-xl max-w-[368px] mx-auto h-[500px] sm:h-[600px] md:h-[700px] flex flex-col">
          <div className="flex flex-col bg-white/10 rounded-xl h-full">
            <img
              src={review.image}
              alt={review.name}
              className="w-full h-48 sm:h-64 md:h-[368px] rounded-xl object-cover mb-2 sm:mb-4"
            />
            <div className="px-4 sm:px-6 md:px-8 flex flex-col flex-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">
                {review.name}
              </h3>
              <div className="flex justify-center">{review.rating}</div>
              <p className="mt-2 sm:mt-4 italic text-sm sm:text-base text-white flex-1 overflow-hidden">
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
