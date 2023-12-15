import React from 'react';
import '../style/productCard.css';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// 
const ProductCard = () => {

    const productDetails = [{
        prodName: "Dress",
        brand: "Alen soley",
        offPrice: 450,
        actPrice: 500,

        offer: "10% off",
        rating: 4.5,
        reviews: "5000",
        image: "https://t3.ftcdn.net/jpg/00/96/74/82/360_F_96748234_L1OpQlE8LQJmmjGpeQZvcOVOkhxCPzCa.jpg"
    },
    {
        prodName: "Dress",
        brand: "Alen soley",
        offPrice: 450,
        actPrice: 500,

        offer: "10% off",
        rating: 4.5,
        reviews: "5000",
        image: "https://t3.ftcdn.net/jpg/00/96/74/82/360_F_96748234_L1OpQlE8LQJmmjGpeQZvcOVOkhxCPzCa.jpg"
    },
    {
        prodName: "Dress",
        brand: "Alen soley",
        offPrice: 450,
        actPrice: 500,

        offer: "10% off",
        rating: 4.5,
        reviews: "5000",
        image: "https://t3.ftcdn.net/jpg/00/96/74/82/360_F_96748234_L1OpQlE8LQJmmjGpeQZvcOVOkhxCPzCa.jpg"
    }, {
        prodName: "Dress",
        brand: "Alen soley",
        offPrice: 450,
        actPrice: 500,

        offer: "10% off",
        rating: 4.5,
        reviews: "5000",
        image: "https://t3.ftcdn.net/jpg/00/96/74/82/360_F_96748234_L1OpQlE8LQJmmjGpeQZvcOVOkhxCPzCa.jpg"
    },
    {
        prodName: "Dress",
        brand: "Alen soley",
        offPrice: 450,
        actPrice: 500,

        offer: "10% off",
        rating: 4.5,
        reviews: "5000",
        image: "https://t3.ftcdn.net/jpg/00/96/74/82/360_F_96748234_L1OpQlE8LQJmmjGpeQZvcOVOkhxCPzCa.jpg"
    },
    {
        prodName: "Dress",
        brand: "Alen soley",
        offPrice: 450,
        actPrice: 500,

        offer: "10% off",
        rating: 4.5,
        reviews: "5000",
        image: "https://t3.ftcdn.net/jpg/00/96/74/82/360_F_96748234_L1OpQlE8LQJmmjGpeQZvcOVOkhxCPzCa.jpg"
    },
    {
        prodName: "Dress",
        brand: "Alen soley",
        offPrice: 450,
        actPrice: 500,

        offer: "10% off",
        rating: 4.5,
        reviews: "5000",
        image: "https://t3.ftcdn.net/jpg/00/96/74/82/360_F_96748234_L1OpQlE8LQJmmjGpeQZvcOVOkhxCPzCa.jpg"
    },
    {
        prodName: "Dress",
        brand: "Alen soley",
        offPrice: 450,
        actPrice: 500,

        offer: "10% off",
        rating: 4.5,
        reviews: "5000",
        image: "https://t3.ftcdn.net/jpg/00/96/74/82/360_F_96748234_L1OpQlE8LQJmmjGpeQZvcOVOkhxCPzCa.jpg"
    },
    {
        prodName: "Dress",
        brand: "Alen soley",
        offPrice: 450,
        actPrice: 500,

        offer: "10% off",
        rating: 4.5,
        reviews: "5000",
        image: "https://t3.ftcdn.net/jpg/00/96/74/82/360_F_96748234_L1OpQlE8LQJmmjGpeQZvcOVOkhxCPzCa.jpg"
    },
    {
        prodName: "Dress",
        brand: "Alen soley",
        offPrice: 450,
        actPrice: 500,

        offer: "10% off",
        rating: 4.5,
        reviews: "5000",
        image: "https://t3.ftcdn.net/jpg/00/96/74/82/360_F_96748234_L1OpQlE8LQJmmjGpeQZvcOVOkhxCPzCa.jpg"
    },
    {
        prodName: "Dress",
        brand: "Alen soley",
        offPrice: 450,
        actPrice: 500,

        offer: "10% off",
        rating: 4.5,
        reviews: "5000",
        image: "https://t3.ftcdn.net/jpg/00/96/74/82/360_F_96748234_L1OpQlE8LQJmmjGpeQZvcOVOkhxCPzCa.jpg"
    },
    {
        prodName: "Dress",
        brand: "Alen soley",
        offPrice: 450,
        actPrice: 500,

        offer: "10% off",
        rating: 4.5,
        reviews: "5000",
        image: "https://t3.ftcdn.net/jpg/00/96/74/82/360_F_96748234_L1OpQlE8LQJmmjGpeQZvcOVOkhxCPzCa.jpg"
    },
    {
        prodName: "Dress",
        brand: "Alen soley",
        offPrice: 450,
        actPrice: 500,

        offer: "10% off",
        rating: 4.5,
        reviews: "5000",
        image: "https://t3.ftcdn.net/jpg/00/96/74/82/360_F_96748234_L1OpQlE8LQJmmjGpeQZvcOVOkhxCPzCa.jpg"
    },
    {
        prodName: "Dress",
        brand: "Alen soley",
        offPrice: 450,
        actPrice: 500,

        offer: "10% off",
        rating: 4.5,
        reviews: "5000",
        image: "https://t3.ftcdn.net/jpg/00/96/74/82/360_F_96748234_L1OpQlE8LQJmmjGpeQZvcOVOkhxCPzCa.jpg"
    },
    {
        prodName: "Dress",
        brand: "Alen soley",
        offPrice: 450,
        actPrice: 500,
        offer: "10% off",
        rating: 4.5,
        reviews: "5000",
        image: "https://t3.ftcdn.net/jpg/00/96/74/82/360_F_96748234_L1OpQlE8LQJmmjGpeQZvcOVOkhxCPzCa.jpg"
    }]
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: true, // Make sure this is set to true
    };

    return (
        <>

            <h4> Product Listing </h4>
            {/* <Slider {...settings}> */}

            <div className='mainCard' >
                {productDetails.map(a => {
                    return (
                        <div className='card '>
                            <div className="img">
                                <img src={a.image} alt="" />
                            </div>
                            <div className='cardDetail'>
                                <p className='mb-0 prodName'>{a.prodName}</p>
                                <p className='mb-0'> <span className='brand'>Brand : </span> <span className='brandName'>{a.brand}</span></p>
                                <div className="lrPrice">
                                    <div className="detailLeft">          <p className='mb-0'>${a.offPrice}</p>
                                        <p className='mb-0'><strike>${a.actPrice}</strike></p>
                                    </div>

                                    <div className="detailRight">
                                        <div className="off mb-0">{a.offer}</div>
                                    </div>
                                </div>
                                <p className='ratings'>⭐⭐⭐⭐⭐{a.rating} ({a.reviews})</p> <i class="fa-solid fa-house"></i>
                            </div>
                        </div>)
                })}


            </div>
            {/* </Slider> */}
        </>
    )
}

export default ProductCard;