import PropTypes from "prop-types";

const ProductsView = ({ cssprops, DataArray }) => {

  return (
    <div className={`${cssprops} pt-8 `}>
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

ProductsView.propTypes = {
  cssprops: PropTypes.string,
  DataArray:PropTypes.array,
};

ProductsView.defaultProps = {
  cssprops: "",
  DataArray:[],
};

export default ProductsView;
