type CardProps = {
    title: string,
    exp: String
}

const Card = ({title, exp}: CardProps ) => {
    return (
        <div className="bg-orange-700 p-4 m-2 rounded-md md:h-2 md:w-2">
            <h4 className="text-white">{title}</h4>
            <p className="text-5xl">{exp}</p>
        </div>
    );
};

export default Card;