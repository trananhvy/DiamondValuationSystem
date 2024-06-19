

// Define the constant list of diamonds with images

const DIAMOND_LIST = [
  {
    id: 1,
    name: "Round Cut",
    carat: 1.0,
    img: "/src/Views/HomePage/assets/1",
  },
  {
    id: 2,
    name: "Oval Cut",
    carat: 1.2,
    img: "/src/Views/HomePage/assets/2.avif",
  },
  {
    id: 3,
    name: "Pear Cut",
    carat: 1.5,
    img: "/src/Views/HomePage/assets/3.avif",
  },
  {
    id: 4,
    name: "Emerald Cut",
    carat: 1.1,
    img: "/src/Views/HomePage/assets/4.webp",
  },
  {
    id: 5,
    name: "Cushion Cut",
    carat: 1.3,
    img: "/src/Views/HomePage/assets/5.avif",
  },
  {
    id: 6,
    name: "Marquise Cut",
    carat: 1.3,
    img: "/src/Views/HomePage/assets/6.avif",
  },
  {
    id: 7,
    name: "Assher Cut",
    carat: 1.3,
    img: "/src/Views/HomePage/assets/6.avif",
  },
  {
    id: 8,
    name: "Heart Cut",
    carat: 1.3,
    img: "/src/Views/HomePage/assets/6.avif",
  },
  {
    id: 9,
    name: "Princess Cut",
    carat: 1.3,
    img: "/src/Views/HomePage/assets/6.avif",
  },
];

// Styles as JavaScript objects
const styles = {
  diamondComponent: {},
  diamondMenu: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  diamondMenuH1: {
    color: "#49557e",
    fontSize: "36px",
    fontWeight: "700",
    marginLeft: "40px",
  },
  diamondMenuText: {
    maxWidth: "60%",
    color: "#808080",
    marginLeft: "40px",
  },
  diamondMenuContainer: {
    overflow: "hidden",
    margin: "0 40px",
    position: "relative",
  },
  diamondMenuList: {
    display: "flex",
    gap: "30px",
    textAlign: "center",
    margin: "20px 0",
    overflowX: "scroll",
    scrollBehavior: "smooth",
  },
  diamondItem: {
    display: "inline-block",
    flexDirection: "column",
    alignItems: "center",
    minWidth: "200px",
  },
  diamondImage: {
    width: "7.5vw",
    minWidth: "80px",
    cursor: "pointer",
    borderRadius: "50%",
    transition: "0.2s",
  },
  hr: {
    margin: "10px 0px",
    height: "2px",
    backgroundColor: "#49557e",
    border: "none",
  },
  active: {
    border: "2px solid #49557e",
    padding: "2px",
  },
};

function DiamondComponent({ category, setCategory }) {
  return (
    <div>
      <div style={styles.diamondMenu}>
        <h1 style={styles.diamondMenuH1}>Diamond List</h1>
        <p style={styles.diamondMenuText}>
          A diamond is a gemstone that is prized for its brilliance and beauty.
          It is a transparent crystal made of carbon atoms arranged in a
          specific lattice structure. The most common shape for a cut diamond is
          the round brilliant, which features a circular outline and a large
          number of facets that maximize its sparkle and light reflection.
        </p>
        <div style={styles.diamondMenuContainer}>
          <div style={styles.diamondMenuList}>
            {DIAMOND_LIST.map((item) => (
              <div key={item.id} style={styles.diamondItem}>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    ...styles.diamondImage,
                    ...(category === item.name ? styles.active : {}),
                  }}
                  onClick={() =>
                    setCategory((prev) =>
                      prev === item.name ? "All" : item.name
                    )
                  }
                />
                <h2>{item.name}</h2>
                <p>Carat: {item.carat}</p>
              </div>
            ))}
          </div>
          <hr style={styles.hr} />
        </div>
      </div>
    </div>
  );
}

export default DiamondComponent;
