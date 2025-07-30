const ReviewsCard = ({ review }) => {
  return (
    <>
      <div className="py-16 text-center">
        <div className="bg-white rounded-xl max-w-[368px]">
          <div className="flex flex-col bg-white rounded-xl">
            <img
              src={review.image}
              alt={review.name}
              className="w-[368px] h-[368px] rounded-xl object-cover mb-4"
            />
            <div className="px-8 pb-8">
              <h3 className="text-2xl font-bold mt-8 mb-4">{review.name}</h3>
              <p className="italic text-md mt-16 text-black max-h-[144px]">
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
