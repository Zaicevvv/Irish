import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { STRIPE_KEY, TOTAL_COST, SINGLE_COST, CURRENCY } from '../../containers/PaymentsInfo/constants';
import StripeCheckout from 'react-stripe-checkout';

const PaymentModal = ({ id, courseName, user, onToken, onTokenSingle, open, hideModal }) => {

  const useStyles = makeStyles(() => ({
    paper: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '100%',
      maxWidth: 700,
      backgroundColor: '#fff',
      borderRadius: 10,
      outline: 0,
      padding: '20px',
      transform: 'translate(-50%,-50%)'
    },
  }));

  const classes = useStyles();

  return (
    <div >

      {open ? (
        <div
          className='custom_modal'
        >
          <div className={classes.paper}>
            <button type='button' className='close_payment_modal' onClick={hideModal}>x</button>
            <h3 className='price_modal_header mb-30'>Pricing Per Educator: </h3>
            <div className='justify-center row'>
              <div className='price_modal_item'>
                <h4 className='price_item_header'>{courseName} module</h4>
                <p className='price_modal_label'>Price for individual module:</p>
                <p className='price_modal_amount'>{`${SINGLE_COST / 100} ${CURRENCY}`}</p>
                <div className='checkout_wrapper'>
                  <StripeCheckout
                    email={user ? user.email : ''}
                    panelLabel="Submit payment"
                    stripeKey={STRIPE_KEY}
                    amount={SINGLE_COST}
                    allowRememberMe={false}
                    currency={CURRENCY}
                    token={(e) => onTokenSingle(e, id)}
                  >
                    <button disabled={true} className={`price_modal_btn start-quiz-btn payments-info-btn ${(user && user.subscription) ? 'start-quiz-btn-disabled' : ''}`}>
                      <span className='start-quiz-btn-text'>{(user && user.subscription) ? 'Subscribed' : `Pay ${SINGLE_COST / 100} ${CURRENCY} /year`}</span>
                    </button>
                  </StripeCheckout>
                </div>
              </div>
              <div className='price_modal_item'>
                <h4 className='price_item_header'>
                  Buy all 5 modules
                </h4>
                <p className='price_modal_label'>Price for all modules:</p>
                <p className='price_modal_old_amount'>{`${SINGLE_COST * 5 / 100} ${CURRENCY}`}</p>
                <p className='price_modal_amount'>{`${TOTAL_COST / 100} ${CURRENCY}`}</p>
                <StripeCheckout
                  email={user ? user.email : ''}
                  panelLabel="Submit payment"
                  stripeKey={STRIPE_KEY}
                  amount={TOTAL_COST}
                  allowRememberMe={false}
                  currency={CURRENCY}
                  token={onToken}
                >
                  <button disabled={true} className={`price_modal_btn start-quiz-btn payments-info-btn ${(user && user.subscription) ? 'start-quiz-btn-disabled' : ''}`}>
                    <span className='start-quiz-btn-text'>{(user && user.subscription) ? 'Subscribed' : `Pay ${TOTAL_COST / 100} ${CURRENCY} /year`}</span>
                  </button>
                </StripeCheckout>

              </div>
            </div>

          </div>
        </div>
      ) : null}
    </div>
  )
};

export default PaymentModal;