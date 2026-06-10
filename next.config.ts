import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // 301s from the old WordPress site (Phase 2 adds service-page targets)
    return [
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/thankyou", destination: "/thank-you", permanent: true },
      {
        source: "/privacy-and-policy",
        destination: "/privacy-policy",
        permanent: true,
      },
      { source: "/why-us", destination: "/about", permanent: true },
      { source: "/vision-and-mission", destination: "/about", permanent: true },
      { source: "/our-team", destination: "/about", permanent: true },
      { source: "/reviews", destination: "/about", permanent: true },
      { source: "/sample-page", destination: "/", permanent: true },
      {
        source: "/create-your-website-with-blocks",
        destination: "/",
        permanent: true,
      },
      // Service pages
      {
        source: "/door-to-door-car-shipping-services",
        destination: "/services/door-to-door-car-shipping",
        permanent: true,
      },
      {
        source: "/door-to-door-car-shipping-services/",
        destination: "/services/door-to-door-car-shipping",
        permanent: true,
      },
      {
        source: "/open-car-shipping-services",
        destination: "/services/open-car-shipping",
        permanent: true,
      },
      {
        source: "/open-car-shipping-services/",
        destination: "/services/open-car-shipping",
        permanent: true,
      },
      {
        source: "/enclosed-car-shipping-services",
        destination: "/services/enclosed-car-shipping",
        permanent: true,
      },
      {
        source: "/enclosed-car-shipping-services/",
        destination: "/services/enclosed-car-shipping",
        permanent: true,
      },
      {
        source: "/motorcycle-shipping",
        destination: "/services/motorcycle-shipping",
        permanent: true,
      },
      {
        source: "/military-car-shipping",
        destination: "/services/military-car-shipping",
        permanent: true,
      },
      {
        source: "/snowbirds-car-shipping-service",
        destination: "/services/snowbird-car-shipping",
        permanent: true,
      },
      {
        source: "/snowbirds-car-shipping-service/",
        destination: "/services/snowbird-car-shipping",
        permanent: true,
      },
      {
        source: "/college-students-car-shipping-service",
        destination: "/services/college-student-car-shipping",
        permanent: true,
      },
      {
        source: "/college-students-car-shipping-service/",
        destination: "/services/college-student-car-shipping",
        permanent: true,
      },
      {
        source: "/car-collectors",
        destination: "/services/classic-car-shipping",
        permanent: true,
      },
      {
        source: "/online-car-buyers",
        destination: "/services/online-car-buyers",
        permanent: true,
      },
      {
        source: "/car-resellers-shipping",
        destination: "/services/car-resellers",
        permanent: true,
      },
      {
        source: "/car-resellers-shipping/",
        destination: "/services/car-resellers",
        permanent: true,
      },
      // Business pages
      {
        source: "/auto-dealerships",
        destination: "/business/auto-dealerships",
        permanent: true,
      },
      {
        source: "/auto-auctions",
        destination: "/business/auto-auctions",
        permanent: true,
      },
      {
        source: "/car-rental-companies",
        destination: "/business/car-rental-companies",
        permanent: true,
      },
      // Trailing-slash variants for all redirected pages
      { source: "/contact-us/", destination: "/contact", permanent: true },
      { source: "/why-us/", destination: "/about", permanent: true },
      { source: "/vision-and-mission/", destination: "/about", permanent: true },
      { source: "/our-team/", destination: "/about", permanent: true },
      { source: "/reviews/", destination: "/about", permanent: true },
      { source: "/auto-dealerships/", destination: "/business/auto-dealerships", permanent: true },
      { source: "/auto-auctions/", destination: "/business/auto-auctions", permanent: true },
      { source: "/car-rental-companies/", destination: "/business/car-rental-companies", permanent: true },
      { source: "/motorcycle-shipping/", destination: "/services/motorcycle-shipping", permanent: true },
      { source: "/military-car-shipping/", destination: "/services/military-car-shipping", permanent: true },
      { source: "/car-collectors/", destination: "/services/classic-car-shipping", permanent: true },
      { source: "/online-car-buyers/", destination: "/services/online-car-buyers", permanent: true },
      // Legacy blog numeric slugs
      { source: "/830", destination: "/blog", permanent: true },
      { source: "/825", destination: "/blog", permanent: true },
      { source: "/824", destination: "/blog", permanent: true },
      { source: "/blogs", destination: "/blog", permanent: true },
      { source: "/blogs/", destination: "/blog", permanent: true },
      { source: "/for-individuals", destination: "/#services", permanent: true },
      { source: "/for-businesses", destination: "/business/auto-dealerships", permanent: true },
      // Carrier network
      {
        source: "/carrier-network",
        destination: "/carriers",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
