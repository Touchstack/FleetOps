import Empty from '../../.././assets/images/EmptyState.svg';
import { PropTypes } from 'prop-types';

const EmptyState = ({ BidType }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 h-full md:mt-20 mt-3">
      <div className="order-1 md:order-2 flex justify-center items-center pt-20 md:pt-0">
        <img src={Empty} alt="" />
      </div>

      <div className='flex flex-col items-center justify-center md:items-start order-2 md:order-1'>
        <h1 className='mb-2 font-Bold text-[24px] md:text-[37px] text-center'>
          You have no {BidType} bids
        </h1>
        <p className='md:w-[396px] w-[248px] text-[16px] text-center md:text-[19px] font-Medium text-[#545151]'>
          Choose from a wide variety of vehicles from the top car owners. All brands and models you want.
        </p>
      </div>
    </div>
  );
};

export default EmptyState;

EmptyState.propTypes = {
  BidType: PropTypes.string.isRequired,
}
