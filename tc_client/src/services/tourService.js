import { tours } from '../data/tours';
import { generateUniqueId } from '../utils/idCreator';

export function getAllTours() {
  try {
    return [...tours];
  } catch (error) {
    console.error('Error fetching all tours:', error);
    throw error;
  }
}

export function getTourById(id) {
  try {
    return tours.find((tour) => tour.id === id);
  } catch (error) {
    console.error('Error fetching tour by ID:', error);
    throw error;
  }
}

export function getTourByName(name) {
  try {
    return tours.find((tour) => tour.name === name);
  } catch (error) {
    console.error('Error fetching tour by name:', error);
    throw error;
  }
}

export function addTour(tour) {
  try {
    const newTour = { ...tour, id: generateUniqueId(tours) };
    tours.push(newTour);
    return newTour;
  } catch (error) {
    console.error('Error adding tour:', error);
    throw error;
  }
}
