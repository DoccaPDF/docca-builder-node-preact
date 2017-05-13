import { h } from 'preact';

import _map from 'lodash/map';
import _upperFirst from 'lodash/upperFirst';

import { getPDFInfoDate, DateFormatter } from '../../dates';
import { CurrencyFormatter } from '../../currency';

import Header from './header';
import Footer from '../footer/page-numbers';

const defaultStyle = `
  page { margin: 20 20 10 20; font-size: 9 }
  text { margin: 1 0 1 0 }
  logo { width: 150; }
  page-numbers { align-items: right }

  sectionCoL { margin: 0 5 0 0 }
  sectionCoR { margin: 0 0 0 5 }

  infoHeader { extend: header; }
  infoSection { margin: 0 0 11 0; }
  summSection { margin: 0 0 6 0; }
  detailHeader { flow: row; border: 0 0 1 0; padding: 5; font-size: 8; }
  detailRow {
    flow: row;
    border: 0 0 1 0;
    border-color: lightgrey;
    margin: 3 0 0 0;
    padding: 0 5 3 0;
    font-size: 8;
  }
  dDate { width: 130; }
  dType { width: 100; }
  dCharge { width: 80; align-items: right; }
  dEvent { width: 100; }
  totalRow {
    extend: detailRow;
    border: 0 0 1 0;
    margin: 3 0 20 0;
    border-color: black;
  }

  h1 { font-weight: bold; font-size: 14 }
  h2 {
    font-weight: bold;
    font-size: 10;
    padding: 3 4 1 4;
    margin: 0 0 12 0;
    background-color: #EDEDED;
  }
  h3 { font-weight: bold; font-size: 9 }

  section { flow: row; margin: 10 0 10 0 }

  .note { font-family: NotoSans; margin: 20 0 0 0; }
  bold { font-weight: bold }
  .bold { font-weight: bold }
  .right { align-items: right; }
  .items-right { align-items: right; }
  .big { font-size: 14 }
  .paid { align-items: right; font-color: red; font-size: 15; }
  footer { margin: 20 0 0 0; }

`;

function formatEventKey (key) {
  return _map(key.split('_'), _upperFirst).join(' ');
}

/**
 * Chargify Standard Statement
 */
