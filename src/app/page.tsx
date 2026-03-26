"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { MessageCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="small"
        sizing="mediumSizeLargeTitles"
        background="noise"
        cardStyle="inset"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        { name: "Home", id: "#hero" },
        { name: "About", id: "#about" },
        { name: "Figures", id: "#products" },
        { name: "Reviews", id: "#testimonials" },
        { name: "FAQ", id: "#faq" },
        { name: "Contact", id: "#contact" }
      ]}
      brandName="KawaiiCollect"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{ variant: "gradient-bars" }}
      title="Bring Joy to Your Shelf"
      description="Discover our hand-picked collection of the cutest collectible figures from around the world. Express yourself with every pose."
      buttons={[{ text: "Shop Now", href: "#products" }]}
      imageSrc="http://img.b2bpic.net/free-vector/business-background-design_1343-102.jpg"
      mediaAnimation="slide-up"
      imageAlt="cute anime figure on display"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Our Passion for Cuteness"
      description="We believe that everyone deserves a little bit of magic on their desk. Our figures are curated to bring smiles, spark creativity, and complete your collection."
      metrics={[
        { value: "500+", title: "Figures Shipped" },
        { value: "120+", title: "Happy Collectors" },
        { value: "24/7", title: "Customer Support" }
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/bad-teddy-bear-toys_53876-144953.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
      imageAlt="toy collector hands holding figure"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",          brand: "KawaiiCo",          name: "Luna the Star Cat",          price: "$29.99",          rating: 5,
          reviewCount: "128",          imageSrc: "http://img.b2bpic.net/free-vector/cute-love-couples_23-2147532377.jpg"
        },
        {
          id: "2",          brand: "MiniFairy",          name: "Bento Bear",          price: "$19.99",          rating: 4,
          reviewCount: "85",          imageSrc: "http://img.b2bpic.net/free-photo/abstract-sexual-health-assortment-with-food_23-2149101540.jpg"
        },
        {
          id: "3",          brand: "DreamToys",          name: "Nebula Bunny",          price: "$34.99",          rating: 5,
          reviewCount: "210",          imageSrc: "http://img.b2bpic.net/free-photo/christmas-toys-branch-beige-surface_114579-46173.jpg"
        }
      ]}
      title="Our Latest Figures"
      description="Explore the newest arrivals that everyone is talking about."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Sarah J.",          date: "Jan 2025",          title: "Best Quality!",          quote: "The detail on these figures is incredible. Super cute addition to my desk!",          tag: "Fan",          avatarSrc: "http://img.b2bpic.net/free-photo/joyful-young-sporty-man-with-closed-eyes-wearing-headband-wristband-showing-yes-gesture-isolated-olive-green-background_141793-72224.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/conceptual-business-employment-with-wooden-human-figure_176474-10471.jpg"
        },
        {
          id: "2",          name: "Michael R.",          date: "Dec 2024",          title: "Super Fast Shipping",          quote: "Packaging was secure, and the figure arrived in perfect condition. Highly recommend!",          tag: "Buyer",          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-young-girl-with-long-hair-red-lips-grey-coat-wall-she-holds-camera-keeps-eyes-closed-smiling_197531-2492.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/abstract-store-with-futuristic-concept-architecture_23-2150861896.jpg"
        },
        {
          id: "3",          name: "Emily K.",          date: "Nov 2024",          title: "Absolutely Adorable",          quote: "I can't stop staring at how cute my new bear figure is. Great collection!",          tag: "Fan",          avatarSrc: "http://img.b2bpic.net/free-photo/modern-round-desk-fan-with-simple-background_23-2150808049.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-girl-posing-with-copy-space_23-2148905723.jpg"
        },
        {
          id: "4",          name: "David W.",          date: "Oct 2024",          title: "Must-Have",          quote: "KawaiiCollect has the best selection of figures. Quality is top-notch.",          tag: "Buyer",          avatarSrc: "http://img.b2bpic.net/free-photo/young-joyful-blonde-russian-girl-stands-with-raised-fists-isolated-white-space-with-copy-space_141793-60182.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/cute-plush-toy-made-from-crochet_23-2151145645.jpg"
        }
      ]}
      title="Loved by Collectors"
      description="Don't just take our word for it—see what our community has to say."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "Are these authentic?", content: "Yes, we only source authentic, high-quality figures directly from trusted manufacturers." },
        { id: "f2", title: "How do you ship?", content: "All figures are packed with protective cushioning to ensure they arrive safely to your doorstep." },
        { id: "f3", title: "Can I return a figure?", content: "If your item arrives damaged, we offer a full return and replacement service within 30 days." }
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/woman-showing-thumb-up-jacket-t-shirt-looking-pleased_176474-41787.jpg"
      title="Common Questions"
      description="Have questions about our figures or shipping? We have answers."
      faqsAnimation="slide-up"
      imageAlt="question mark with cute toy"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactFaq
      animationType="slide-up"
      useInvertedBackground={false}
      faqs={[
        { id: "faq-1", title: "Support hours?", content: "Our support team is available Monday through Friday from 9 AM to 5 PM." },
        { id: "faq-2", title: "Bulk orders?", content: "Yes, we offer custom quotes for bulk figurine purchases. Send us a message!" }
      ]}
      ctaTitle="Need Help?"
      ctaDescription="Get in touch with our team for questions about your order or our collection."
      ctaButton={{ text: "Message Us", href: "#" }}
      ctaIcon={MessageCircle}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/soft-vintage-gradient-blur-background-with-pastel-colored-well-use-as-studio-room-product-presentation-banner_1258-71557.jpg"
      columns={[
        { title: "Shop", items: [{ label: "Figures", href: "#products" }, { label: "New Arrivals", href: "#" }] },
        { title: "Support", items: [{ label: "FAQ", href: "#faq" }, { label: "Contact Us", href: "#contact" }] },
        { title: "Legal", items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }] }
      ]}
      logoText="KawaiiCollect"
      copyrightText="© 2025 | KawaiiCollect"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}