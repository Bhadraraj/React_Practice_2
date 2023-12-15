import React from "react";
import '../style/hotCard.css';
function HotDealCard() {

    const cardData = [
        {
            id: 1,
            prodName: "Electronic Items",
            off: "40-60%",
            img: "https://instorestatic.tcl.com/media/catalog/product/cache/18cc94b972099367f0cf9bad2913b738/s/5/s53_front-1_3.png"

        },
        {
            id: 2,
            prodName: "Electronic Items",
            off: "40-60%",
            img: "https://instorestatic.tcl.com/media/catalog/product/cache/18cc94b972099367f0cf9bad2913b738/s/5/s53_front-1_3.png"


        },
        {
            id: 3,
            prodName: "Electronic Items",
            off: "40-60%",
            img: "https://instorestatic.tcl.com/media/catalog/product/cache/18cc94b972099367f0cf9bad2913b738/s/5/s53_front-1_3.png"


        },
        {
            id: 4,
            prodName: "Electronic Items",
            off: "40-60%",
            img: "https://instorestatic.tcl.com/media/catalog/product/cache/18cc94b972099367f0cf9bad2913b738/s/5/s53_front-1_3.png"


        },
        {
            id: 5,
            prodName: "Electronic Items",
            off: "40-60%",
            img: "https://instorestatic.tcl.com/media/catalog/product/cache/18cc94b972099367f0cf9bad2913b738/s/5/s53_front-1_3.png"


        },
        {
            id: 6,
            prodName: "Electronic Items",
            off: "40-60%",
            img: "https://instorestatic.tcl.com/media/catalog/product/cache/18cc94b972099367f0cf9bad2913b738/s/5/s53_front-1_3.png"


        },
        {
            id: 7,
            prodName: "Electronic Items",
            off: "40-60%",
            img: "https://instorestatic.tcl.com/media/catalog/product/cache/18cc94b972099367f0cf9bad2913b738/s/5/s53_front-1_3.png"


        },
        {
            id: 8,
            prodName: "Electronic Items",
            off: "40-60%",
            img: "https://instorestatic.tcl.com/media/catalog/product/cache/18cc94b972099367f0cf9bad2913b738/s/5/s53_front-1_3.png"


        },
        {
            id: 9,
            prodName: "Electronic Items",
            off: "40-60%",
            img: "https://instorestatic.tcl.com/media/catalog/product/cache/18cc94b972099367f0cf9bad2913b738/s/5/s53_front-1_3.png"


        },
        {
            id: 10,
            prodName: "Electronic Items",
            off: "40-60%",
            img: "https://instorestatic.tcl.com/media/catalog/product/cache/18cc94b972099367f0cf9bad2913b738/s/5/s53_front-1_3.png"


        },
        {
            id: 11,
            prodName: "Electronic Items",
            off: "40-60%",
            img: "https://instorestatic.tcl.com/media/catalog/product/cache/18cc94b972099367f0cf9bad2913b738/s/5/s53_front-1_3.png"


        },
        {
            id: 12,
            prodName: "Electronic Items",
            off: "40-60%",
            img: "https://instorestatic.tcl.com/media/catalog/product/cache/18cc94b972099367f0cf9bad2913b738/s/5/s53_front-1_3.png"


        },
        {
            id: 13,
            prodName: "Electronic Items",
            off: "40-60%",
            img: "https://instorestatic.tcl.com/media/catalog/product/cache/18cc94b972099367f0cf9bad2913b738/s/5/s53_front-1_3.png"


        },
        
    ]
    
    return (
        <div className="fullData">
            {cardData.map(a => (

                    <div className="hotCard">
                        <div className="img">
                            <img src={a.img} alt="tv" style={{ height: "100px", width: "110px" }} />
                        </div>
                        <div className="bottonCard">
                            <p>
                                {a.prodName}

                            </p>
                            <div className="innertx">{a.off} off</div>
                        </div>
                    </div>
            ))}

        </div>
    )
}
export default HotDealCard;