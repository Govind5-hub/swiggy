import React from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const resdata = [
    {
      info: {
        id: "76502",
        name: "Pizza Hut",
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        locality: "Ashok Nagar",
        areaName: "Lake City Mall",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.2,
        parentId: "721",
        avgRatingString: "4.2",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 24,
          lastMileTravel: 0.6,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "0.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-23 02:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/pizza-hut-ashok-nagar-lake-city-mall-udaipur-76502",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "623679",
        name: "Wow! Momo",
        cloudinaryImageId: "64fd45fd9f44c1737bc446e470bed666",
        locality: "Celebration Mall",
        areaName: "Bhuwana",
        costForTwo: "₹300 for two",
        cuisines: [
          "Tibetan",
          "Healthy Food",
          "Asian",
          "Chinese",
          "Snacks",
          "Continental",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.1,
        parentId: "1776",
        avgRatingString: "4.1",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 3.8,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "3.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-22 22:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹99",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/wow-momo-celebration-mall-bhuwana-udaipur-623679",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "86866",
        name: "Dil Punjabi Dhaba",
        cloudinaryImageId: "ld8eo0baqp26xcprjxbd",
        locality: "Mali Colony",
        areaName: "City Centre",
        costForTwo: "₹200 for two",
        cuisines: ["North Indian", "Tandoor", "Thalis", "Punjabi"],
        avgRating: 4.2,
        veg: true,
        parentId: "72660",
        avgRatingString: "4.2",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 24,
          lastMileTravel: 1.9,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "1.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-22 23:10:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        select: true,
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/dil-punjabi-dhaba-mali-colony-city-centre-udaipur-86866",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "343749",
        name: "Daya Nashta & Fast Food",
        cloudinaryImageId: "pfdzunijeynghgrtfrd7",
        locality: "University Main Road",
        areaName: "Subhash Nagar",
        costForTwo: "₹100 for two",
        cuisines: ["Fast Food", "Snacks", "Burgers", "Chinese"],
        avgRating: 4.4,
        veg: true,
        parentId: "453265",
        avgRatingString: "4.4",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 17,
          lastMileTravel: 0.4,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "0.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-22 19:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/daya-nashta-and-fast-food-university-main-road-subhash-nagar-udaipur-343749",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "102166",
        name: "The MINI PUNJAB",
        cloudinaryImageId: "z4z877owswppnzmbtglp",
        areaName: "Shakti Nagar",
        costForTwo: "₹200 for two",
        cuisines: ["Chinese", "Biryani"],
        avgRating: 4,
        parentId: "211467",
        avgRatingString: "4.0",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 1.5,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "1.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-22 22:45:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/the-mini-punjab-shakti-nagar-udaipur-102166",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "97564",
        name: "TMT - The Meal Time",
        cloudinaryImageId: "wcfvn9y1hjkizmuwlnfh",
        locality: "Alka Hotel Road",
        areaName: "Shastri Circle",
        costForTwo: "₹200 for two",
        cuisines: ["North Indian", "Chinese", "Thalis"],
        avgRating: 4.4,
        veg: true,
        parentId: "387865",
        avgRatingString: "4.4",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 20,
          lastMileTravel: 1.6,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "1.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-22 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "45% OFF",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/tmt-the-meal-time-alka-hotel-road-shastri-circle-udaipur-97564",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "75157",
        name: "Punjabi Laziz",
        cloudinaryImageId: "grexkx7sglrjaniczm1o",
        locality: "Alka Hotel Road",
        areaName: "Shastri Circle",
        costForTwo: "₹200 for two",
        cuisines: [
          "North Indian",
          "Punjabi",
          "Pizzas",
          "Biryani",
          "Thalis",
          "Snacks",
        ],
        avgRating: 4.3,
        veg: true,
        parentId: "162365",
        avgRatingString: "4.3",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 20,
          lastMileTravel: 1.6,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "1.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-22 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/punjabi-laziz-alka-hotel-road-shastri-circle-udaipur-75157",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "311035",
        name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
        cloudinaryImageId: "ln8h1bkhilabwmsdjjsm",
        locality: "Mali Colony",
        areaName: "Hiran Magri",
        costForTwo: "₹200 for two",
        cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
        avgRating: 4.6,
        veg: true,
        parentId: "582",
        avgRatingString: "4.6",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 16,
          lastMileTravel: 1.9,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "1.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-22 23:15:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-mali-colony-hiran-magri-udaipur-311035",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "435122",
        name: "South Indian Dhaba",
        cloudinaryImageId: "ivantwqzrzdsrbzpexmi",
        locality: "Mali Colony",
        areaName: "Gayariawas",
        costForTwo: "₹200 for two",
        cuisines: [
          "South Indian",
          "Chinese",
          "Fast Food",
          "Snacks",
          "Pastas",
          "Pizzas",
        ],
        avgRating: 4.3,
        veg: true,
        parentId: "191378",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 1.9,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "1.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-22 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/south-indian-dhaba-mali-colony-gayariawas-udaipur-435122",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "435335",
        name: "Dil Punjabi 3",
        cloudinaryImageId: "d1ac2c92210a6094c11dc7d5eda4d5ad",
        locality: "Mali Colony",
        areaName: "City Centre",
        costForTwo: "₹200 for two",
        cuisines: [
          "Punjabi",
          "Biryani",
          "Snacks",
          "Thalis",
          "Chinese",
          "Ice Cream",
        ],
        avgRating: 4.2,
        veg: true,
        parentId: "473123",
        avgRatingString: "4.2",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 1.9,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "1.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-22 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/dil-punjabi-3-mali-colony-city-centre-udaipur-435335",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "90651",
        name: "Panchmukhi Restaurant",
        cloudinaryImageId: "xslouq3pjs3hcmeqt16b",
        locality: "Hiran Magri",
        areaName: "Hiran Magri",
        costForTwo: "₹200 for two",
        cuisines: [
          "Thalis",
          "North Indian",
          "Indian",
          "Rajasthani",
          "Tandoor",
          "Biryani",
          "Chinese",
        ],
        avgRating: 4.3,
        parentId: "154276",
        avgRatingString: "4.3",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 22,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-22 23:59:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        select: true,
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/panchmukhi-restaurant-hiran-magri-udaipur-90651",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "243490",
        name: "Hungry Hope",
        cloudinaryImageId: "nfrfd4vudi2fmtqyzhry",
        locality: "Mahaveer Colony Park",
        areaName: "Bhuwana",
        costForTwo: "₹250 for two",
        cuisines: ["Punjabi", "Mughlai", "Continental", "Pizzas"],
        avgRating: 4.4,
        parentId: "104720",
        avgRatingString: "4.4",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 33,
          lastMileTravel: 4,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "4.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-22 23:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/hungry-hope-mahaveer-colony-park-bhuwana-udaipur-243490",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "628871",
        name: "Starbucks Coffee",
        cloudinaryImageId: "2418209798927d733a50f5d2ebcc2aee",
        locality: "Saheli Marg",
        areaName: "Panchwati",
        costForTwo: "₹400 for two",
        cuisines: [
          "Beverages",
          "Cafe",
          "Snacks",
          "Desserts",
          "Bakery",
          "Ice Cream",
        ],
        avgRating: 4.4,
        parentId: "195515",
        avgRatingString: "4.4",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 4.3,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "4.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-22 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          subHeader: "UPTO ₹80",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/starbucks-coffee-saheli-marg-panchwati-udaipur-628871",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "87829",
        name: "Jai Mahaveer Punjabi Dhaba",
        cloudinaryImageId: "vvjwsqyjliiywnwgwljr",
        locality: "Station Road",
        areaName: "City Centre",
        costForTwo: "₹200 for two",
        cuisines: ["Thalis", "Biryani", "Punjabi", "Chinese", "Tandoor"],
        avgRating: 4.1,
        veg: true,
        parentId: "108614",
        avgRatingString: "4.1",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 2.9,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-22 23:15:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/jai-mahaveer-punjabi-dhaba-station-road-city-centre-udaipur-87829",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "301573",
        name: "Ludhiana Punjabi Dhaba",
        cloudinaryImageId: "ag3abkmasn918mlrjq7t",
        locality: "Centre City Station Road \n",
        areaName: "City Centre",
        costForTwo: "₹150 for two",
        cuisines: ["Thalis", "Punjabi", "Chinese", "Biryani", "Snacks"],
        avgRating: 4.2,
        parentId: "126779",
        avgRatingString: "4.2",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 2.9,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-22 23:15:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/ludhiana-punjabi-dhaba-centre-city-station-road-city-centre-udaipur-301573",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "74772",
        name: "Schezwan Express",
        cloudinaryImageId: "tjditccbg0mdltwke06q",
        locality: "Madhuban Bank Street",
        areaName: "Panchwati",
        costForTwo: "₹300 for two",
        cuisines: ["Chinese"],
        avgRating: 4.5,
        parentId: "179388",
        avgRatingString: "4.5",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 24,
          lastMileTravel: 2.9,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "2.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-22 22:40:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/schezwan-express-madhuban-bank-street-panchwati-udaipur-74772",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "126920",
        name: "Kaka's Paratha",
        cloudinaryImageId: "suvrciicjwgmiegkrjzd",
        locality: "Sector 3",
        areaName: "Hiran Magri",
        costForTwo: "₹200 for two",
        cuisines: ["North Indian", "Punjabi", "Thalis", "Biryani", "Tandoor"],
        avgRating: 4.4,
        parentId: "113745",
        avgRatingString: "4.4",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-23 00:45:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/kakas-paratha-sector-3-hiran-magri-udaipur-126920",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "86250",
        name: "Shiv shakti chinese fast food",
        cloudinaryImageId: "h6sy2xsqditlk7djbuak",
        locality: "RMV Road",
        areaName: "Chandpole",
        costForTwo: "₹300 for two",
        cuisines: ["Chinese", "Pastas", "Burgers", "Ice Cream", "Pizzas"],
        avgRating: 4,
        veg: true,
        parentId: "183345",
        avgRatingString: "4.0",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-22 23:15:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/shiv-shakti-chinese-fast-food-rmv-road-chandpole-udaipur-86250",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "301693",
        name: "Barbeque Nation",
        cloudinaryImageId: "xywytekahlmhoytvrt7i",
        locality: "Bhuwana",
        areaName: "Bhuwana",
        costForTwo: "₹600 for two",
        cuisines: [
          "North Indian",
          "Barbecue",
          "Biryani",
          "Kebabs",
          "Mughlai",
          "Desserts",
        ],
        avgRating: 4.1,
        parentId: "2438",
        avgRatingString: "4.1",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 3.8,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "3.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-22 16:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/barbeque-nation-bhuwana-udaipur-301693",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "569303",
        name: "Rominus Pizza And Burger",
        cloudinaryImageId: "9ec9ffd900c24ef751e2f34ba3d2fd4b",
        locality: "Chetak B Mall",
        areaName: "City Centre",
        costForTwo: "₹300 for two",
        cuisines: ["Italian-American", "Snacks"],
        avgRating: 4.3,
        parentId: "8387",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 2.5,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "2.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-23 02:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/rominus-pizza-and-burger-chetak-b-mall-city-centre-udaipur-569303",
        type: "WEBLINK",
      },
    },
  ];

  return (
    <div className="body">
      <div className="Search"></div>
      <div className="res-container">
        {resdata.map((Restaurant) => (
          <RestaurantCard key={Restaurant.info.id} resdata={Restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
