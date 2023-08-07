import HeroImg from "../../assets/images/car-owners-registration.png";

const CarOwnersHero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${HeroImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "70%",
        height: 335,
        textAlign: "center",
      }}
    >
      <div className="h-full font-Bold flex flex-col justify-center items-center">
        <div className="container flex flex-col justify-center self-center">
          <h1 className="font-Bold text-center lg:text-5xl md:text-4xl text-3xl text-fleetLightBlue">
            Car owner registration
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CarOwnersHero;