const Statement = ({ style = defaultStyle, data = {} }) => {
  const date = DateFormatter({ utcOffset: data.utcOffset, format: 'D MMM YYYY' });
  const datetime = DateFormatter({ utcOffset: data.utcOffset });
  const currencyCode = data.currency || 'USD';
  const currencyFormatter = CurrencyFormatter({ currencyCode });
  const currency = (amount) => {
    return `${currencyFormatter.format((amount || 0) / 100)} ${currencyCode}`;
  };
  const statement = data.chargify.statement;
  const product = data.chargify.subscription.product.name;
  const productFamily = data.chargify.subscription.product.product_family.name;
  return (
    <doc
      size='A4'
      author={data.pdf.author || false}
      title={data.pdf.title || false}
      subject={data.pdf.subject || false}
      creator='Docca'
      keywords='chargify statement'
      moddate={getPDFInfoDate(new Date())}
    >
      <style>{style}</style>
      <page>
        <Header supplier={data.supplier} />

        <row>
          <co>
            <h1>{statement.customer_organization}</h1>
            <l href={`mailto:${data.chargify.customer.email}`}>{data.chargify.customer.email}</l>
          </co>
          <co class='items-right'>
            <l class='big bold items-right'>({statement.id})</l>
            <l class='items-right'>{productFamily} - {product}</l>
          </co>
        </row>
        <section>
          <sectionCoL>
            <h2>Account Information</h2>
            <infoSection>
              <l>{statement.customer_first_name} {statement.customer_last_name}</l>
              <l>{statement.customer_organization}</l>
              <l href={`mailto:${data.chargify.customer.email}`}>{data.chargify.customer.email}</l>
            </infoSection>
            <infoSection>
              <l><h3> Shipping Address </h3></l>
              <l>{statement.customer_shipping_address}</l>
              <l>{statement.customer_shipping_city}, {statement.customer_shipping_state} {statement.customer_shipping_zip}</l>
              <l>{statement.customer_shipping_country}</l>
            </infoSection>
            <infoSection>
              <l><h3> Billing Address </h3></l>
              <l>{statement.customer_billing_address}</l>
              <l>{statement.customer_billing_city}, {statement.customer_billing_state} {statement.customer_billing_zip}</l>
              <l>{statement.customer_billing_country}</l>
            </infoSection>
          </sectionCoL>
          <sectionCoR>
            <h2>Summary</h2>
            <summSection>
              <ro>
                Date:
                {statement.closed_at && date(statement.closed_at)}
                {!statement.closed_at && 'Current'}
              </ro>
              <ro>
                Billing Period:
                {statement.closed_at && <o>{date(statement.opened_at)} - {date(statement.closed_at)}</o>}
                {!statement.closed_at && date(statement.opened_at)}
              </ro>
            </summSection>
            <summSection>
              <l>Starting Balance: {currency(statement.starting_balance_in_cents)}</l>
              <l>Current Charges: {currency(statement.total_in_cents)}</l>
              <l>Payments: {currency(statement.payments_total)}</l>
              <l>Ending Balance: {currency(statement.ending_balance)}</l>
            </summSection>
            <summSection>
              {statement.settled_at && <o><l>Balance Paid: {datetime(statement.settled_at)}</l><l class='paid'>PAID</l></o>}
              {!statement.settled_at && <l>Balance Paid: Not yet due</l>}
            </summSection>
          </sectionCoR>
        </section>

        <section>
          <co>
            <h2>Detail</h2>
            <infoHeader>
              <h3>Current Charges and Adjustments</h3>
              <detailHeader>
                <dDate>Date/Time</dDate>
                <dType>Type</dType>
                <dDesc>Detail</dDesc>
                <dCharge>Charge</dCharge>
              </detailHeader>
            </infoHeader>
            {statement.transactions.map(trans =>
              !trans.isPayment &&
                <detailRow>
                  <dDate>{datetime(trans.created_at)}</dDate>
                  <dType>{trans.label}</dType>
                  <co>{trans.memo}</co>
                  <dCharge>{currency(trans.amount_in_cents)}</dCharge>
                </detailRow>
            )}
            <totalRow>
              <bold class='right'>Total</bold>
              <dCharge>{currency(statement.total)}</dCharge>
            </totalRow>
          </co>
        </section>

        <section>
          <co>
            <h2>Payments</h2>
            <detailHeader>
              <dDate>Date/Time</dDate>
              <dType>Type</dType>
              <co>Detail</co>
              <dCharge>Amount</dCharge>
            </detailHeader>

            {statement.transactions.map(trans =>
              trans.isPayment &&
                <detailRow>
                  <dDate>{datetime(trans.created_at)}</dDate>
                  <dType>{trans.card_type && `CC Payment`}</dType>
                  <co>
                    {trans.memo}
                    {trans.card_number} {trans.card_type} ({trans.card_expiration})
                  </co>
                  <dCharge>{currency(trans.amount_in_cents)}</dCharge>
                </detailRow>
            )}

            <totalRow>
              <bold class='right'>Total</bold>
              <dCharge>{currency(statement.payments_total)}</dCharge>
            </totalRow>
          </co>
        </section>
        <Footer />
      </page>

      <page>
        <h2>Period Activity</h2>
        <infoHeader>
          <detailHeader>
            <dDate>Date/Time</dDate>
            <dEvent>Event</dEvent>
            <co>Detail</co>
          </detailHeader>

          {statement.events.map(rec =>
            <detailRow>
              <dDate>{datetime(rec.event.created_at)}</dDate>
              <dEvent>{formatEventKey(rec.event.key)}</dEvent>
              <co>{rec.event.message}</co>
            </detailRow>
          )}
        </infoHeader>

        <pre class='note'>{statement.memo}</pre>
        <Footer />
      </page>
    </doc>
  );
};

export default Statement;
