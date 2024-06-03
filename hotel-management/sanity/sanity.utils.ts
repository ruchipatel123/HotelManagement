import { createClient,groq } from "next-sanity";
import { dataset, projectId} from './env'
import sanityClient from '@sanity/client';

export  async function getNavBar() {
  const client = createClient({
      projectId,
      dataset,
    })
    return client.fetch(
      groq`*[_type == "Navbar"]{
        title,link}`
    )
} 

const client = sanityClient({
  projectId: projectId, // replace with your project ID
  dataset: dataset, // replace with your dataset name
  useCdn: true // `false` if you want to ensure fresh data
});

export const fetchBanner = async() =>{
  const query = '*[_type == "Banner"][0]';
  const Banner = await client.fetch(query);
  return Banner;
}

export const fetchHotels = async () => {
  const query = '*[_type == "hotelRoom"]';
  const hotels = await client.fetch(query);
  return hotels;
};




// export const fetchHotels = async () => {
//   const query = '*[_type == "hotel"]';
//   const hotels = await client.fetch(query);
//   return hotels;
// };


export const fetchHotelById = async (id) => {
  const query = `*[_type == "hotelRoom" && _id == $id][0]{
    name,
    description,
    price,
    discount,
    images[]{
      url,
      file {
        asset -> {
          _id,
          url
        }
      }
    },
    coverImage {
      url,
      file {
        asset -> {
          _id,
          url
        }
      }
    },
    type,
    specialNote,
    dimension,
    numberOfBeds,
    offeredAmenities[]{
      icon,
      amenity
    },
    isBooked,
    isFeatured,
    reviews[]->{
      _id,
      reviewText,
      reviewerName
    }
  }`;
  const params = { id };
  const hotel = await client.fetch(query, params);
  return hotel;
};