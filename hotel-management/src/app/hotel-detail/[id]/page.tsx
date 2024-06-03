"use client";

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { fetchHotelById } from '../../../../sanity/sanity.utils';

interface Amenity {
  _key: string;
  icon: string;
  amenity: string;
}

interface Image {
  url?: string;
  file?: {
    asset?: {
      url: string;
    };
  };
}

interface Review {
  _id: string;
  reviewText: string;
  reviewerName: string;
}

interface Hotel {
  _id: string;
  name: string;
  description: string;
  price: number;
  discount?: number;
  images: Image[];
  coverImage?: Image;
  type: string;
  specialNote?: string;
  dimension?: string;
  numberOfBeds: number;
  offeredAmenities: Amenity[];
  isBooked: boolean;
  isFeatured: boolean;
  reviews: Review[];
}


const HotelDetailPage = () => {
  const router = useRouter();
  const { id } = useParams();

  const [hotel, setHotel] = useState<Hotel | null>(null);

  useEffect(() => {
    const fetchHotel = async (hotelId: string) => {
      try {
        const fetchedHotel = await fetchHotelById(hotelId);
        setHotel(fetchedHotel);
      } catch (error) {
        console.error('Error fetching hotel:', error);
      }
    };

    if (typeof id === 'string') {
      fetchHotel(id);
    }
  }, [id]);

  if (!hotel) {
    return (
      <div>
        <h1>Hotel not found</h1>
        <p>The hotel you are looking for does not exist.</p>
      </div>
    );
  }

  const {
    name,
    description,
    price,
    discount,
    images,
    coverImage,
    type,
    specialNote,
    dimension,
    numberOfBeds,
    offeredAmenities,
    isBooked,
    isFeatured,
    reviews,
  } = hotel;

  return (
    <div className="hotel-detail">
      <h1>{name}</h1>
      <img src={coverImage?.url || coverImage?.file?.asset?.url} alt={name} />
      <p>{description}</p>
      <p>Price: ${price}</p>
      {discount !== undefined && <p>Discount: {discount}%</p>}
      <p>Room Type: {type}</p>
      <p>Dimension: {dimension}</p>
      <p>Number of Beds: {numberOfBeds}</p>
      <p>Special Note: {specialNote}</p>
      <p>Status: {isBooked ? 'Booked' : 'Available'}</p>
      {isFeatured && <p>This is a featured room!</p>}
      <h2>Amenities</h2>
      <ul>
        {offeredAmenities.map((amenity, index) => (
          <li key={index}>
            <img src={amenity.icon} alt={amenity.amenity} />
            {amenity.amenity}
          </li>
        ))}
      </ul>
      <h2>Gallery</h2>
      <div className="gallery">
        {images.map((image, index) => (
          <img key={index} src={image.url || image.file?.asset?.url} alt={`Image ${index + 1}`} />
        ))}
      </div>
      <h2>Reviews</h2>
      {/* {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review._id}>
              <p>{review.reviewText}</p>
              <p>- {review.reviewerName}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet.</p>
      )} */}
    </div>
  );
};

export default HotelDetailPage;
