
const Heading = ({subTitle, title}) => {
    return (
        <div className="text-center mt-10 ">
            <hr />
            <div className="mt-10">
                <h1 className="text-red-600 uppercase">{subTitle}</h1>
                <h1 className="text-4xl font-semibold">{title}</h1>
            </div>
        </div>
    );
};

export default Heading;