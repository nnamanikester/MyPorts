import React from 'react';
import * as UI from '../../components/common';
import Header from '../../components/Header';
import {FAQS} from '../../apollo/queries';
import {useLazyQuery} from '@apollo/react-hooks';

const FAQScreen = ({navigation}) => {
  const [getFaqs, {data, loading, error, refetch}] = useLazyQuery(FAQS);
  const [faqs, setFaqs] = React.useState([]);

  React.useEffect(() => {
    getFaqs();
  }, []);

  React.useMemo(() => {
    if (data) {
      setFaqs(data.faqs);
    }
  }, [data]);

  React.useMemo(() => {
    if (error) {
      getFaqs();
    }
  }, [error]);

  return (
    <>
      <UI.Loading show={loading} />
      <Header
        title="FAQ"
        headerLeft={
          <UI.Clickable onClick={() => navigation.goBack()}>
            <UI.Icon name="ios-arrow-back" color="#fff" />
          </UI.Clickable>
        }
      />
      <UI.Layout onRefresh={() => refetch()}>
        <UI.Spacer />

        <UI.Text h2>Frequently Asked Questions</UI.Text>

        <UI.Spacer large />

        {faqs.length > 0 ? (
          <UI.Accordion>
            {faqs.map((f, i) => {
              return (
                <UI.AccordionItem key={f.id + i} headerText={f.question}>
                  <UI.Text>{f.answer}</UI.Text>
                </UI.AccordionItem>
              );
            })}
          </UI.Accordion>
        ) : (
          <UI.Text>No Questions Yet</UI.Text>
        )}

        <UI.Spacer large />

        <UI.Link onClick={() => navigation.navigate('ContactSupport')}>
          Have a question? Feel free to ask
        </UI.Link>
        <UI.Spacer large />
      </UI.Layout>
    </>
  );
};

export default FAQScreen;
