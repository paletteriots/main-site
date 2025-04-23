import branding from "@/public/branding.jpg";
import webDesign from "@/public/web_design.jpg";
import appDesign from "@/public/app_design.jpg";
import illustration from "@/public/illustration.png";
import bookCoverDesign from "@/public/book_cover_design.jpg";
import digitalArt from "@/public/digital_art.jpeg";
import author from '@/public/author.png';
import palleteRiots from '@/public/pallete_riots.jpeg';
import matriSuraksha from '@/public/matri_suraksha.jpeg';
import homeStay from '@/public/home_stay.jpeg'
import { StaticImageData } from "next/image";
const constants: ConstantType = {
  url:'https://paletteriots.github.io/main-site/',
  contactInfo: {
    whatsappNumber: "8240768751",
    email: "business@paletteriots.com",
  },
  portfolio: [
    {
      image: palleteRiots,
      title:'Palette Riots',
      subTitle:'Crafting a Bold & Timeless Design Identity',
      tags:[
        'Brand Identity',
        'Logo Design',
        'Business Card Design'
      ],
      targetUrl:'https://medium.com/@business_7608/palette-riots-the-birth-of-a-bold-identity-094fb7a7af47'
    },
    {
      image: author,
      title: "Portfolio website",
      subTitle: "Minimalist Approach to Showcasing Creativity",
      targetUrl:"https://medium.com/@business_7608/%EF%B8%8F-case-study-branding-ritwik-ghosh-an-authors-digital-identity-bca88bb0eb4c",
      tags: ["Website Development", "UX/UI Design", "Branding"],
    },
    {
      image: matriSuraksha,
      title:'Logo Design',
      subTitle:'Clean and aesthetic medical brand creation',
      targetUrl:"https://medium.com/@business_7608/case-study-logo-design-for-matri-suraksha-polyclinic-diagnostics-f5696d870665",
      tags:[
        'Branding',
        'Brand identity',
        'Logo design'
      ]
    },
    {
      image: homeStay,
      title:'Logo Design',
      subTitle:'Designing Tranquility : From Sketch to Serenity',
      targetUrl:"https://medium.com/@business_7608/designing-tranquility-a-modern-logo-for-heavens-valley-homestay-8159e7598bf2",
      tags:[
        'Branding',
        'Brand identity',
        'Logo design'
      ]
    }
  ],
  workCards: [
    {
      title: "Branding",
      image: branding,
    },
    {
      title: "Web Design",
      image: webDesign,
    },
    {
      title: "App Design",
      image: appDesign,
    },
    {
      title: "Illustration",
      image: illustration,
    },
    {
      title: "Book Cover design",
      image: bookCoverDesign,
    },
    {
      title: "Digital Art",
      image: digitalArt,
    },
  ],
};

export default constants;

export interface ConstantType {
  url: string;
  contactInfo: {
    whatsappNumber: string;
    email: string;
  }
  portfolio: PortFolio[];
  workCards:WorkCard [];
}
export interface PortFolio {
  image: StaticImageData;
  title: string;
  targetUrl?:string;
  subTitle: string;
  tags: string[];
}

export interface WorkCard {
  title: string;
  image: StaticImageData;
}