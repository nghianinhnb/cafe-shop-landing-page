import React from "react";
import { Script } from "gatsby"

import PageLayout from "../components/PageLayout";

import Welcome from "../components/Welcome";
import Carousel from "../components/Carousel";
import GgMap from "../components/GgMap";
import OpeningTime from "../components/OpeningTime";
import OurStory from "../components/OurStory";

import '../assets/scss/custom.scss';
import './index.scss';


export default function Home() {
  return (
    <>
      <PageLayout>
        <Welcome/>
        <Carousel/>
        <GgMap/>
        <OpeningTime/>
        {/* <OurStory/> */}

      </PageLayout>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous" />
    </>
  );
}


export function Head() {
  return (
    <>
      <title>Caffe in Frankfurt</title>
    </>
  )
}
