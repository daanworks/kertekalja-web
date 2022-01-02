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

  const find = (array, id, type) => {
    if (!array || !id) return
    return array.find(element => element.id === id)[type]
  }

  return(
    <div>
      <Image bgImg={find(images, 1, 'bgImg')} bgPstn={'center bottom'} />
      <Quote
        primaryText={find(quotes, 1, 'primaryText')}
        secondaryText={find(quotes, 1, 'secondaryText')}
        bgImg={find(quotes, 1, 'bgImg')}
      />
      <Gallery
        images={find(galleries, 1, 'images')}
        bgImg={find(galleries, 1, 'background')}
      />
      <Image
        bgImg={find(images, 2, 'bgImg')}
        text={find(images, 2, 'text')}
        title={find(images, 2, 'title')}
        bgPstn={'center'}
      />
      <QandA />
      <CTABottom />
      {/*<CalendarSection />*/}
    </div>
  )

}

export default Main