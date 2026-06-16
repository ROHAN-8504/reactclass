import {useState,useEffect} from "react"
import Card from "./Card";
function Products({searchquery}) {
    const [products, setproducts] = useState([])
   //fetch the product dat from the fakestore Api
    useEffect(() => {
      
      fetch('https://backend-pvp-ecommerce.onrender.com/products')
    .then(response => response.json())
    .then(data => setproducts(data));
    
     
    }, [])
    


 let filteredproducts= products.filter((p)=>{
return p.title.toLowerCase().includes(searchquery.toLowerCase())
  })

  return (
    <>
    <div style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "25px",
    padding: "20px",
    backgroundColor: "#f5f5f5",
  }}   >

    {
        filteredproducts.map((p)=>{
       return <Card image={p.image} title={p.title}  price={p.price}  />
        })
    }

    </div>
    </>
  )
}

export default Products