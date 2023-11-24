import { Router } from 'express';
import {
  addOrders,
  calculatePrice,
  deleteASingleUser,
  allUsersController,
  ordersOfUsers,
  userIdController,
  updateAUsers,
  createUsersAll,
} from './user.controller';

const router = Router();

// POST endpoint for creating a new user
router.post('/', createUsersAll);

// GET endpoint for getting all users
router.get('/', allUsersController);

// GET endpoint for getting a user by id
router.get('/:userId', userIdController);

// Update endpoint for updating a user by id
router.put('/:userId', updateAUsers);

// Delete endpoint for deleting a user by id
router.delete('/:userId', deleteASingleUser);

// Add order endpoint for adding an order to a user
router.put('/:userId/orders', addOrders);

// Get orders endpoint for getting orders of a user
router.get('/:userId/orders', ordersOfUsers);

// Calculate total price endpoint for calculating total price of orders of a user
router.get('/:userId/orders/total-price', calculatePrice);

export const UserRoutes = router;
