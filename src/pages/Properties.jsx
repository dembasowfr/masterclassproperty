import React from "react";
import Property from "./../components/properties/forms/Property";

//Get the Banner fromm common folder
import { Banner, Filter } from "./../components/common";

//Get the properties from the json file
import data from "./../data/properties/data.json";

import banner from "./../assets/images/banner/banner5.png";

const properties = data.properties;


const Properties = () => {
    return (
        <main className="w-full flex flex-col items-center justify-center dark:bg-gray-900">
            <Banner title="PROPERTIES IN TÜRKİYE" image={banner} description="Find your dream home in Türkiye's wonderful cities" />
            <section className="px-8">
                <Filter />
                <div className = "py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {
                        properties.map((property) => (
                            <Property
                                key = {property?.id}
                                type = {property?.type}
                                isFavorite = {property?.isFavorite}
                                title = {property?.title}
                                description = {property?.description}
                                profileImage = {property?.source}
                                gallery = {property?.gallery}
                                location = {property?.location}
                                price = {property?.price}
                                reference = {property?.reference}
                                createdAt = {property?.createdAt}
                                updatedAt = {property?.updatedAt}
                                overview = {property?.overview}
                                benefits = {property?.benefits}
                                details = {property?.details}
                                features = {property?.features}
                            />
                        ))
                
                    }
                </div>
            </section>
        </main>
    );
};

export default Properties;