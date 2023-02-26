import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { Head, Gallery, Details } from './../components/properties/property';
import {Route, Enquire} from './../components/common';


const Property = () => {
  const { slug } = useParams(); // access the "id" parameter from the URL
  
  const { state } = useLocation();
  console.log(state);

  //Get property details from the state
  const { title, price, reference, createdAt, updatedAt, gallery, description, overview, features, benefits, details } = state;
  //console.log("From details:"+features);
  return (
    <main className="bg-gray-100 mx-auto px-auto dark:bg-gray-900">
      <Route component="Properties" breadcrumbs={title} />
      <Head
        title={title}
        description={description}
        price={price}
        reference={reference}
        createdAt={createdAt}
        updatedAt={updatedAt}
      />
      <section className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          <Gallery images={gallery} />
          <Details
            overview={overview}
            //convert features to an array using json.parse
            features={JSON.parse(features)}
            benefits={benefits}
            details={details}
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <Enquire />
        </div>
      </section>
    </main>
  );
};

export default Property;
