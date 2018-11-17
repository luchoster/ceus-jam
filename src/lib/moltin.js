import { gateway as MoltinGateway } from '@moltin/sdk'

let client_id = '0XaNskQMa6RXXATLSNeOZXzC1aQOmV03y4DIGH1QlU'

if (process.env.REACT_APP_MOLTIN_CLIENT_ID) {
  client_id = process.env.REACT_APP_MOLTIN_CLIENT_ID
}

const Moltin = MoltinGateway({
  client_id,
  application: 'react-demo-store',
})

export const Products = Moltin.Products.All().then(products => {
  return products
})

export const GetProducts = () =>
  Moltin.Products.With('files, main_images, collections').All()

export const GetProduct = ID => Moltin.Products.Get(ID)

export const GetCategories = () => Moltin.Categories.With('products').All()

export const GetCategory = ID => Moltin.Categories.Get(ID)

export const GetCollections = () => Moltin.Collections.With('products').All()

export const GetBrands = () => Moltin.Brands.All()

export const GetFile = ID => Moltin.Files.Get(ID)

export const AddCart = (id, quantity) => Moltin.Cart().AddProduct(id, quantity)

export const UpdateCartPlus = (ID, quantity) =>
  Moltin.Cart().UpdateItemQuantity(ID, quantity + 1)

export const UpdateCartMinus = (ID, quantity) =>
  Moltin.Cart().UpdateItemQuantity(ID, quantity - 1)

export const UpdateCart = (ID, quantity) =>
  Moltin.Cart().UpdateItemQuantity(ID, quantity)

export const GetCartItems = () => Moltin.Cart().Items()

export const Checkout = (customer, address) =>
  Moltin.Cart().Checkout(customer, address)

export const GetOrder = ID => Moltin.Orders.Get(ID)

export const OrderPay = (ID, data) => Moltin.Orders.Payment(ID, data)

export const DeleteCart = () => Moltin.Cart().Delete()

export const RemoveItem = (itemId, qty) => Moltin.Cart().RemoveItem(itemId, qty)

export const Payment = (orderId, customer) =>
  Moltin.Orders.Payment(orderId, {
    gateway: 'braintree',
    method: 'purchase',
    first_name: customer.name,
    last_name: customer.last_name,
    number: customer.cardNumber,
    month: '10',
    year: '2021',
    verification_value: customer.cvc,
  })