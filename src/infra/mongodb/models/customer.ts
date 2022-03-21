import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: String,
    required: true,
  },
  gender: {
    type: Number,
    required: true,
  },
  tokens: {
    type: Array,
    ref: 'CustomerTokensRepository',
  },
});

const CustomerCollection = 'customers';
const Customer = mongoose.model(CustomerCollection, Schema);
export default Customer;
