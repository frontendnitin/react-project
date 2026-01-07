import "./homeBanner.css";
import homeBannerimg1 from "../../../assets/homeBannerimg1.jpg";
import homeBannerItemProduct from "../../../homeProduct.json";

const HomeBanner = () => {
  return (
    <div className="homeBanner">
      <img className="homeBannerimg1" src={homeBannerimg1} alt="banner" />

      <div className="homeBanneritemDiv">
        {homeBannerItemProduct.map((item, index) => {
          return (
            <div className="homeBanneritemDivCard" key={index}>
              <div className="homeBanneritemDivCardTitle">{item.itemTitle}</div>

              {item.imgs[0].type === "big" ? (
                <div className="bigImgContainer">
                  <img
                    className="bigimg"
                    src={item.imgs[0].url}
                    alt={item.itemTitle}
                  />
                  <div className="bigImgName">{item.imgs[0].name}</div>
                </div>
              ) : (
                <div className="imghomeBanneritemDivCard">
                  {item.imgs.map((img, imgIndex) => {
                    return (
                      <div className="imgBannerhomeDiv" key={imgIndex}>
                        <img
                          className="imgBannerDivimg"
                          src={img.url}
                          alt={img.name}
                        />
                        <div className="imgBannerimgName">{img.name}</div>
                      </div>
                    );
                  })}
                </div>
              )}

              <div className="homeBanneritemDivCardText">See all deals</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeBanner;
