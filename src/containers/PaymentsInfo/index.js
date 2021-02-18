import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { subscribeAction, getSubscriptionsAction } from './actions';
import { getCurrentUserAction } from '../Auth/actions';
import { STRIPE_KEY, TOTAL_COST, CURRENCY } from './constants';
import StaticPage from '../../components/StaticPage';
import headerData from '../../constants/navData';

const PaymentsInfo = ({ user, subscribe, getSubscriptions, transactions, subscribed, getCurrentUser }) => {
  useEffect(() => {
    getSubscriptions();
  }, []);
  useEffect(() => {
    getSubscriptions();
    setTimeout(() => getCurrentUser(), 1000);
  }, [subscribed]);
  const onToken = e => {
    const data = {token: e.id};
    subscribe(data);
  };

  return (
    <StaticPage pageClass='profile' headerData={headerData.autorized}>
      <section className='payments-info'>
        <div className='payments-info-header'>
          <h2>My Payment info</h2>
        </div>
        <div className='payments-info-current-plan'>
          <p className='payments-info-current-plan-header'>Current Plan</p>
          <p className='payments-info-current-plan-active'>{(user && user.subscription) ? `Your subscription till: ${user.subscription_end_time}` : ''}</p>
        </div>
        <div className='payments-info-devider' />
        <div className='payments-info-current-plan'>
          <p className='payments-info-current-plan-header'>Payment Method</p>
          <StripeCheckout
            email={user ? user.email : ''}
            panelLabel="Submit payment"
            stripeKey={STRIPE_KEY}
            amount={TOTAL_COST}
            allowRememberMe={false}
            currency={CURRENCY}
            token={onToken}
          >
            <button disabled={true} className={`start-quiz-btn payments-info-btn ${(user && user.subscription) ? 'start-quiz-btn-disabled' : ''}`}>
              <span className='start-quiz-btn-text'>{(user && user.subscription) ? 'Subscribed' : 'Pay 199 EUR / year'}</span>
            </button>
          </StripeCheckout>
        </div>
        <div className='payments-info-devider' />
        <div className='payments-info-current-plan payments-info-invoicing'>
          <p className='payments-info-current-plan-header'>Invoicing</p>
          {transactions[0] ?
            <p className='payments-info-current-plan-active'>{`Last payment: ${transactions[0].start_date}`}</p> :
            null
          }
        </div>
      </section>
    </StaticPage>
  );
}

const mapStateToProps = ({auth: {user}, subscriptions: {transactions, subscribed}}) => ({
  user,
  transactions,
  subscribed,
});

const mapDispatchToProps = (dispatch) => ({
  subscribe: data => dispatch(subscribeAction(data)),
  getSubscriptions: () => dispatch(getSubscriptionsAction()),
  getCurrentUser: () => dispatch(getCurrentUserAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentsInfo)
