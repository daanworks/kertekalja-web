import React from "react";
import CTABottom from "./CTABottom";
import Image from "./Image";
import Quote from "./Quote";
import Gallery from "./Gallery";
import {quotes} from "../config/quotes";
import {galleries} from "../config/galleries";
import {images} from "../config/images";
import QandA from "./QandA";

const Main = () => {

  return(
    <div>
      <Image bgImg={images.find(image => image.id === 1).bgImg} bgPstn={'center bottom'} />
      <Quote
        primaryText={quotes.find(quote => quote.id === 1).primaryText}
        secondaryText={quotes.find(quote => quote.id === 1).secondaryText}
        bgImg={quotes.find(quote => quote.id === 1).bgImg}
      />
      <Gallery
        images={galleries.find(gallery => gallery.id === 1).images}
        bgImg={galleries.find(gallery => gallery.id === 1).background}
      />
      <Image bgImg={images.find(image => image.id === 2).bgImg} text={images.find(image => image.id === 2).text} bgPstn={'center'} />
      <QandA />
      <CTABottom />
      {/*<CalendarSection />*/}
    </div>
  )

}

export default Main