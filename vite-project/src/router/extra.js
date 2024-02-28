let Cart = [];
//clicker logic
const clicked = ref(0);
function increment() {
  clicked.value++;
  Cart.push(MenuItem.FoodName)
  console.log(Cart);
}