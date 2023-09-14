import Tours from "../components/Tours";

export default function Home() {
    return (
        <div className="container">
            <p className="container mt-5">TerraCustos is a passionately developed application that connects people's collective efforts in nature conservation and sustainability.
                The app aims to inspire and encourage people to protect and care for our Earth, while enabling them to actively participate in preserving the environment, all while fostering a closer connection to nature through the experiences gained during their journeys.</p>
            <Tours />
        </div>
    )
}