import styles from "./CarouselItem.module.css";
import { motion } from "framer-motion";

const CaroueselProductItem = ({
  name,
  mainImage,
  price,
  hasPromoPrice,
  promoPrice,
  category,
}) => {
  const discountInPercentage = Math.ceil(((price - promoPrice) / price) * 100);
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        y: -10,
        transition: { duration: 0.6 },
      }}
      className={styles["carousel-product-item"]}
    >
      {hasPromoPrice && (
        <span className={styles["discount"]}>
          {`-${discountInPercentage}%`}
        </span>
      )}
      <img src={mainImage} alt={name} />
      <h2>{name}</h2>
      <span>{category.name}</span>
      <div className={styles["prices"]}>
        <p
          style={
            hasPromoPrice
              ? { textDecoration: "line-through", fontSize: "13px" }
              : { textDecoration: "none" }
          }
        >
          ${price.toFixed(2)}
        </p>
        {hasPromoPrice && (
          <p className={styles["promo-price"]}>${promoPrice.toFixed(2)}</p>
        )}
      </div>
      <button>
        Buy <i className="fa-solid fa-cart-shopping"></i>
      </button>
    </motion.div>
  );
};

export default CaroueselProductItem;