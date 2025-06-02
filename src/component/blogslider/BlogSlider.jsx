import React, { useRef, useState, useEffect } from "react";
import "../blogslider/BlogSlider.css";
import BlogImage1 from "../blogslider/blogimage1.jpg";
import BlogImage2 from "../blogslider/blogimage2.jpg";
import BlogImage3 from "../blogslider/blogimage3.jpg";

const blogData = [
  {
    title: "The Future of Faster EV Home Chargers",
    desc: "As the transition towards electric vehicles (EVs) accelerates, the development of faster...",
    image: BlogImage3,
  },
  {
    title: "Complete Guide to Electric Vehicle Charger Setup",
    desc: "Discover the essential steps and components required for setting up an electric vehicle cha...",
    image: BlogImage2,
  },
  {
    title: "Benefits of Professional EV Charger Installation",
    desc: "Discover the essential steps and components required for setting up an electric vehicle cha...",
    image: BlogImage1,
  },
  {
    title: "Another Blog Example Title",
    desc: "Some other description that can be added here...",
    image: BlogImage3,
  },
  {
    title: "More Insights About EV Charging",
    desc: "Additional content to illustrate the scrolling functionality...",
    image: BlogImage2,
  },
  {
    title: "Trends in EV Charging 2025",
    desc: "Latest trends and tech innovations in EV space...",
    image: BlogImage1,
  },
  {
    title: "Another Blog Example Title",
    desc: "Some other description that can be added here...",
    image: BlogImage3,
  },
  {
    title: "More Insights About EV Charging",
    desc: "Additional content to illustrate the scrolling functionality...",
    image: BlogImage2,
  },
  {
    title: "Trends in EV Charging 2025",
    desc: "Latest trends and tech innovations in EV space...",
    image: BlogImage1,
  },
];

const BlogSlider = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const totalPages = Math.ceil(blogData.length / 3);

  const handleScroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft;
    const width = scrollRef.current.offsetWidth;
    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };

  const handleDotClick = (index) => {
    const width = scrollRef.current.offsetWidth;
    scrollRef.current.scrollTo({
      left: index * width,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const slider = scrollRef.current;
    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="blog-slider-container">
      <div className="blog-align-div">
        <div className="blog-heading">
          <span className="blog-heading-text">Checkout Our Blogs</span>{" "}
          <button className="blog-btn">VIEW ALL</button>
        </div>
        <div className="blog-slider" ref={scrollRef}>
          {blogData.map((item, index) => (
            <div className="blog-card" key={index}>
              <img className="blog-card-img" src={item.image} alt="Blog" />
              <div className="blog-content">
                <div className="blog-title-div">{item.title}</div>
                <p>{item.desc}</p>
                <div>READ BLOG →</div>
              </div>
            </div>
          ))}
        </div>

        {/* Pill-shaped progress bar */}
        <div className="slider-progress">
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              className={`progress-pill ${i === activeIndex ? "active" : ""}`}
              onClick={() => handleDotClick(i)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;
