import Heading from "../../../Shared/Heading/Heading";

const Skills = () => {
    return (
        <div id="skills">
            <Heading subTitle={"6+ months experience"} title={"My Skills"}></Heading>
            <div className="my-10 mx-10">
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="md:w-1/2">
                        <h1 className="text-2xl font-semibold mb-4">
                            FrontEnd Technology
                        </h1>
                        <div className="text-xl">
                            <div>
                                <div className="flex justify-between">
                                    <p>React</p>
                                    <p>80%</p>
                                </div>
                                <progress className="progress progress-error" value="80" max="100"></progress>
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <p>React Router</p>
                                    <p>75%</p>
                                </div>
                                <progress className="progress progress-error" value="75" max="100"></progress>
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <p>Tailwind CSS</p>
                                    <p>90%</p>
                                </div>
                                <progress className="progress progress-error " value="90" max="100"></progress>
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <p>Bootstrap</p>
                                    <p>80%</p>
                                </div>
                                <progress className="progress progress-error" value="80" max="100"></progress>
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <p>Firebase</p>
                                    <p>70%</p>
                                </div>
                                <progress className="progress progress-error" value="70" max="100"></progress>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <h1 className="text-2xl font-semibold mb-4">
                            BackEnd Technology
                        </h1>
                        <div className="text-xl">
                            <div>
                                <div className="flex justify-between">
                                    <p>Node JS</p>
                                    <p>30%</p>
                                </div>
                                <progress className="progress progress-error" value="30" max="100"></progress>
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <p>Express JS</p>
                                    <p>60%</p>
                                </div>
                                <progress className="progress progress-error" value="60" max="100"></progress>
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <p>MongoDB</p>
                                    <p>50%</p>
                                </div>
                                <progress className="progress progress-error" value="50" max="100"></progress>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;