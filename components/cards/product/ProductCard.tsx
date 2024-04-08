import Martens from '@/public/assets/martens-img.jpeg';
import Image from 'next/image';
import './ProductCard.css';

export interface IProductCard {
  tag: string;
  title: string;
  body: string;
  author: string;
  time: string;
}

const ProductCard: React.FC<IProductCard> = ({
  tag,
  title,
  body,
  author,
  time,
}) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card__header">
          <Image
            src={Martens}
            alt="card__image"
            className="card__image"
            width="600"
            height="400"
          />
        </div>
        <div className="card__body">
          <span className={`${tag} ${'tag-blue'}`}>{tag}</span>
          <h4>{title}</h4>
          <p>{body}</p>
        </div>
        <div className="card__footer">
          <div className="user">
            <Image
              src="https://i.pravatar.cc/40?img=3"
              alt="user__image"
              className="user__image"
              width="40"
              height="40"
            />
            <div className="user__info">
              <h5>{author}</h5>
              <small>{time}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
