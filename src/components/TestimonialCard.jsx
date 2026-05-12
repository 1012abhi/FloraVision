const TestimonialCard = ({ name, review, rating, avatar }) => {
    return (
        <div className="border border-white/20 p-5 rounded-4xl shadow-md text-start backdrop-blur-sm">

            <div className="flex justify-center items-center gap-8 mb-3">
                <img
                    src={avatar}
                    alt={name}
                    className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                    <h4 className="font-semibold text-lg text-white">{name}</h4>
                    <p className="text-yellow-500 text-sm">
                        {"⭐".repeat(rating)}
                    </p>
                </div>
            </div>

            <p className="text-white text-sm leading-relaxed mt-14">
                {review}
            </p>
        </div>
    );
};

export default TestimonialCard;