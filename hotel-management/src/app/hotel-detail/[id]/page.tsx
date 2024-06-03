// pages/hotel/[id].js
"use client";

// pages/hotel/[id].js

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { fetchHotelById } from '../../../../sanity/sanity.utils';

const HotelDetailPage = () => {
  const router = useRouter();
  // const { id } = router.query;
  const { id } = useParams();

  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const fetchedHotel = await fetchHotelById(id);
        setHotel(fetchedHotel);
      } catch (error) {
        console.error('Error fetching hotel:', error);
      }
    };

    if (id) {
      fetchHotel();
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
      {discount > 0 && <p>Discount: {discount}%</p>}
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
