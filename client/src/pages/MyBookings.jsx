// src/pages/MyBookings.jsx
import React, { useEffect, useState } from "react";
import { dateFormat } from "../lib/dateFormat";
import BlurCircle from "../components/BlurCircle"; // correct path

const Loading = () => <p>Loading...</p>;

const MyBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY || "$";
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch bookings for logged-in user
  const getMyBookings = async () => {
    try {
      const res = await fetch("/api/my-bookings"); // Replace with your real API
      if (!res.ok) throw new Error("Failed to fetch bookings");
      const data = await res.json();
      setBookings(data);
    } catch (err) {
      console.error(err);
      setBookings([]); // fallback
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMyBookings();
  }, []);

  return !isLoading ? (
    <div className="relative px-6 md:px-16 lg:px-40 pt-30 md:pt-40 min-h-[80vh]">
      {/* Blur backgrounds */}
      <BlurCircle top="100px" left="100px" />
      <BlurCircle bottom="0px" left="600px" />

      <h1 className="text-lg font-semibold mb-4">MY Bookings</h1>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        bookings.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row justify-between bg-primary/8 border border-primary/20 rounded-lg mt-4 p-2 max-w-3xl"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <img
                src={item.show.movie.poster_path}
                alt={item.show.movie.title}
                className="md:w-44 w-full aspect-video h-auto object-cover rounded"
              />
              <div className="flex flex-col p-4 flex-1">
                <p className="text-lg font-semibold">{item.show.movie.title}</p>
                <p className="text-gray-400 text-sm">
                  {new Date(item.show.showDateTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
                <p className="text-gray-400 text-sm mt-auto">
                  {dateFormat(item.show.showDateTime)}
                </p>
              </div>
            </div>

            <div className="flex flex-col md:items-end md:text-right justify-between p-4">
              <div className="flex items-center gap-4">
                <p className="text-2xl font-semibold mb-3">
                  {currency}
                  {item.amount}
                </p>
                {!item.isPaid && (
                  <button className="bg-primary px-4 py-1.5 mb-3 text-sm rounded-full font-medium cursor-pointer">
                    Pay Now
                  </button>
                )}
              </div>
              <div className="text-sm">
                <p>
                  <span className="text-gray-400">Total Tickets :</span>{" "}
                  {item.bookedSeats.length}
                </p>
                <p>
                  <span className="text-gray-400">Seat Number :</span>{" "}
                  {item.bookedSeats.join(", ")}
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  ) : (
    <Loading />
  );
};

export default MyBookings;