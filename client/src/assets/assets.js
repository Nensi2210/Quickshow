import logo from './logo.svg';
import marvelLogo from './marvelLogo.svg';
import googlePlay from './googlePlay.svg';
import appStore from './appStore.svg';
import screenImage from './screenImage.svg';
import profile from './profile.png';

export const assets = {
  logo,
  marvelLogo,
  googlePlay,
  appStore,
  screenImage,
  profile,
};

// =============================
// ✅ YouTube Trailers
// =============================

export const dummyTrailers = [
  {
    image: "https://img.youtube.com/vi/WpW36ldAqnM/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=WpW36ldAqnM",
  },
  {
    image: "https://img.youtube.com/vi/-sAOWhvheK8/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=-sAOWhvheK8",
  },
  {
    image: "https://img.youtube.com/vi/1pHDWnXmK7Y/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=1pHDWnXmK7Y",
  },
  {
    image: "https://img.youtube.com/vi/umiKiW4En9g/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=umiKiW4En9g",
  },
];

// =============================
// ✅ Dummy Casts
// =============================

export const dummyCastsData = [
  { name: "Milla Jovovich", profile_path: "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg" },
  { name: "Dave Bautista", profile_path: "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg" },
  { name: "Arly Jover", profile_path: "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg" },
  { name: "Amara Okereke", profile_path: "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg" },
  { name: "Fraser James", profile_path: "https://image.tmdb.org/t/p/original/mGAPQG2OKTgdKFkp9YpvCSqcbgY.jpg" },
  { name: "Deirdre Mullins", profile_path: "https://image.tmdb.org/t/p/original/lJm89neuiVlYISEqNpGZA5kTAnP.jpg" },
  { name: "Sebastian Stankiewicz", profile_path: "https://image.tmdb.org/t/p/original/hLN0Ca09KwQOFLZLPIEzgTIbqqg.jpg" },
  { name: "Tue Lunding", profile_path: "https://image.tmdb.org/t/p/original/qY4W0zfGBYzlCyCC0QDJS1Muoa0.jpg" },
];

// =============================
// ✅ Dummy Movies Data
// =============================

export const dummyShowsData = [
  {
    _id: "324544",
    id: 324544,
    title: "In the Lost Lands",
    overview: "A queen sends a sorceress to find magical power.",
    poster_path: "https://image.tmdb.org/t/p/original/dDlfjR7gllmr8HTeN6rfrYhTdwX.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/op3qmNhvwEvyT7UFyPbIfQmKriB.jpg",
    genres: [{ id: 28, name: "Action" }],
    casts: dummyCastsData,
    release_date: "2025-02-27",
    original_language: "en",
    tagline: "She seeks the power.",
    vote_average: 6.4,
    vote_count: 15000,
    runtime: 102,
  },
  {
    _id: "1232546",
    id: 1232546,
    title: "Until Dawn",
    overview: "Friends trapped in a terrifying time loop.",
    poster_path: "https://image.tmdb.org/t/p/original/juA4IWO52Fecx8lhAsxmDgy3M3.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/icFWIk1KfkWLZnugZAJEDauNZ94.jpg",
    genres: [{ id: 27, name: "Horror" }],
    casts: dummyCastsData,
    release_date: "2025-04-23",
    original_language: "en",
    tagline: "A different nightmare.",
    vote_average: 6.4,
    vote_count: 18000,
    runtime: 103,
  },
  {
    _id: "552524",
    id: 552524,
    title: "Lilo & Stitch",
    overview: "A girl befriends a mischievous alien.",
    poster_path: "https://image.tmdb.org/t/p/original/mKKqV23MQ0uakJS8OCE2TfV5jNS.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg",
    genres: [{ id: 10751, name: "Family" }],
    casts: dummyCastsData,
    release_date: "2025-05-17",
    original_language: "en",
    tagline: "Hold on tight.",
    vote_average: 7.1,
    vote_count: 27500,
    runtime: 108,
  },
  {
    _id: "299534",
    id: 299534,
    title: "Avengers: Endgame",
    overview: "The Avengers assemble to undo destruction.",
    poster_path: "https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    genres: [{ id: 28, name: "Action" }],
    casts: dummyCastsData,
    release_date: "2019-04-26",
    original_language: "en",
    tagline: "The journey ends.",
    vote_average: 8.4,
    vote_count: 25000,
    runtime: 181,
  },
  {
    _id: "157336",
    id: 157336,
    title: "Interstellar",
    overview: "Explorers travel through space to save humanity.",
    poster_path: "https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
    genres: [{ id: 878, name: "Sci-Fi" }],
    casts: dummyCastsData,
    release_date: "2014-11-07",
    original_language: "en",
    tagline: "Beyond Earth.",
    vote_average: 8.6,
    vote_count: 21000,
    runtime: 169,
  },
];

// =============================
// ✅ Dummy Date & Time Data
// =============================

export const dummyDateTimeData = [
  {
    date: "2026-02-20",
    day: "Fri",
    times: ["10:00 AM", "1:30 PM", "4:00 PM", "7:30 PM"]
  },
  {
    date: "2026-02-21",
    day: "Sat",
    times: ["11:00 AM", "2:00 PM", "5:00 PM", "8:30 PM"]
  },
  {
    date: "2026-02-22",
    day: "Sun",
    times: ["9:30 AM", "12:30 PM", "3:30 PM", "6:30 PM"]
  }
];
// =============================
// ✅ Dummy Booking Data
// =============================

export const dummyBookingData = [
  {
    _id: "b1",
    user: {
      name: "Rahul Patel",
    },
    show: {
      movie: {
        title: "Interstellar",
      },
      showDateTime: "2026-02-20T10:00:00",
    },
    bookedSeats: {
      seat1: "A1",
      seat2: "A2",
      seat3: "A3",
    },
    amount: 750,
  },
  {
    _id: "b2",
    user: {
      name: "Priya Shah",
    },
    show: {
      movie: {
        title: "Avengers: Endgame",
      },
      showDateTime: "2026-02-21T14:00:00",
    },
    bookedSeats: {
      seat1: "B4",
      seat2: "B5",
    },
    amount: 500,
  },
];