import { Star } from "lucide-react";

interface ratingProps {
	rating: number;
}

const Rating = ({ rating }: ratingProps) => {
	return [1, 2, 3, 4, 5].map((index) => (
		<Star
			key={index}
			className={`w-4 h-4 ${
				index <= rating ? "text-yellow-400" : "text-gray-300"
			}`}
		/>
	));
};

export default Rating;
