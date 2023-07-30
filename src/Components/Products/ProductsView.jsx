import Product1 from "../../assets/images/products-ride-hailing.svg";
import Product2 from "../../assets/images/products-rental.svg";
import Product3 from "../../assets/images/products-hire-purchase.svg";

const ProductsView = () => {
  const DataArray = [
    {
      icon: Product1,
      title: "Ride hailing for business (RH4B)",
      description:
        "Partner any ride hailing (RH) company i.e., Uber, Bolt, Yango etc. and gain access to their fleet manager dashboards that enable you monitor sales activities and performances of your cars. The driver would be an independent contractor working for you. FOVCollector2.1 ensures that sales are declared daily and manages field activities with dashboards to ensure accountability.",
    },
    {
      icon: Product2,
      title: "Rental for business (RT4B)",
      description:
        "Your vehicle is rented out (RT) to the driver who pays a fee daily, weekly, or monthly for using the vehicle. FOVCollector2.1 collects the rental fees and manages the use of the vehicle within the agreed parameters.",
    },
    {
      icon: Product3,
      title: "Hire-purchase for business (HP4B)",
      description:
        "Your vehicle is rented out (RT) to the driver who pays a fee daily, weekly, or monthly for using the vehicle. FOVCollector2.1 collects the rental fees and manages the use of the vehicle within the agreed parameters.",
    },
  ];

  return (
    <div className="bg-[#F7F9F8;] pt-8">
      <h3 className="font-Bold text-center mt-10 mb-5 text-[#0A0D14] lg:text-4xl md:text-4xl text-3xl">
        Our Products
      </h3>

      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-12 px-12 py-12">
        {DataArray.map((item, index) => {
          return (
            <div
              key={`${item.title}`}
              className="flex flex-col justify-start items-start mb-12"
            >
              <img
                src={item.icon}
                alt={`${item.title}-${index}`}
                className="img-fluid"
              />
              <div className="ml-5">
                <p className="font-Regular mb-4 mt-8 md:text-2xl text-xl text-[#0A0D14] tracking-tighter">
                  {item.title}
                </p>
                <p className="text-[#545151] font-Light text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsView;
