const ReviewsCard = ({ review }) => {
  return (
    <>
      <div className="py-16 text-center">
        <div className="bg-white rounded-xl max-w-[368px] h-[700px] flex flex-col">
          <div className="flex flex-col bg-white rounded-xl h-full">
            <img
              src={review.image}
              alt={review.name}
              className="w-[368px] h-[368px] rounded-xl object-cover mb-4"
            />
            <div className="px-8 flex flex-col h-[280px]">
              <h3 className="text-2xl font-bold mb-4">{review.name}</h3>
              <div className="flex justify-center">{review.rating}</div>
              <p className="mt-4 italic text-md text-black flex-1 overflow-hidden">
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
