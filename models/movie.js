const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    plot: {
      type: String,
      required: true,
    },
    fullplot: String,
    genres: [
      {
        type: String,
      },
    ],
    runtime: {
      type: Number,
    },
    cast: [
      {
        type: String,
      },
    ],
    poster: {
      type: String,
    },
    languages: [
      {
        type: String,
      },
    ],
    released: {
      type: Date,
    },
    directors: [
      {
        type: String,
      },
    ],
    rated: String,
    awards: {
      wins: Number,
      nominations: Number,
      text: String,
    },
    year: {
      type: Number,
    },
    imdb: {
      rating: Number,
      votes: Number,
      id: Number,
    },
    countries: [
      {
        type: String,
      },
    ],
    type: {
      type: String,
      default: 'movie',
    },
    tomatoes: {
      viewer: {
        rating: Number,
        numReviews: Number,
        meter: Number,
      },
      fresh: Number,
      critic: {
        rating: Number,
        numReviews: Number,
        meter: Number,
      },
      rotten: Number,
      lastUpdated: Date,
    },
    num_mflix_comments: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true, // This will add createdAt and updatedAt fields automatically
  }
);

// Add indexes for commonly queried fields
movieSchema.index({ title: 1 });
movieSchema.index({ year: 1 });
movieSchema.index({ 'imdb.rating': 1 });

module.exports = mongoose.model('Movie', movieSchema);
