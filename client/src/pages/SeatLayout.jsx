import { ArrowRightIcon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Added for navigation

const timings = ["06:30", "09:30", "12:00", "04:30", "08:00"];

const SeatLayout = () => {
  const navigate = useNavigate(); // ✅ Added

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState("06:30");
  const [errors, setErrors] = useState([]);

  const toggleSeat = (id) => {
    if (selectedSeats.includes(id)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== id));
    } else {
      if (selectedSeats.length >= 5) {
        const errorId = Date.now();
        const newError = { id: errorId, message: "You can select only 5 seats" };

        setErrors((prev) => [...prev, newError]);

        setTimeout(() => {
          setErrors((prev) => prev.filter((err) => err.id !== errorId));
        }, 3000);

        return;
      }
      setSelectedSeats([...selectedSeats, id]);
    }
  };

  const renderRow = (row, count, split = false) => {
    return (
      <div className="flex items-center gap-3 mb-4">
        <span className="w-4 text-gray-400">{row}</span>

        <div className="flex gap-2">
          {Array.from({ length: count }).map((_, i) => {
            const seatId = `${row}${i + 1}`;
            return (
              <div
                key={seatId}
                onClick={() => toggleSeat(seatId)}
                className={`w-7 h-7 rounded border border-red-500 cursor-pointer transition
                  ${
                    selectedSeats.includes(seatId)
                      ? "bg-red-500"
                      : "hover:bg-red-700/40"
                  }`}
              ></div>
            );
          })}
        </div>

        {split && <div className="w-12"></div>}

        {split && (
          <div className="flex gap-2">
            {Array.from({ length: count }).map((_, i) => {
              const seatId = `${row}${i + 1 + count}`;
              return (
                <div
                  key={seatId}
                  onClick={() => toggleSeat(seatId)}
                  className={`w-7 h-7 rounded border border-red-500 cursor-pointer transition
                    ${
                      selectedSeats.includes(seatId)
                        ? "bg-red-500"
                        : "hover:bg-red-700/40"
                    }`}
                ></div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-start pt-20 relative">

      {/* 🔔 Error Messages */}
      <div className="fixed top-5 left-1/2 -translate-x-1/2 space-y-2 z-50">
        {errors.map((err) => (
          <div
            key={err.id}
            className="bg-white text-red-600 px-6 py-3 rounded-lg shadow-lg border border-red-500"
          >
            {err.message}
          </div>
        ))}
      </div>

      {/* Red Glow Background */}
      <div className="absolute w-[600px] h-[600px] bg-red-700/20 blur-3xl rounded-full left-0 top-20"></div>
      <div className="absolute w-[600px] h-[600px] bg-red-700/20 blur-3xl rounded-full right-0 bottom-0"></div>

      <div className="flex gap-16 z-10">

        {/* LEFT PANEL */}
        <div className="bg-red-900/40 p-6 rounded-xl w-44 h-fit">
          <p className="mb-5 font-semibold">Available Timings</p>

          {timings.map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`w-full py-2 mb-3 rounded-lg transition
                ${
                  selectedTime === time
                    ? "bg-red-500"
                    : "border border-red-400 hover:bg-red-700/40"
                }`}
            >
              {time}
            </button>
          ))}
        </div>

        {/* SEAT SECTION */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-6">Select Your Seat</h2>

          {/* SCREEN */}
          <div className="w-[500px] h-8 border-t-4 border-red-500 rounded-t-full mb-12 text-center text-gray-400 text-sm">
            <span className="relative -top-3 bg-black px-3">
              SCREEN SIDE
            </span>
          </div>

          {/* Rows */}
          {renderRow("A", 9)}
          {renderRow("B", 9)}
          {renderRow("C", 8, true)}
          {renderRow("D", 8, true)}
          {renderRow("E", 9, true)}
          {renderRow("F", 9, true)}
          {renderRow("G", 9, true)}

          {/* Seat Numbers */}
          <div className="flex gap-6 mt-6 text-sm text-gray-500">
            {Array.from({ length: 18 }).map((_, i) => (
              <span key={i}>{i + 1}</span>
            ))}
          </div>

          {/* ✅ Proceed Button */}
          <button
            onClick={() => navigate("/mybookings")} // ✅ Fixed
            className="flex items-center gap-1 mt-20 px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer active:scale-95"
          >
            Proceed To Checkout
            <ArrowRightIcon strokeWidth={3} className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeatLayout;