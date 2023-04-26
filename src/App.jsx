/* react */
import { useEffect, useState } from "react";

/* react bootstrap */
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

/* axios */
import axios from "axios";

/* local */
import Loading from "./components/Loading";
import Categories from "./components/Categories";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    setIsLoading(true);
    async function getAllProducts() {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    }
    getAllProducts();
  }, []);

  const filterProducts = () => {
    if (category === "all") {
      return [...products];
    }
    return products.filter((product) => product.category === category);
  };

  if (isLoading) {
    return <Loading />;
  }

  const filteredProducts = filterProducts();

  return (
    filteredProducts && (
      <Container className="mt-3">
        <Categories setCategory={setCategory} />
        <Card>
          <Card.Body>
            <Table>
              <thead>
                <tr>
                  <th>Title:</th>
                  <th>Price:</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>${product.price.toFixed(2)}</td>
                    <td>{product.category}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    )
  );
}
export default App;
