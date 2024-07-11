const Items = () => {
  const products = [
    {
      title: "Apple",
      isFruit: true,
      id: 1,
    },
    {
      title: "chili",
      isFruit: false,
      id: 2,
    },
    { title: "egg", isFruit: false, id: 3 },
  ];

  return (
    <div>
      <div>
        {products.map((product) => (
          <ul
            key={product.id}
            style={{ color: product.isFruit ? "magenta" : "darkgreen" }}
          >
            <li>{product.title}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Items;
