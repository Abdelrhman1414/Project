const Item = ({item}) => {
  return(
    <>
     <div key={item.id} className="product-card">
            <img  src={item.image} alt={item.name} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p className="Price">{"Price : "}{item.price} {"$"}</p>
            <button>Add to Cart</button>
          </div>
    </>
  )

}

export default Item