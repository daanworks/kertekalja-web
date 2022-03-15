import React from "react";
import CTABottom from "./CTABottom";
import Image from "./Image";
import Quote from "./Quote";
import Gallery from "./Gallery";
import {quotes} from "../config/quotes";
import {galleries} from "../config/galleries";
import {images} from "../config/images";
import {video} from "../config/video";
import QandA from "./QandA";
import Video from "./Video";
import {BACKGROUND_IMAGE, IMAGES, LINK, PRIMARY_TEXT, SECONDARY_TEXT, TEXT, TITLE} from "../config/constants";
import Partners from "./Partners";

const Main = () => {

  const find = (array, id, type) => {
    if (!array || !id) return
    return array.find(element => element.id === id)[type]
  }

  return(
    <div>
      <Image bgImg={find(images, 1, BACKGROUND_IMAGE)} bgPstn={'center bottom'} />
      <Quote
        primaryText={find(quotes, 1, PRIMARY_TEXT)}
        secondaryText={find(quotes, 1, SECONDARY_TEXT)}
        bgImg={find(quotes, 1, BACKGROUND_IMAGE)}
      />
      <Video
        bgImg={find(video, 1, BACKGROUND_IMAGE)}
        link={find(video, 1, LINK)}
      />
      <Gallery
        images={find(galleries, 1, IMAGES)}
      />
      <Image
        bgImg={find(images, 2, BACKGROUND_IMAGE)}
        text={find(images, 2, TEXT)}
        title={find(images, 2, TITLE)}
        bgPstn={'center'}
      />
      <QandA />
      <Partners />
      <CTABottom />
      {/*<CalendarSection />*/}
    </div>
  )

}

export default Main